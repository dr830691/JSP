async function hitesh(){
    return setTimeout(function() {
        console.log('hitesh');
      }, 10000);
}
function hitesh_2(){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            console.log('hitesh');
          }, 2000);
        resolve("hitesh");
    });
}
(async function(){
    let x=await hitesh();
    console.log(x);
})();

//console.log(hitesh_2());