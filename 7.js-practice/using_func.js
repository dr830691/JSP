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
// console.log(a());
(async function (){
    a().then(()=>{
      b().then(()=>{
        c();
      })
    });
    })();

    function job() {
      return new Promise(resolve=>{
          resolve('hello world');
  })
}
