//Static methods are typically used for utility functions or operations that do not require access to instance-specific data.
class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }
    
    getAge() {
        return this.age;
    }
    
    setAge(age) {
        this.age = age;
    }
    
    getGender() {
        return this.gender;
    }
    
    setGender(gender) {
        this.gender = gender;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    calculateAgeInMonths() {
        return this.age * 12;
    }
    isAdult() {
        return this.age >= 18;
    }
    //for this method no need to create a instance for calling the function
    static printClassName(){
        console.log("Person");
    }    
    
}
Person.printClassName();
let randan=new Person("Radar",25,"Male");
//Person.isAdult();//TypeError: Person.isAdult is not a function
console.log(randan.isAdult());
randan.greet();
console.log(randan.calculateAgeInMonths());
setTimeout(()=>console.log("Hi1"),1000);
console.log(randan.isAdult());  
setTimeout(()=>console.log("Hi2"),999);
setTimeout(()=>console.log("Hi3"),1000);
setTimeout(()=>console.log("Hi4"),1000);