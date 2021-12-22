// 5.1 Given the following array, use .filter() to generate a new array with values greater than 18
// const ages = [22, 14, 24, 24, 55, 65, 21, 12, 13, 90];
// 5.2 Given the following array, use .filter() to generate a new array with the values that are even.
// const ages = [22, 14, 24, 24, 55, 65, 21, 12, 13, 90];
// 5.3 Given the following array, use .filter() to generate a new array with the streamers that have the gameMorePlayed = 'League of legends'.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
// 5.4 Given the following array, use .filter() to generate a new array with the streamers that include the character 'u' in their .name property. We recommend 
// using the .includes() function for checking.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
// 5.5 uses .filter() to generate a new array with the streamers that include the character 'Legends' in its .gameMorePlayed property. We recommend using the 
// .includes() function for checking.In addition, set the value of the .gameMorePlayed property to UPPER CASE when .age is greater than 35.
// 5.6 Given the following html and javascript, use .filter() to show by console streamers that include the word entered in the input. This way, if I 
// I enter 'Ru' it should show me only the streamer 'Rubius'. If i', it should show me the streamers 'Rubius' and 'Ibai'.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
// 5.7 Given the following html and javascript, use .filter() to display by console streamers that include the word entered in the input. This way, if I 
// I enter 'Ru' it should show me only the streamer 'Rubius'. If I enter 'i', it should show me the streamer 'Rubius' and 'Ibai'.
// In this case, it shows only the filtered streamers when we click on the button.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];


// 5.1 Given the following array, use .filter() to generate a new array with values greater than 18
const ages = [22, 14, 24, 24, 55, 65, 21, 12, 13, 90];

let older18=ages.filter(function (age){
    return age>18;
});

console.log(older18);

// 5.2 Given the following array, use .filter() to generate a new array with the values that are even.
const ages2 = [22, 14, 24, 24, 55, 65, 21, 12, 13, 90];

let evenNumbers=ages.filter(function (age){
    if(age%2==0){
        return age;
    }
})

let oddNumbers=ages.filter(function (age){
    if(age%2==1){
        return age;
    }
})

console.log(ages2);
console.log(evenNumbers);
console.log(oddNumbers);

// 5.3 Given the following array, use .filter() to generate a new array with the streamers that have the gameMorePlayed = 'League of legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let LolStreamers=streamers.filter(function(streamer){
    if(streamer.gameMorePlayed==`League of Legends`){
        return streamer;
    }
})

console.log(LolStreamers);

// 5.5 uses .filter() to generate a new array with the streamers that include the character 'Legends' in its .gameMorePlayed property. We recommend using the 
// .includes() function for checking.In addition, set the value of the .gameMorePlayed property to UPPER CASE when .age is greater than 35.

let LolStreamersAge=streamers.filter(function(streamer){
    if(streamer.gameMorePlayed.includes(`League`)){
        if(streamer.age>35){
            return streamer.gameMorePlayed=`LEAGUE OF LEGENDS`;     //No em funcionava el toUpperCase()
        }else{
            return streamer;
        }
    }
    
})

console.log(LolStreamersAge);


// 5.6 Given the following html and javascript, use .filter() to show by console streamers that include the word entered in the input. This way, if I 
// I enter 'Ru' it should show me only the streamer 'Rubius'. If i', it should show me the streamers 'Rubius' and 'Ibai'.
const streamers6 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


let button6$$= document.querySelector(`button`);

button6$$.addEventListener(`click`,emmagatzemarValor);

function emmagatzemarValor(e){

    let input6$$ = document.querySelector(`input`);

    input6$$.addEventListener(`input`,escriuValor(input6$$));
}

function escriuValor(x){
    
    let valor=streamers6.filter(function(streamer6){
        if(streamer6.name.includes(x.value)){
            return streamer6.name;
        }else{
            return `No existeix`;
        }
    })

    console.log(valor);
}