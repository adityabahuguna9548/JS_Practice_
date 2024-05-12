const score = 200;
console.log(score);

const balance = new Number (100);
console.log(balance);

const anotherNum = new Number(3000);
console.log(anotherNum);
console.log(anotherNum.toString()) // number into string convert 
console.log(anotherNum.toString().length); // lenght is work only in string
console.log(anotherNum);

const otherNum = 123.7687343;
console.log(otherNum.toFixed(3)); // after point how much number read.it start with after decimal .

console.log(otherNum.toPrecision(7));// start points to number readability . it start with 0'th position

const newNum = 1000000;
console.log(newNum.toLocaleString()); // for forengion countrys 
console.log(newNum.toLocaleString('en-IN')); // for india 


//*******************  Math    ****** */
console.log(Math);
console.log(Math.abs(-4)); // itgives -ve to +ve value

console.log(Math.round(5.8),Math.round(5.3)); // round figure of the value 
console.log(Math.ceil(5.4)); // IT give top value 
console.log(Math.floor(5.4)) // it give smallest value

console.log(Math.min(4,6,8,3,9,1,4)) // give minimum value 
console.log(Math.max(4,6,8,3,9,1,4)) // give maximum value

console.log(Math.random()); // it give random value between 0 & 1 .

console.log(Math.random()*10 );// it generate random value between 1 to 10 

console.log(Math.random()*10 + 1);

console.log(Math.floor(Math.random()*10) +1); // round of in minimum value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1) + min));

