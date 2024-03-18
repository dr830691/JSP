a();
//b();//hoisting is not apply in b function statement
//Function Statement or //function declaration
function a(){
    console.log("a is called");
}
//function expression
let b=function c(){
    console.log("I'm C");
}
//Anonymous function
let any_func=function (){
    console.log("I'm anonymous");
}
//named function
// let named_fn=function named_fun(param1,param2){
//     console.log("I'm named function");
// }
// named_fn(arg1,arg2);
// First class function A first-class function is a function that can be treated like any other value.
//Ex:-
let test_func=function (){
    console.log("I'm anonymous");
}
//What is Callback function in Javascript->a callback function is a function that is passed as an argument to another function, and it's executed after some asynchronous operation or a certain event occurs.
//Ex:-
setTimeout(function() {
    console.log("Callback function executed after 2 seconds.");
}, 2000);

