// class User{
//     //by default every parameter as public but we can user the keyword to make it as private
//     private email:string
//     public name:string
//     city:string =""
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
// public: Members marked as public are accessible from anywhere, both within the class and from outside the class.

// protected: Members marked as protected are accessible within the class that defines them and within subclasses (classes that inherit from the parent class).

// private: Members marked as private are accessible only within the class that defines them. They are not accessible from outside the class, including subclasses.
class User{
    // private _courseCount=1;
    protected _courseCount=1;

        city:string =""
        constructor(
            public email:string,
            public name:string,
            // private userId:string
            )
            {
            this.email=email;
            this.name=name;
        }
        get getAppleEmail():string{
            return `apple ${this.email}`

        }
        //getter and setters
        get courseCount():number{
            return this._courseCount;
        }
        set courseCount(courseNum){
            if (courseNum<=1){
                throw new Error("Course count should be more than 1");
            }
            this._courseCount=courseNum;

        }
    }
class SubUser extends User{
    isFamily:boolean=true;
    changeCourseCount(){
        this._courseCount=4;
    }
}
const ravindar=new User("ravindar@gmail.com","Ravindar");
ravindar.city="Kailiya";

console.log("I'm typescript");
