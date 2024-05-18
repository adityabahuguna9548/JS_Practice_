const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log("this is block scoped this keyword :-",this); // it give local object values  . It is local scoped object 
    }
}
user.welcomeMessage();
user.username="Aditya Bahuguna";
user.welcomeMessage();

console.log("local scope this keyword:- ",this); // it give empty context object {} because it is global scoped.


function chai() {
    const username = "Aditya "
    console.log(this,username);
}
chai();

const chai1 = () => {
    const username = "Bahuguna"
    console.log(this,username);

}
chai1();


// arrow function 

const addTwo = (num1 , num2) => {
 return num1 + num2;  // THIS IS EXPLICIT RETURN use curly {} bracesis in code  && use curly bracssis in code then use 'return'
}
console.log(addTwo(3,4));

// implicit return :- code writtern in single line 
const addAnotherTwo = (num1,num2) => num1 + num2
console.log(addAnotherTwo(3,4));

const addAnother = (num1,num2) => (num1 + num2) // use paraenthesis for singleline code its huge use in react ;
console.log(addAnother(3,5));

/// in arrow function to write object inside we use paraenthesis () then there inside write code 

const newFn = () => ({username:"Aditya"});
console.log(newFn());

function newFn2 () {
    const username = "Aditya bahuguna";
    console.log(username);
};
newFn2();

