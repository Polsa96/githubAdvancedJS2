// 6.1 Given the following array, use .find() to find the number 100.
// const numbers = [32, 21, 63, 95, 100, 67, 43];
// 6.2 Given the following array, use .find() to find the movie of the year 2010.
// const movies = [
// 	{title: 'Madagascar', stars: 4.5, date: 2015},
// 	{title: 'Inception', stars: 5, date: 2010},
// 	{title: 'Your Name', stars: 5, date: 2016}
// ];
// 6.3 Given the following javascript, use .find() to find the name alien. 
// 'Cucushumushu' and the mutation 'Porompompero'. Once you find them, use 
// spread operator to merge them taking into account that the object of the mutation 
// we want to put it in the .mutation property of the merged object.
// const aliens = [
// 	{name: 'Zalamero', planet: 'Eden', age: 4029},
// 	{name: 'Paktu', planet: 'Andromeda', age: 32},
// 	{name: 'Cucushumushu', planet: 'Mars', age: 503021}
// ];
// const mutations = [
// 	{name: 'Porompompero', description: 'Makes the alien able to acquire the ability to drum'},
// 	{name: 'Fly me to the moon', description: 'Allows to fly, solely and exclusively to the moon'},
// 	{name: 'Andando que es gerundio', description: 'Summons an elderly gentleman as Personal Trainer'}
// ];


// 6.1 Given the following array, use .find() to find the number 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];
let numberFinded=numbers.find(e=>e===100);
console.log(numberFinded);

// 6.2 Given the following array, use .find() to find the movie of the year 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Inception', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

let movie2010=movies.find(e=>e.date===2010);
console.log(movie2010);

// 6.3 Given the following javascript, use .find() to find the name alien.  'Cucushumushu' and the mutation 'Porompompero'. Once you find them, use 
// spread operator to merge them taking into account that the object of the mutation  we want to put it in the .mutation property of the merged object.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Mars', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Makes the alien able to acquire the ability to drum'},
	{name: 'Fly me to the moon', description: 'Allows to fly, solely and exclusively to the moon'},
	{name: 'Andando que es gerundio', description: 'Summons an elderly gentleman as Personal Trainer'}
];

let findAlien=aliens.find(alien=>alien.name===`Cucushumushu`);
let findMutation=mutations.find(mutation=>mutation.name===`Porompompero`);

let alienMutation={...findAlien,mutation:{...findMutation}};

console.log(findAlien);
console.log(findMutation);
console.log(alienMutation);