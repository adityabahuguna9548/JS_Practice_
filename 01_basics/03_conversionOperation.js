let score = "33";
console.log(typeof score);

let isInNumber = Number(score);
console.log(typeof isInNumber);


// after conversion
//"33" => 33
//"" => NaN - Not a Number 

let checkBoolean = null;
// console.log(typeof checkBoolean);

let isInBoolean = Boolean(checkBoolean);
console.log( isInBoolean);

// 0 => false
// 1 => true
// "" =>false
// "aditya " => true
// null => false

let someNumber = 33;
let stringNumber =  String(someNumber);
console.log(stringNumber,typeof stringNumber);

//******************Operations ******** */
let str1= "Hello";
let str2 = "Aditya";
console.log(str1+ str2);
