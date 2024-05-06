function wait_five_min(){
    return new Promise(resolve=>{
        setTimeout(()=>{
        console.log("Wait for 5 min");
    },5*60*10000)}
    )
};
    
( async function(){
    console.log("before wait");
    await new Promise(resolve=>{
        setTimeout(()=>{
        console.log("Wait for 2 sec");
        resolve();
    },2000)});
    console.log("After wait");
}
)();
