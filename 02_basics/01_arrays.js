// Arrays 

const myArr = [0,102,3,55,623,45,66,"aditya"];
console.log(myArr);
console.log(myArr[6],myArr[4],myArr[2]);

const newArr =["Iron-Man","Spider-Man","Super-Man","Thor","Loki"];
console.log(newArr);

const newArr2 = new Array(1,4,6,8,2,9,"Captain-America","Black-Widow","Hulk");
console.log(newArr2);

//  Array Method 

myArr.push(90,40);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(10,2,4,6,);
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(3));

const myArr1 = [0,102,3,55,623,45,66,"aditya"];
console.log(myArr1.indexOf(7));
console.log(typeof myArr1);

const new_arr = myArr1.join(); /// it convert array into string
console.log( myArr1);
console.log(new_arr);


// slice and splice

console.log("A :-",myArr1);
const myn1 = myArr1.slice(1,4);

console.log("Slice Array:-",myn1);
console.log("B :-",myArr1);

const myn2 = myArr1.splice(1,4)
console.log("Splice Array:-",myn2);

console.log("C :-",myArr1);



