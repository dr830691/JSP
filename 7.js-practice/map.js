let array=[1,2,3];
let square=(val)=>{
  return val*val;
}
Array.prototype.sum=function(logic){
    let output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(array.sum(square));