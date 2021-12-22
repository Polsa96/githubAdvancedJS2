// 6.1 Given the following javascript filter the video games by gender = 'RPG' using .filter() and use .reduce() to get the average of their .score. 
// The .find() function could also help you to find the gender 'RPG' in the .gender array. array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Adventure', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Action', 'Adventure'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Platform'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Adventure'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', `The most fucking beautiful thing I've ever seen`], score: 10},
];

function findVideogamesRPG(videogames){
    let videogamesFinded=[];
    for(let i=0;i<videogames.length;i++){
        for(let j=0;j<videogames[i].genders.length;j++){
            if(videogames[i].genders[j]===`RPG`){
                videogamesFinded.push(videogames[i]);
            }
        }
    }
    return videogamesFinded
}

let videogamesRPG=findVideogamesRPG(videogames);

console.log(videogamesRPG);

let videogamesRPGScore=videogamesRPG.reduce((acc,videogameRPG)=>acc+videogameRPG.score,0);

let videogamesRPGScoreAverage=videogamesRPGScore/videogamesRPG.length;

console.log(videogamesRPGScoreAverage);


// const rpgGames = videogames.filter(                                              //Com hauria de trobar el resultat
//     (videogame) => !!videogame.genders.find((gender) => gender === "RPG")
//   );
//   const totalScoreRpgGames = rpgGames.reduce(
//     (accumulator, videogame) => accumulator + videogame.score,
//     0
//   );
//   const average = totalScoreRpgGames / rpgGames.length;
  
//   console.log(average);

