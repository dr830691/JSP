// Call stack
/* A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc. */
// Global variable
var globalVar = "I am a global variable";

function outerFunction() {
  // Outer function scope
  var outerVar = "I am an outer variable";

  function innerFunction() {
    // Inner function scope
    var innerVar = "I am an inner variable";

    console.log(innerVar);
    console.log(outerVar); 
    console.log(globalVar);
  }

  innerFunction();
}

outerFunction();

console.log(globalVar);
console.log(outerVar); 
console.log(innerVar); 

//datatypes in javascript
//JavaScript has 8 Datatypes
//1. String
let name="Ravindar"
//2. Number
let num_2=3;
let float=4.0;
//3. Bigint
const bigIntLiteral = 12345678901234567890n;
const bigIntConstructor = BigInt("12345678901234567890");
//both are the same number
//4. Boolean
let a=true;
let b=false;
//5. Undefined
let und=undefined;
// 6. Null
let nul_type=null;
// 7. Symbol
let sym=Symbol("I'm Symbol");
// 8. Object
let obj={ a:10,b:12};

// The Object Datatype
// The object data type can contain:

// 1. An object
let obj_array={
    arr:[1,2,3]
};
// 2. An array
let array=[1,2,3]
// 3. A date
const date = new Date("2022-03-25");

