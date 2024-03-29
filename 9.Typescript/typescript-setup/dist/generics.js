"use strict";
//Generics is used to make component reusable
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// We can pass any type of value the function
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityThree({ brand: "Milton", type: 1 });
function getSearchProducts(products) {
    //do something database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchPoducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
//Sellable
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
