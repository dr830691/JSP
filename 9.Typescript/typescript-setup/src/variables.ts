let greetings:string="Jai Shree Ram";
// let greetings=10;
console.log(greetings);
let mynum=6
//datatypes in typescripts
// Note:- all the types in ts in lowercase
//type inference is supported in typescripts
//number
let userId=33.44;
userId.toFixed();
//boolean
let isLoggedIn:boolean=true;
//any 
let hero;
function getHero():string{
    return "thor"
}
hero=getHero();
function signUpUser(name:string,email:string,password:string){
    return `the response name: ${name} email: ${email} password:${password}`

}
console.log("x is ",signUpUser("Ram","ram@gmail.com","heyRam@123"));
//arrow functions
const getHello=(s:string):string=>{
    return "Ram"
}
const heros=["Ram","Hanuman","Shankarji"];
heros.map((hero:string):string=>{
    return `Hero is ${hero}`
})
function consoleError(errmsg:string):void{
    console.log(errmsg);
}
//never return by a function
function handleError(errmsg:string):never{
    throw new Error("some error has been found");
}
//Objects
const User={
    name:"hitesh",
    email:"hitesh@lco.dev",
    isActive:true
}
function createUser({name:string,isPaid:boolean}){

}
createUser({name:"hitesh",isPaid:false});
let empty_name={name:"Ram",wife:"Sita"};
//return an Object
function createCourse({}):{name:string}{
return {name:"Ram"}
}
createCourse(empty_name);//this required nothing property inside the object
//This is not the correct way Please try to not use this type
//create a new type

type User={
   name:string,
   email:string,
   isActive:boolean
}
function createUser_1(user:User):User{
   return User
}
//readonly data in an Object
type ReadOnlyUSer={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditCard?:number //here ? means this parameter is optional
}
let myUser:ReadOnlyUSer={
    _id:"12345",
    name:"h",
    email:"h@h.com",
    isActive:false,
    creditCard:12345
}
// myUser._id="3245";
myUser.name="Hitesh";


//merged types
type CardNumber={
   card_number:string
}
type CardDate={
    carddate:string
}
type CardDetails= CardNumber&CardDate & {
    cvv:string
}
let  card_1:CardDetails={
    card_number:"12345",
    carddate:"22-09-2023",
    cvv:"1234"
}
console.log(card_1);
//Arrays
const superHeros:string[]=[];
//array with number
const heroPower:Array<number>=[];
//array with object
const allUser:Array<{}>=[];
superHeros.push("Spider");
heroPower.push(1);
//array with object
allUser.push(2);
allUser.push({name:"Ram",isActive:true});

//Union type in type script this is used to accept multiple types
let score:number|string=33;
score=44;
score ="55";
type God={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number
}
let creator:God|Admin={name:"Bramha",id:232};
creator={username:"Ram",id:102}
function getDbId(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
    else{
        id+10;
    }
    console.log(`DB is is :${id}`);
}
getDbId(3);
getDbId("3");
//both type of values will be accepted by arrays
const data3:(string|number)[]=[1,2,3,"1234"];
let seatAllotment:"aisle"|"middle"|"window";

//tuples-> tuples enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.
let tuple_user:[string,number,boolean];
tuple_user=["hc",123,true];
type tupleUser=[number,string];
const newuser:tupleUser=[1,"Ram"];
console.log(newuser[1]);
//tuple support push(),pop(),shift() methods
//Enum
const enum SeatChoice{
    AISLE= "aisle",
    MIDDLE=3,
    WINDOW,
    BULKHEAD
}
const hcSeat=SeatChoice.AISLE;

//Interfaces in typescript
interface TestInterface{ 
    readonly dbID:number
    email:string,
    userId:number,
    googleId?:number,// 
    //We can declare a function as well in interface
    // startTrial:()=>string
    // another way
    startTrial():string,
    getCoupon(couponname:string,value:number):number//take the 2 parameter and return a number
}
//We can add more property and function in interface without editing the existing one
interface TestInterface{
    githubToken?:string
}
interface Admin_1 extends TestInterface{
  role:"admin"|"ta"|"learner",

}
const ravindar:Admin_1={
    dbID:1234,
    email:"ravindar@gmail.com",
    userId:123,
    startTrial:()=>{
        return "trial started"
    },
    getCoupon:(name:"Ravindar",value:123)=>{
        return 10
    },
    role:"admin",
}
console.log(ravindar);





export {}