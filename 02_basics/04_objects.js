// const newUser = new Object(); // tHis is object create 

const newUser = {}

newUser.id ="Abc000";
newUser.name = "Aditya Bahuguna";
newUser.age=23;
newUser.isLoggedIn = false;

console.log(newUser);
console.log(newUser["id"]);

const newObj = {
    id:"Abc000",
    email:"aditya@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"Bahuguna"
        }
    }
}

console.log(newObj);
console.log(newObj.fullname);
console.log(newObj.fullname.userfullname);
console.log(newObj.fullname.userfullname.firstname);

// joining of objects 


const obj1 = {1:"a",2:"b",3:"c",4:"d"}
const obj2 = {5:"e",6:"f",7:"g",8:"h"}

const obj3 = {...obj1,...obj2}; // their is spread operator use for object {} , and for array use []
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

const newOBJ = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    }
]

console.log("main array with inside their object :-",newOBJ);
console.log("their is access array's inside object value :-",newOBJ[1]);
console.log("their is access is paticuler array's particuller object's value :-",newOBJ[1].email);

console.log(newUser);

console.log("here is keys",Object.keys(newUser)); // it give output as array and then we will use loops or something on this array
console.log("here is values",Object.values(newUser));
console.log("here is key inside value is stored",Object(newUser.age));
console.log("here is key inside value is stored",Object(newUser["id"]));
console.log("here is key inside value is stored keys",Object.keys(newUser));
console.log("here is key inside value is stored keys of index of value",Object.keys(newUser.id));
console.log("here is key inside value is stored keys's inside values",Object.values(newUser.id));
console.log("here is entries",Object.entries(newUser));

console.log("'name' property check inside available object :-",newUser.hasOwnProperty('name')," is available");
console.log("'isLogged' property check inside available object :-",newUser.hasOwnProperty('isLogged')," is  not available");



