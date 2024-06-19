//data base for this project with some demo data
let games = [
	{
		id: "1",
		title: "The Last of Us",
		platforms: ["PS4"],
	},
	{
		id: "2",
		title: "God of War",
		platforms: ["PS4", "Xbox", "PC"],
	},
	{
		id: "3",
		title: "God of War 2",
		platforms: ["Switch"],
	},
	{
		id: "4",
		title: "God of War 3",
		platforms: ["PS5"],
	},
	{
		id: "5",
		title: "God of War 4",
		platforms: ["Xbox"],
	},
];

let authors = [
	{
		id: "1",
		name: "Neil Druckmann",
		verified: true,
	},
	{
		id: "2",
		name: "Seth Godin",
		verified: false,
	},
	{
		id: "3",
		name: "Dan Brown",
		verified: true,
	},
];

let reviews = [
	{
		id: "1",
		rating: 5,
		content: "I loved this game!",
		authorId: "1",
		gameId: "1",
	},
	{
		id: "2",
		rating: 3,
		content: "I'm not sure if I like this game.",
		authorId: "2",
		gameId: "1",
	},
	{
		id: "3",
		rating: 1,
		content: "I hate this game.",
		authorId: "3",
		gameId: "1",
	},
	{
		id: "4",
		rating: 5,
		content: "I loved this game!",
		authorId: "1",
		gameId: "2",
	},
	{
		id: "5",
		rating: 3,
		content: "I'm not sure if I like this game.",
		authorId: "2",
		gameId: "2",
	},
	{
		id: "6",
		rating: 1,
		content: "I hate this game.",
		authorId: "3",
		gameId: "2",
	},
	{
		id: "7",
		rating: 5,
		content: "I loved this game!",
		authorId: "1",
		gameId: "3",
	},
	{
		id: "8",
		rating: 3,
		content: "I'm not sure if I like this game.",
		authorId: "2",
		gameId: "3",
	},
	{
		id: "9",
		rating: 1,
		content: "I hate this game.",
		authorId: "3",
		gameId: "3",
	},
];

export default { games, authors, reviews };
