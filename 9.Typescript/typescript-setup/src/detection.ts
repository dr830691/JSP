// //type of ->type guard
// function detectType(val:number|string){
//     if (typeof val==="string")
//     return val.toLowerCase();
// else return val;
// }
// function provideId(id:string|null){
//     if (!id){
//         console.log("Please provide ID");
//         return
//     }
//     id.toLowerCase();
    
// }
// function printAll(strs:string|string[]|null){
//     if (strs){
//         if (typeof strs==="object"){
//             for(const s of strs){
//                 console.log(s);
//             }
//         }
//         else if (typeof strs=== "string"){
//             console.log(strs);
//         }
//     }
//     return strs;
// }

// // Define an interface for players
// interface Player {
//     name: string;
//     score: number;
//     play(): void;
// }

// // Define an abstract class for players with default behavior
// abstract class AbstractPlayer implements Player {
//     constructor(public name: string, public score: number) {}

//     play(): void {
//         console.log(`${this.name} is playing.`);
//         this.score += 10;
//     }

//     // Abstract method to be implemented by subclasses
//     abstract levelUp(): void;
// }

// // Regular Player class implementing Player interface and extending AbstractPlayer
// class RegularPlayer extends AbstractPlayer {
//     constructor(name: string, score: number) {
//         super(name, score);
//     }

//     levelUp(): void {
//         console.log(`${this.name} leveled up!`);
//         this.score += 50;
//     }
// }

// // VIP Player class implementing Player interface and extending AbstractPlayer
// class VIPPlayer extends AbstractPlayer {
//     constructor(name: string, score: number) {
//         super(name, score);
//     }

//     levelUp(): void {
//         console.log(`${this.name} is a VIP player and leveled up with bonus points!`);
//         this.score += 100;
//     }
// }

// // Create instances of players
// const regularPlayer = new RegularPlayer('Alice', 100);
// const vipPlayer = new VIPPlayer('Bob', 200);

// // Regular player actions
// regularPlayer.play();
// regularPlayer.levelUp();
// console.log('Regular Player Score:', regularPlayer.score);

// // VIP player actions
// vipPlayer.play();
// vipPlayer.levelUp();
// console.log('VIP Player Score:', vipPlayer.score);
//Operator Narrowing [in,instanceof]
interface User{
    name:string,
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
function isAdminAccount(account:User|Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}
//javascript has a operator for checking whether or not a value is an instance of another value.
// like x instanceof Foo checks the prototype of foo
type Fish ={swim:()=>void};
type Bird={ fly:()=>void};

function isFish(pet:Fish|Bird):pet is Fish{
    return(pet as Fish).swim!=undefined;
}

function getFood(pet:Fish|Bird){
  if(isFish(pet)){
    pet
    return "Fish Food";
  }
  else{
    return "Bird Food";
  }
}

interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}
interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}
type Shape=Square|Circle|Rectangle;
//Exhaustive checking
function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI*shape.radius**2;
    }
    else if(shape.kind==="rectangle"){
        return shape.length*shape.width;
    }
    }
    
function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2
        case "square":
            return shape.side*shape.side
        case "rectangle":
            return shape.length*shape.width
        default:
            const _defaultforshape:never=shape
            return _defaultforshape
    }
    
}
var str1='1';
var str2=<number> <any>str1;
console.log("the type of str2: ",typeof (str2));

var msg:string="hello "+"world";
console.log(msg);