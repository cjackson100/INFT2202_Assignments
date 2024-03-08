// ICE 2: Javascript to Typescript index.ts file
// Edited by Christina Jackson
// March 7 2024
// Javascript to Typescript conversion in class assignment for INFT-2202-07


import {
  add,
  subtract,
  multiply,
  divide,
}
from "./calculator";

import * as readline from "readline-sync";



var readInput = () => {
  console.log("Welcome to the calculator. Choose one of the following options");
  console.log("1. add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. divide");
  console.log("5. exit");

  let option = readline.question(">> ");

  if (option !== "5") {
    console.log("Enter the first number");
    let a = Number(readline.question(">> "));

    console.log("Enter the second number");
    let b = Number(readline.question(">> "));

    let c: Number;
    switch(option){
      case "1": {
        c = add(a, b);
        console.log(`a + b = ${c}`);
      }
      break;

      case "2": {
        c = subtract(a, b);
        console.log(`a - b = ${c}`);
      }
      break;

      case "3": {
        c = multiply(a, b);
        console.log(`a * b = ${c}`);
      }
      break;

      case "4": {
        c = divide(a, b);
        console.log(`a / b = ${c}`);
      }
      break;
    }    

    readInput();
  }
}

readInput();

console.log("Thank you for using calculator. Goodbye");