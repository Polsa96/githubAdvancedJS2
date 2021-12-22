// 1.1 Use this url from the Agify api 'https://api.agify.io?name=michael' to do a .fetch() and receive the data it returns. Print it using a
// console.log(). To do this, you need to create an .html and a .js.
// 1.2 Given the following javascript and html. Add the necessary functionality using fetch() to query the api when the button is clicked,
// passing as api parameter, the value of the input.
// const baseUrl = 'https://api.nationalize.io';
// 1.3 Based on the previous exercise. Dynamically create an element for each request to the api that says...'The name X has a Y percent of being from Z' etc etc.
// EJ: The name Pepe has a 22 percent of being from ET and a 6 percent of being from MZ. of MZ.
// 1.4 Based on the previous exercise, create a button with the text 'X' for each of the p's that you have inserted and
// of the p's that you have inserted and if the user clicks on this button delete the associated paragraph.

// 1.1 Use this url from the Agify api 'https://api.agify.io?name=michael' to do a .fetch() and receive the data it returns. Print it using a
// console.log(). To do this, you need to create an .html and a .js.
fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

// 1.2 Given the following javascript and html. Add the necessary functionality using fetch() to query the api when the button is clicked,
// passing as api parameter, the value of the input.
const baseUrl = "https://api.nationalize.io";

let button$$ = document.querySelector(`button`);

button$$.addEventListener(`click`, emmagatzemarValor);

function emmagatzemarValor(e) {
  if (!e) e = window.event; //navegador de microsoft per gestionar events, són els únics que ho necessiten

  let input$$ = document.querySelector(`input`);

  input$$.addEventListener(`input`, escriuValor(input$$));
}

function escriuValor(x) {
  //l'anomenem x per diferenciar-lo de la e, que l'utilitzarem quan parlem del mateix node
  console.log(x.value);

  fetch(baseUrl + "?name=" + x.value)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      writeWebValue(x.value, res);
      writeWebX();
    });
}

// 1.3 Based on the previous exercise. Dynamically create an element for each request to the api that says...'The name X has a Y percent of being from Z' etc etc.
// EJ: The name Pepe has a 22 percent of being from ET and a 6 percent of being from MZ.

function writeWebValue(x, res) {
  newP$$ = document.createElement(`p`);

  if(res.country[2].country_id===""){
      res.country[2].country_id="the rest of the world";        //Provar amb `Jaume` nom català que només es troba a España o Andorra 
  }

  newP$$.textContent = `The name ${x} has a ${100*res.country[0].probability}% of being from ${res.country[0].country_id}, ${100*res.country[1].probability}% of being from ${res.country[1].country_id} and ${100*res.country[2].probability}% of being from ${res.country[2].country_id}.`;

  document.body.appendChild(newP$$);
}


// 1.4 Based on the previous exercise, create a button with the text 'X' for each of the p's that you have inserted and
// if the user clicks on this button delete the associated paragraph.

function writeWebX(){
    newX$$ = document.createElement(`button`);
    newX$$.setAttribute(`class`,`buttonX`);
    newX$$.textContent=`X`;
    document.body.appendChild(newX$$);

    esborrarText();
}

function esborrarText(){
    let allX$$=document.querySelectorAll(`.buttonX`);
    let allP$$=document.querySelectorAll(`p`);

    for(let i=0;i<allX$$.length;i++){
        allX$$[i].addEventListener(`click`,function(){
            allX$$[i].remove();
            allP$$[i].remove();
        });
    }
}