// 4.1 Given the following array, return an array with their names using .map().
// const users = [{id: 1, name: 'Abel'},{id:2, name: 'Julia'},{id:3, name: 'Pedro'},{id:4, name: 'Amanda'}];
// 4.2 Given the following array, return a list containing the values of the of the .name property and change the name to 'Anacleto' in case it starts with 'A'. starts with 'A'.
// const users = [{id: 1, name: 'Abel'},{id:2, name: 'Julia'},{id:3, name: 'Pedro'},{id:4, name: 'Amanda'}];
// 4.3 Given the following array, return a list containing the values of the of the .name property and append to the value of .name the string '(Visited)'. when the value of the isVisited
// property = true.
// const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seoul'}];

// 4.1 Given the following array, return an array with their names using .map().
const users = [{id: 1, name: 'Abel'},{id:2, name: 'Julia'},{id:3, name: 'Pedro'},{id:4, name: 'Amanda'}];

let names=users.map(user =>user.name);
console.log(names);
console.log(users);

// 4.2 Given the following array, return a list containing the values of the of the .name property and change the name to 'Anacleto' in case it starts with 'A'. 
const users2 = [{id: 1, name: 'Abel'},{id:2, name: 'Julia'},{id:3, name: 'Pedro'},{id:4, name: 'Amanda'}];

let names2=users2.map(user =>user.name);
for(let i=0;i<names2.length;i++){
    if(names2[i].charAt(0)==`A`){
        names2[i]=`Anacleto`;
    }
}
console.log(names2);
console.log(users2);

// 4.3 Given the following array, return a list containing the values of the of the .name property and append to the value of .name the string '(Visited)'. when the value of the isVisited
// property = true.
const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seoul'}];

let names3=cities.map(city=>city.name);
for(let i=0;i<names3.length;i++){
    if(cities[i].isVisited){
        names3[i]+=` (Visited)`;
    }
}

// const names3 = cities.map((city) => {            //Com ho hauria de fer
//     if (city.isVisited) {
//       city.name += ": (Visitado)";
//     }
// });

console.log(names3);