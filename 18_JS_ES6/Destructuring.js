// 2.1 Based on the following javascript, create variables based on the object's properties using object destructuring of the object using object destructuring and print them by console. 
// Be careful, it is not necessary to destructuring the array, only the object.
//const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
// 2.2 Based on the following javascript, use destructuring to create 3 variables called fruit1, fruit2 and fruit3, with the values of the array. Then print it by console.
// const fruits = ['Banana', 'Strawberry', 'Orange'];
// 2.3 Based on the following javascript, use destructuring to create 2 variables by matching it to the function and printing it to the console.
// const animalFunction = () => {
//     return {name: 'Bengal Tiger', race: 'Tiger'}
// };
// 2.4 Based on the following javascript, use destructuring to create the name and itv variables with their respective values. Subsequently create 
// 3 variables using the same destructuring for each of the years and check that everything is OK by printing them.
// const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }


// 2.1 Based on the following javascript, create variables based on the object's properties using object destructuring of the object using object destructuring and print them by console. 
// Be careful, it is not necessary to destructuring the array, only the object.
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const{title, gender, year} = game;

console.log(title);
console.log(gender);
console.log(year);
console.log(game);
console.log(`-----------`);

// 2.2 Based on the following javascript, use destructuring to create 3 variables called fruit1, fruit2 and fruit3, with the values of the array. Then print it by console.
const fruits = ['Banana', 'Strawberry', 'Orange'];

const[fruit1,fruit2,fruit3]=fruits;
console.log(fruit3,fruit1,fruit2);
console.log(fruits);
console.log(`-----------`);

// 2.3 Based on the following javascript, use destructuring to create 2 variables by matching it to the function and printing it to the console.
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const{name, race}=animalFunction();
console.log(race,name);
console.log(animalFunction());
console.log(`-----------`);

// 2.4 Based on the following javascript, use destructuring to create the name and itv variables with their respective values. Subsequently create 
// 3 variables using the same destructuring for each of the years and check that everything is OK by printing them.
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const{name:name1,itv}=car;          //Observar que al canviar de nom s'ha d'indicar
const[any1,any2,any3]=itv;
console.log(name1,any1,any2,any3);