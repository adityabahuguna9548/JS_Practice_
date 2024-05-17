// let b = 10;
// const c =20;
var a =30;

if (true) {
    var a =60;
    let b = 10;
    const c =20;
    // console.log(b);
    // console.log(c);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
   const userName ="Aditya" ; 

   function two(){
        const lastName = "Bahuguna";
        console.log(lastName);  
    }

//    console.log(lastName);
console.log(userName);
// two();
}
// one();

if (true) {
    const userName = "Aditya ";

    if (userName === "Aditya ") {
        lastName = "Bahuguna";
        console.log(userName + lastName); 
    }
    // console.log(lastName);
    
}
// console.log(userName);


console.log( oneAdd(5)); // program execution before the decration  it will not get any error   this is called :- Hoisting
function oneAdd(num ){
    return num +1;
}


//addTwo(5); // their is also program execution before the decration but it will get error  because there is no simple function it stored in new variable

const addTwo = function(num){
    return num+2
}

console.log(addTwo(5));