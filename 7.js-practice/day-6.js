// const { cookies } = require("next/headers");

const { json } = require("express/lib/response");

// a();
// //b();//hoisting is not apply in b function statement
// //Function Statement or //function declaration
// function a(){
//     console.log("a is called");
// }
// //function expression
// let b=function c(){
//     console.log("I'm C");
// }
// //Anonymous function
// let any_func=function (){
//     console.log("I'm anonymous");
// }
// //named function
// // let named_fn=function named_fun(param1,param2){
// //     console.log("I'm named function");
// // }
// // named_fn(arg1,arg2);
// // First class function A first-class function is a function that can be treated like any other value.
// //Ex:-
// let test_func=function (){
//     console.log("I'm anonymous");
// }
// //What is Callback function in Javascript->a callback function is a function that is passed as an argument to another function, and it's executed after some asynchronous operation or a certain event occurs.
// //Ex:-
// setTimeout(function() {
//     console.log("Callback function executed after 2 seconds.");
// }, 2000);
// Possible ways to define object?
// 1.object Literal
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// // 2.Constructor function
// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// // const person = new Person('John', 30, 'New York');
// // 3. oject.create() method
// const personPrototype = {
//     greet: function() {
//         return `Hello, my name is ${this.name}.`;
//     }
// };

// // const person = Object.create(personPrototype);
// person.name = 'John';
// person.age = 30;
// person.city = 'New York';

// // 4.ES6 Classes
// class Person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     greet() {
//         return `Hello, my name is ${this.name}.`;
//     }
// }

// const person = new Person('John', 30, 'New York');

// Shallow copy 
// When we will make a shallow copy of a variable 
// if we do some changes in copied variable then the original variable will also be affect.
let person={
    name:"ravindar",
    age:26
}
let person_1={
    name:"RAVINDAR",
    age:26
}
let person_copy=person; // shallow copy
let person_copy_deep=JSON.parse(JSON.stringify(person_1));//deep Copy
person_copy.name="PSN";
// Deep copy
// if we will make a deep copy of a variable then 
// if we will do any changes in copied variable then original variable will not be affected
person_copy_deep.name="PSN";
console.log("person: ",person, " person_copy",person_copy);
console.log("person: ",person_1, " person_copy_deep",person_copy_deep);

// console.log("hi1");
// setImmediate(function(){
//    console.log("hi");
// });//it will run immediately in a asynchronous way
// console.log("bye");
// console.log("bye");
