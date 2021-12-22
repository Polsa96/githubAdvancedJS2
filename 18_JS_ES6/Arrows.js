// Create an arrow function that has two parameters a and b, and that by default the value of a = 10 and b = 5. Make the function display the sum of the two parameters 
// by console the sum of the two parameters.

// 1.1 Run this function without passing any parameter.
// 1.2 Run this function passing only one parameter.
// 1.3 Run this function by passing two parameters.


// 1.1 Run this function without passing any parameter.

const sum = (a = 10, b = 5) => {
    return console.log(a + b);
  };
  
//sum();
//sum(2);
sum(2, 3);