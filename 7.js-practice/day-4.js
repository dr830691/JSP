//The Scope Chain, Scope and Lexical Environment 
function a(){
    c();
    function c(){
        console.log(b);
    }
    
}
var b=10;
a();
/*lexical(hirarcy) environment -> Memory + order of the execution of the functions(lexical environment of the parent functions)*/
// scope chaining (lexical scoping)->Whenever a function needs to access a variable, it first looks for it in its local environment. If the variable is not found locally, the function then looks for it in the parent environment. If the variable is still not found, the function continues to search in the parent's parent environment, and so on, until it reaches the global execution environment.This process is known as lexical scoping or scope chaining. */

// console.log(ab);-------|
                       // |------temporal dead zone of ab variable Here We can can access ab
                    //    |
// let ab=10;-------------|
var b=100;
// When the variable in temporal dead zone it can not be accessed.The error in temporal dead zone (ReferenceError: Cannot access 'ab' before initialization) Temporal dead zone will only works for const and let keywords declared variables.
// BLOCK SCOPE & Shadowing in JavaScript
// let a=10;
{
var a=10;//shadowing
console.log(a);
}
if (true){

}
// Closures
// A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.EX-
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
// Higher order array methods - .map, .filter, .find, .reduce and .some
let array=[1,2,3,4,5];
function square(val){
    return val*val
}
//map() method will take a function and iterate through the whole array and return a new array with the defined logic output.
console.log(array.map(square));
function get_even(val){
    return val%2==0;
}
//filter() -> it will filter the elements on the basis of the bool logic implemented in the function.
console.log(array.filter(get_even));
//find->The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const found=array.find((ele)=>ele>2);
//reduce()-> it will return a single value after performing the all the operations mentioned in the defined function.
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log("result of reduce",sumWithInitial);
//sum()-> it will return the true if at least one element is passing the condition
const even=(element)=> element%2==0;
console.log("result of some :",array.some(even));
//splice()
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);



