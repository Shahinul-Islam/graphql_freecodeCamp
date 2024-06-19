// Import necessary modules from the @apollo/server package
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Import schema and data base from respective files
import { typeDefs } from "./schema.js";
import db from "./_db.js";
import { GraphQLError } from "graphql";

// Set the port number for the server
const port = 4000;

// Define the resolvers for the GraphQL queries and mutations
const resolvers = {
	// Resolver for the 'games' query
	Query: {
		games: () => db.games,
		// Resolver for the 'game' query
		game: (_, args) => {
			// Find the game in the database based on the provided ID
			const game = db.games.find((item) => item.id === args.id);
			if (!game) {
				// Throw an error if the game ID is not found
				throw new GraphQLError(`Game with ID '${args.id}' not found`, {
					extensions: { code: "GAME_NOT_FOUND" },
				});
			}
			return game;
		},
		// Resolver for the 'reviews' query
		reviews: () => db.reviews,
		// Resolver for the 'review' query
		review: (_, args) => {
			// Find the review in the database based on the provided ID
			const review = db.reviews.find((item) => item.id === args.id);
			return review;
		},
		// Resolver for the 'authors' query
		authors: () => db.authors,
		// Resolver for the 'author' query
		author: (_, args) => {
			// Find the author in the database based on the provided ID
			const author = db.authors.find((item) => item.id === args.id);
			return author;
		},
	},
	Game: {
		reviews(parent) {
			return db.reviews.filter((r) => r.gameId === parent.id);
		},
	},
	Author: {
		reviews(parent) {
			return db.reviews.filter((r) => r.authorId === parent.id);
		},
	},
	Review: {
		game(parent) {
			return db.games.find((g) => g.id === parent.gameId);
		},
		author(parent) {
			return db.authors.find((a) => a.id === parent.authorId);
		},
	},
	Mutation: {
		deleteGame: (_, args) => {
			db.games = db.games.filter((game) => game.id !== args.id);
			return db.games;
		},
		addGame: (_, args) => {
			let game = {
				...args.game,
				id: Math.floor(Math.random() * 1000).toString(),
			};
			db.games.push(game);
			return game;
		},
		updateGame: (_, args) => {
			db.games = db.games.map((g) => {
				if (g.id === args.id) {
					return {
						...g,
						...args.edits,
					};
				}
				return g;
			});
			return db.games.find((g) => g.id === args.id);
		},
	},
};

// Set up the Apollo Server with the schema and resolvers
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// Start the standalone server and listen on the specified port
const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

// Log a message indicating that the server is ready
console.log(`🚀 Server ready at ${url} & Port: ${port}`);
