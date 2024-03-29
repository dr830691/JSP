// How JavaScript works and execution context.
//1. What is JAVASCRIPT
/*JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.*/
// 2.How Javascript works
/*Javascript program runs in 2 phases
A.Memory allocation phase-> a global execution context is created and every declared variable assign a undefined value in it and function definitions will be as it is written in GEC
B.Code execution phase-> The code is compiled and variable value will be changes as assigned values and function will be called as per coding order*/
print_name();
console.log(a);
//console.log(b);// let and const will not be hoisted
var a=10;
console.log(a);
/*When the code will start 
1.Execution Context
2.A new execution context wll be created to invoke a new function
3.compilation has been done in 2 phases
A.Memory creation phase
B.Code execution phase
*/
function print_name(){
   console.log("Hello World");
}
