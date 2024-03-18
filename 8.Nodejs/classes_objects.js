//In JavaScript, classes and objects are fundamental concepts used to create reusable code and organize data and behavior.
// Object literal
//${} this is called template literal
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

// Accessing object properties
console.log(person.name); // John
console.log(person.age); // 30

// Calling object method
person.greet(); // Hello, my name is John and I'm 30 years old.

//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Creating objects using classes
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 35);

// Accessing object properties
console.log(person1.name); // Alice
console.log(person2.age); // 35

// Calling object method
person1.greet(); // Hello, my name is Alice and I'm 25 years old.
person2.greet(); // Hello, my name is Bob and I'm 35 years old.

