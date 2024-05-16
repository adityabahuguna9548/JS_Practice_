// singleton :- is , we create object is in constructor method through

// Object.create();  // this is create a object 


const mySym = Symbol("myKEY");

const user = {
    name:"Aditya",
    "full name":"Aditya Bahuguna",
    [mySym]:"newKey1",
    age:23,
    location:"Rishikesh",
    email:"aditya@gamil.com",
    isLoggedIn:false,
    lastLoggedInDays:["monday","tuesday"]
}

console.log(user);
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log( user[mySym]);


user.email="adityabahuguna48@gmail.com";
// Object.freeze(user);
user.email="aditya48@gmail.com";
console.log("After Freeze object :-",user);



// functon create in object
user.greeting = function(){
    console.log("Hello world! this is from JS");
}
console.log(user.greeting); // this give function refrence 
console.log(user.greeting());

user.greetingTwo = function(){
    console.log(`Hello JS User from ${this["full name"]}`);
}
console.log(user.greetingTwo);
console.log(user.greetingTwo());
