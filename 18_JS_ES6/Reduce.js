// 7.1 Given the following array, make a sum of all the students' test scores using the .reduce() function. students using the .reduce() function.
// const exams = [
//     {name: 'Yuyu Cabeza Crack', score: 5}, 
//     {name: 'Maria Aranda Jimenez', score: 1}, 
//     {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
//     {name: 'Mercedez Regrera Brito', score: 7},
//     {name: 'Pamela Anderson', score: 3},
//     {name: 'Enrique Perez Lijó', score: 6},
//     {name: 'Pedro Benitez Pacheco', score: 8},
//     {name: 'Ayumi Hamasaki', score: 4},
//     {name: 'Robert Kiyosaki', score: 2},
//     {name: 'Keanu Reeves', score: 10}
// ];
// 7.2 Given the same array, make a sum of all the test scores of all the students who are passing using the function students who are passing using the .reduce() function.
// 7.3 Given the same array, average the scores of all the exams .reduce().


// 7.1 Given the following array, make a sum of all the students' test scores using the .reduce() function. students using the .reduce() function.
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let totalScore=exams.reduce((acc,exam)=>acc+exam.score,0);      //El 0 del final és un valor que se suma al resultat final
console.log(totalScore);

// 7.2 Given the same array, make a sum of all the test scores of all the students who are passing using the .reduce() function.
let totalScorePass=exams.reduce((acc,exam)=>{
    if(exam.score>=5){
        return acc+exam.score;
    }else{
        return acc;
    }
},0)

console.log(totalScorePass);

// 7.3 Given the same array, average the scores of all the exams .reduce().
let comptador=0;
let averageScore=totalScore/exams.length;

console.log(averageScore);
