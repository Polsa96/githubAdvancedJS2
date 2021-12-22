// 1.1 Add a button to your html with the id btnToClick and in your javascript add the click event that runs a console log with the information of the click event.
// 1.2 Add a 'focus' event that runs a console.log with the value of the input.
// 1.3 Add an 'input' event that runs a console.log with the value of the input.

// 1.1 Add a button to your html with the id btnToClick and in your javascript add the click event that runs a console log with the information of the click event.
let newBtn1$$=document.createElement(`button`);
newBtn1$$.id=`btnToClick`;                           //li dono una ID
newBtn1$$.textContent=`Click`;

let hola=0;

let click = function(e){                                 //expresion funcion
    hola++;
    console.log(`Has fet el click número:${hola}`);
}

document.body.appendChild(newBtn1$$);

newBtn1$$.addEventListener('click',click);


// 1.2 Add a 'focus' event that runs a console.log with the value of the input.

//-------                                           //Practico creant un nou botó
let newBtn2$$=document.createElement(`button`);         
newBtn2$$.className=`un-altre-boto`;
newBtn2$$.textContent=`Un altre botó`;
document.body.appendChild(newBtn2$$);

let unAltreClick=function(){
    console.log(`Un altre click`);
}

newBtn2$$.addEventListener(`focus`,unAltreClick);


//-------                                           //Aquest és el de veritat
let focusInput$$=document.querySelector(`.focus`);

let inputReaction=function(){
    console.log(`estic en el input focus`);
}

focusInput$$.addEventListener(`focus`,inputReaction);


// 1.3 Add an 'input' event that runs a console.log with the value of the input.

let showInput$$=document.querySelector(`.value`);

let transportaValue=function(e){
    console.log(e.target.value);
}

showInput$$.addEventListener(`input`,transportaValue);


// Si apreto el botó newBtn1$$ vull que em mostri l'imput del primer input(.click);
let showValueInput$$=document.querySelector(`.click`);

let copiaValue=function(e){
    console.log(e.target.value);
}

showValueInput$$.addEventListener(`input`,copiaValue)
