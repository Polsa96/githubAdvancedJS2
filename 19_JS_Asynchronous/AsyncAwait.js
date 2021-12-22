// 2.1 Convert the following promise to wait to run the console using async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })
//     promise.then((() => {console.log('Time out!')}))
// };
// runTimeOut();
// 2.2 Convert the following function with a fetch using async-await. Remember that to use .fetch() you will have to test the exercise in the browser;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }
// getCharacters();


// 2.1 Convert the following promise to wait to run the console using async-await.
const runTimeOut = async () => {                    //Afegim async
    const promise = await new Promise((resolve) => {            
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    console.log('Time out!')
};

runTimeOut();




// 2.2 Convert the following function with a fetch using async-await. Remember that to use .fetch() you will have to test the exercise in the browser;
async function getCharacters () {               //Afegim async
    //fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await res.json();
    console.log(characters);
}
getCharacters();