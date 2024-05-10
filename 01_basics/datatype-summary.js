// Primitive data types :-

// 7 types data types 

// null , Number , Symbol , String , BigInt , Boolean , Undefined

const chekNull = null ; // null
const idNum = 123  // number

const id = Symbol('123') // symbol
const anotherId = Symbol('123') //
console.log(id === anotherId);

const str = "aditya" // string

const numBigint = 78632864768326n // BigInt

const checkValue = true ; // boolean another one is false

let emtVar ; // Undefined 


//Reference(Non Primitive ) type :- 3 types

// Arrays , Functions , Objects

const heros = ["Shaktiman" , "naagraj", "doga"] ; // Array

const myObj = {
    name : "Aditya",
    class : "mca",
    id : 2205002
};  // Objects

const newFn =   function(){
    console.log("Hello World!");
};



//***************Memory in Js **************/

// stack ( Primitive data types)  & Heap (Non Primitive  data types)

//stack :- variable copied in memory 

let currentName = "Aditya Bahuguna";

let newName = currentName;

newName = "Shubham Bahuguna";

console.log(currentName);
console.log(newName);

// Heap :- called reference of object value 
let userOne = {
    name : "Aditya Bahuguna",
    class : "MCA",
    email : "adityabahuguna48@gmail.com"
};

let userTwo = userOne;

userTwo.email = "adityabahugun12345@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
