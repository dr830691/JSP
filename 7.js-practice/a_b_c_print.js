// printing using the callback that will create a callback hell issue
// function a(callback) {
//   run_timeout('a', 2000, callback);
// }

// function b(callback) {
//   run_timeout('b', 3000, callback);
// }

// function c(callback) {
//   run_timeout('c', 5000, callback);
// }

// function run_timeout(data, time, callback) {
//   setTimeout(function() {
//     console.log(data);
//     if (callback) {
//       callback();
//     }
//   }, time);
// }

// Callback hell
// a(b(c));
// a(function() {
//   b(function() {
//     c();
//   });
// });
// -------------------------------------------------------------------------------------------
// solve using the function and promises
function a() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log('a');
      resolve();
    }, 2000);
  });
}
function b() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log('b');
      resolve();
    }, 3000);
  });
}
function c() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log('c');
      resolve();
    }, 5000);
  });
}

// (async function (){
//     a().then((res)=>{
//       b(res).then((res)=>{
//         c();
//       })
//     });
//     })();

(async function () {
  a()
      .then((res) => {
          return b(res);
      })
      .then((res) => {
          return c();
      })
      .catch((error)=>{
        console.log("The Error is",error);
      });
})();

// --------------------------------------------------------------------------------
//using the async function
// async function a() {
//   return new Promise(resolve => {
//     setTimeout(function() {
//       console.log('a');
//       resolve();
//     }, 2000);
//   });
// }
// async function b() {
//   return new Promise(resolve => {
//     setTimeout(function() {
//       console.log('b');
//       resolve();
//     }, 3000);
//   });
// }
// async function c() {
//   return new Promise(resolve => {
//     setTimeout(function() {
//       console.log('c');
//       resolve();
//     }, 5000);
//   });
// }
// //using await keyword
// (async function (){
//   await a();
//   await b();
//   await c();
//   })();
// //using then keyword
//   (async function (){
//     a().then(b().then(c));
//     })();
// // --------------------------------------------------------

