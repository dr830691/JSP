//closure a closure is a combination of a function and the lexical environment within which that function was declared. This lexical environment consists of any local variables that were in scope at the time the closure was created. In simpler terms, a closure gives you access to an outer function's scope from an inner function.

// function x(){
//   var i=1;  
//     for(var i=1;i<5;i++){
//       function closure(i){
//       setTimeout(function(){
//         console.log(i);
//       },i*1000);
//     }
//     closure(i);
//   }
  
//   console.log("Namaste JavaScript");
// }
// x();
// closure();

// function outer(b){
//   function inner(){
//     console.log(a,b);
//   }
//   let a=10;
//   return inner;
// }
// outer(10)();
// var close=outer("Hello World");
// close();
// data hiding
// function counter(){
//   var count=0;
//   return function inrementCounter(){
//     count++;
//     console.log(count);
//   };
// }
// var counter_1=counter();
// counter_1();
// counter_1();
// counter_1();
// var counter_2=counter();
// counter_2();
// counter_2();
// counter_2();
//constructor
function Counter(){
  let count=0;
  this.inrementCounter=function (){
    count++;
    console.log(count);
  }
  this.decrementCounter=function (){
    count--;
    console.log(count);
  }
}
let counter_3=new Counter();
console.log(typeof counter_3);
counter_3.inrementCounter();
counter_3.inrementCounter();
counter_3.inrementCounter();
counter_3.decrementCounter();
// Disadvantages
// 1.More memory uses
// 2.This use more garbage collector