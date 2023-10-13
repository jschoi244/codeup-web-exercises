"use strict";

//Create a function that takes in two numbers and returns the sum
function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum("test", "test"));

// Create a function named fullName that takes in two inputs
// a first name and last name, and returns the first name and
// last name concatenated together.

// function fullName(first, last) {
//     return first + " " + last;
// }
function fullName(first, last) {
    return `${first} ${last}`;
}

console.log(fullName("Justin", "Choi"))

// Anonymous function
const decrement = function(num) {
    return num - 1;
}

console.log(decrement(5));

// Arrow function

const fullname = (first, last) => {
    return `${first} ${last}`;
}
console.log(fullname("Tess", "Choi"));

// Create a function that takes in a string and returns the string
// in all lower case letters
let testStr = "TEST";
const lowercase = (str) => (str = str.toLowerCase());
console.log(lowercase(testStr));

function greeting(greeting = "Howdy!") {
    return greeting;
}

console.log(greeting());
console.log(greeting("Greetings!"));

let globalVar = "Hello! My name is Globie!";
