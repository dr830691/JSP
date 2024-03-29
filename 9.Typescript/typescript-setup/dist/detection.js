"use strict";
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
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function isFish(pet) {
    return pet.swim != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        return "Bird Food";
    }
}
//Exhaustive checking
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "rectangle") {
        return shape.length * shape.width;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
var str1 = '1';
var str2 = str1;
console.log("the type of str2: ", typeof (str2));
var msg = "hello " + "world";
console.log(msg);
