//Generics is used to make component reusable
const score:Array<number>=[];
const names:Array<string>=[];

function identityOne(val:boolean|number):boolean|number{
    return val;

}
function identityTwo(val:any):any{
    return val;
}
// We can pass any type of value the function
function identityThree<Type>(val:Type):Type{
    return val;
}
function identityFour<T>(val:T):T{
    return val;
}
interface Bootle{
    brand:string,
    type:number
}

identityThree<Bootle>({brand:"Milton",type:1});
function getSearchProducts<T>(products:T[]):T{
    //do something database operations
    const myIndex=3;
    return products[myIndex];

}
const getMoreSearchPoducts=<T>(products:T[]):T=>{
    const myIndex=3;
    return products[myIndex];
}

interface Database{
    connection:string,
    username:string,
    password:string
}
function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
// anotherFunction(3,60)
// console.log(anotherFunction(3,"4"));
//class-type in generics
 interface Quiz{
    name:string,
    type:string
 }
 //declare a Course
 interface Course{
    name:string,
    author:string,
    subject:string
 }
 //Sellable
 class Sellable<T>{
     public cart:T[]=[]
     addToCart(product:T){
        this.cart.push(product)
     }
 }

 

