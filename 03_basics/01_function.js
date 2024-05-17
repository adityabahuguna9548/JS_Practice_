
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



//  rest operator use in function 

function calculaetCartPrice(val1, val2,...num1){
    return num1;
}

console.log(calculaetCartPrice(200,222,2,3444,5543,222));

// object access in the function

const user = {
    name:"Hitesh",
    price:999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and Price is ${anyobject.price} . `);
}
handleObject(user);

// secound method to access object from function
handleObject({   
    name:"Sam",
    price:899
})

// array access in the function

const newaArr = [200,3000,4000,100,500,600];
function returnValueArray(getArray){
    console.log(`Array is :- ${getArray}. `);
    return getArray[3];
}
returnValueArray(newaArr);
console.log("Value is from array:-",returnValueArray(newaArr));
returnValueArray([200,3000,4000,100,500,600]); // 2nd method array access 
