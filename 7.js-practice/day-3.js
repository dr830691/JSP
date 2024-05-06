//Using let and const over var keyword and Temporal Dead Zone
// 1. let: Variables declared with let have block-level scope, meaning they are only accessible within the block {} in which they are declared. This helps prevent unintended variable hoisting and reduces the risk of naming conflicts.
//here block means : {}
let a=10// this is declared in global script block scope
{//----------------------------------block start-------------
    let b=10;// this is declared in the block scope
    console.log(a);
    console.log(b);
}//----------------------------------block end --------------
// console.log(b);Error b is not defined because we can not access let declared variable outside the block
//Why prefer const.
//const keyword will be used to declare a constant value that will not be changed inside the program anywhere and it has block scope. and most of the time name will be given in capital letters for better identifications
const PI=3.14;
{
    const SPEED_OF_LIGHT=299792458;
    console.log(PI);
    console.log(SPEED_OF_LIGHT);
}
// console.log(SPEED_OF_LIGHT);// Error SPEED_OF_LIGHT is not defined because we can not access let declared variable outside the block
//Variable hoisting: This is the concept came from memory allocation phase of compilation.

console.log(hi);

var hi=7;
//in the above example hi is hoisted on line no 21 and undefined will be printed on console
console.log(sum(5,2));
function sum(a,b){
    return a+b;
}
//in the above example sum function is hoisted on line no 25 and undefined will be printed on console
//Warning let and  const will not be hoisted
// console.log(hi_1);//ReferenceError: Cannot access 'hi_1' before initialization
// console.log(SPEED_OF_SOUND);//ReferenceError: Cannot access 'SPEED_OF_SOUND' before initialization

let hi_1=7;
const SPEED_OF_SOUND=343.2;
//Functions in JavaScript

//Function Declaration:
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('John'); // Output: Hello, John!
//Function Expression:
const add = function(x, y) {
    return x + y;
};

console.log(add(5, 3)); // Output: 8
//Arrow Function:

const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 6)); // Output: 24
//Immediately Invoked Function Expression (IIFE):

(function() {
    console.log('This is an IIFE');
})();
//Function with Default Parameters:

function greet(name = 'World') {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, World!
greet('Alice'); // Output: Hello, Alice!
//Function with Rest Parameters:

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
//Function with Named Parameters:

function area({ width, height }) {
    return width * height;
}

console.log(area({ width: 10, height: 5 })); // Output: 50
// Undefined vs not defined
//undefined-> primitive value that represents the absence of a value or a variable that has been declared but not assigned a value
let x;
console.log(x);
//Not defined refers to a situation where you try to access a variable that has not been declared at all.
// console.log(y);//Error ReferenceError: y is not defined

