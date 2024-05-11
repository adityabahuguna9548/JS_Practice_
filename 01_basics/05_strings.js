// How to write a code for Strings
const realName = "Aditya Bahuguna";
const crAge = 23 ;

console.log(realName +" my age is : "+ crAge + " small details about me ! "); // concatinate is here

console.log(`hey ! my name is ${realName} and my age is :- ${crAge} .`); // this is a diffrent way to print in string form  called :- String Interpolletion

const gameName = new String("Aditya-aadi");
const anotherGameName = new String("      Aditya-aadi     ");

console.log(gameName[0]); // position on string
console.log(gameName.__proto__);// check protoype it is object of string
console.log(gameName.toLowerCase());

console.log(gameName.charAt(4)); // check charactor which index is in stored
console.log(gameName.indexOf('d')); // check charator index 

console.log(gameName.substring(0,5)); // convert into small string
console.log(gameName.slice(0,3)); // devided into slice form
console.log(anotherGameName.trim()); // remove spaces on strings
console.log(anotherGameName.replace('-',' dib ')); // replace charator to another charator
console.log(anotherGameName.includes('aadi')); // find charactor in strings
console.log(anotherGameName.split('-'));// convert string into array form
