
function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("BAHUGUNA");

}
// sayMyName();

function addTwoNumbers (num1,num2){
    console.log(num1 ,"+", num2,"adiition is : ",num1+num2);
}
addTwoNumbers(3,4);

function addTwoNumbers (num1,num2){
    // console.log(num1 ,"+", num2,"adiition is : ",num1+num2);

    // const result = num1+num2;
    // return result;

    return num1+num2;
}
const result = addTwoNumbers(6,6);
console.log("addition is : ",result);



function loginUserMessage(username){
    return`${username} just logged in`;
}
console.log(loginUserMessage("Aditya"));
// console.log(loginUserMessage("")); // empty string
// console.log(loginUserMessage()); // without give any agrument give :- undefined

function loginUserMessage(username){
    // if (username === undefined)
        if(!username){   // same as above
        console.log("Please enter name ");
        return    
    }
    return`${username} just logged in`;
}
console.log(loginUserMessage("aditya")); // without give any agrument give :- undefined
