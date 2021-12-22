// 1.1 Add a button to your html with the id btnToClick and in your javascript add the click event that runs a console log with the information of the click event.
// 1.2 Add a 'focus' event that runs a console.log with the value of the input.
// 1.3 Add an 'input' event that runs a console.log with the value of the input.

// 1.1 Add a button to your html with the id btnToClick and in your javascript add the click event that runs a console log with the information of the click event.

let newBtn1$$=document.createElement(`button`);
newBtn1$$.textContent=`Clicar aquí`;
document.body.appendChild(newBtn1$$);

newBtn1$$.addEventListener(`click`,clicarBoto1)

function clicarBoto1(e){
    if(!e) e=window.event;          //navegador de microsoft per gestionar events, són els únics que ho necessiten

    console.log(`Clicat`);

}

// 1.2 Add a 'focus' event that runs a console.log with the value of the input.

let showInput$$=document.querySelector(`.focus`);

showInput$$.addEventListener(`focus`,focusFocus);

function focusFocus(e){
    if(!e) e=window.event;          //navegador de microsoft per gestionar events, són els únics que ho necessiten

    console.log(`Tenim el focus establert`);
}


// 1.3 Add an 'input' event that runs a console.log with the value of the input.

let showValueInput$$=document.querySelector(`.value`);

showValueInput$$.addEventListener(`input`,inputValue);

function inputValue(e){
    if(!e) e=window.event;          //navegador de microsoft per gestionar events, són els únics que ho necessiten

    console.log(e.target.value);        //e.target actua directament amb el node amb el que s'esta treballant
}

//INVENTAT
// Al clicar el botó, aconseguir que es guardi en consola el primer Input


let newBtn2$$=document.createElement(`button`);
newBtn2$$.textContent=`Emmagatzemar el valor del primer input`;
document.body.appendChild(newBtn2$$);

newBtn2$$.addEventListener(`click`,emmagatzemarValor);

function emmagatzemarValor(e){
    if(!e) e=window.event;          //navegador de microsoft per gestionar events, són els únics que ho necessiten

    let showInputFirst$$=document.querySelector(`.click`);

    showInputFirst$$.addEventListener(`input`,escriuValor(showInputFirst$$));
}

function escriuValor(x){                //l'anomenem x per diferenciar-lo de la e, que l'utilitzarem quan parlem del mateix node
    console.log(x.value);
}