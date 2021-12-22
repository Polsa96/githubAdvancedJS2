// 1.1 Based on the array below, create a list ul > li list dynamically in the html that prints each of the countries.
// const countries = ['Japan', 'Nicaragua', 'Switzerland', 'Australia', 'Venezuela'];
// 1.2 Delete the element with the .fn-remove-me class.
// 1.3 Use the array to dynamically create an ul > li list of elements in the html div with the attribute in the html div with attribute data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
// 1.4 Create dynamically in the html a div list containing an element h4 element for the title and another img element for the image.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];
// 1.5 Based on the previous exercise. Create a button that deletes the last item in the list.
// 1.6 Based on the previous exercise. Create a button for each of the elements of the lists that removes that same element from the html.


// 1.1 Based on the array below, create a list ul > li list dynamically in the html that prints each of the countries.
const countries = ['Japan', 'Nicaragua', 'Switzerland', 'Australia', 'Venezuela'];

let newUl$$=document.createElement(`ul`);
newUl$$.id = `list`;

for(let i=0;i<countries.length;i++){
    let newLi$$=document.createElement(`li`);
    newLi$$.textContent=countries[i];
    newUl$$.appendChild(newLi$$);

}

document.body.appendChild(newUl$$);

// 1.2 Delete the element with the .fn-remove-me class.
let removeMe$$ = document.querySelector(`.fn-remove-me`);
removeMe$$.remove();


// 1.3 Use the array to dynamically create an ul > li list of elements in the html div with the attribute in the html div with attribute data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let newDiv3$$=document.createElement(`div`);
newDiv3$$.setAttribute(`data-function`,`printHere`);                //Per crear un atribut
newDiv3$$.setAttribute(`id`,`newDiv`);

let newUl3$$=document.createElement(`ul`);
newUl3$$.id = `list`;

for(let i=0;i<cars.length;i++){
    let newLi3$$=document.createElement(`li`);
    newLi3$$.textContent=cars[i];
    newUl3$$.appendChild(newLi3$$);

}

newDiv3$$.appendChild(newUl3$$);

document.body.appendChild(newDiv3$$);


// 1.4 Create dynamically in the html a div list containing an element h4 element for the title and another img element for the image.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let i=0;i<countries2.length;i++){
    let newDiv4$$=document.createElement(`div`);
    newDiv4$$.setAttribute(`class`,`image`);

    let newH4$$=document.createElement(`h4`);
    newH4$$.textContent=countries2[i].title;
    newDiv4$$.appendChild(newH4$$);

    let newImg4$$=document.createElement(`img`);
    newImg4$$.setAttribute(`src`,`${countries2[i].imgUrl}`)
    newDiv4$$.appendChild(newImg4$$);

    document.body.appendChild(newDiv4$$);
}


// 1.5 Based on the previous exercise. Create a button that deletes the last item in the list.

let deleteLastBtn$$ = document.createElement(`button`);
deleteLastBtn$$.textContent=`Elimina l'últim element`;
document.body.appendChild(deleteLastBtn$$);

deleteLastBtn$$.addEventListener(`click`,esborrar);

function esborrar(){
    let deleteDiv$$=document.querySelectorAll(`.image`);
    deleteDiv$$[deleteDiv$$.length-1].remove();

}


// 1.6 Based on the previous exercise. Create a button for each of the elements of the lists that removes that same element from the html.

let totsDiv$$=document.querySelectorAll(`.image`);

for(let i=0;i<totsDiv$$.length;i++){
    totsDiv$$[i];
    let button$$=document.createElement(`button`);
    button$$.setAttribute(`class`,`esborrar-una-foto`);
    button$$.textContent=`esborrar`;
    totsDiv$$[i].appendChild(button$$);

    button$$.addEventListener(`click`,function(){
        totsDiv$$[i].remove();
    });    

}






