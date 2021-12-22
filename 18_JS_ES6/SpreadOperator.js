// 3.1 Given the following array, create a copy using spread operators.
// const pointsList = [32, 54, 21, 64, 75, 43].
// 3.2 Given the following object, create a copy using spread operators.
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// 3.3 Given the following arrays, create a new array by putting them together using spread operands.
// const pointsList = [32, 54, 21, 64, 75, 43];
// const pointsList2 = [54,87,99,65,32];
// 3.4 Given the following objects. Create a new object by merging the two with spread operators.
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
// 3.5 Given the following array. Create a copy of it by deleting position 2 but without editing the initial array. Again, using spread operatos.
// const colors = ['red', 'blue', 'yellow', 'green', 'orange'];

// 3.1 Given the following array, create a copy using spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];

let myList=[...pointsList];
console.log(myList);

// 3.2 Given the following object, create a copy using spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let newToy={...toy};
console.log(toy, newToy);

toy.name=`Buzz Lightyear`;          //Fent proves
newToy.name=`Red Buzz`;
console.log(toy, newToy);

// 3.3 Given the following arrays, create a new array by putting them together using spread operands.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

let newPoints=[...pointsList1,...pointsList2];
console.log(newPoints);

// 3.4 Given the following objects. Create a new object by merging the two with spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy1Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let finalToy={...toy1,...toy1Update};
console.log(finalToy);

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', lights: 'multicolor'};        //canvi per comprovar que si hi ha dos parametres iguals es sobreescriuen
finalToy={...toy2,...toy1Update};
console.log(finalToy);

// 3.5 Given the following array. Create a copy of it by deleting position 2 but without editing the initial array. Again, using spread operatos.
const colors = ['red', 'blue', 'yellow', 'green', 'orange'];

let colors2=[...colors];
colors2.splice(2,1);
console.log(`COLORS:`,colors,`COLORS2:`, colors2);