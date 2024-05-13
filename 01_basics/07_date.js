// Dates 

let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString);
console.log(myDate.toJSON);
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

const newCretedDate = new Date(2002,3,15);
console.log(newCretedDate);
console.log(newCretedDate.toString(),newCretedDate.toLocaleString());
const newCretedDate1 = new Date(2002,3,15,2,5);
console.log(newCretedDate1);
console.log(newCretedDate1.toLocaleString());

const timeStamp = Date.now();
console.log(timeStamp.toString());
console.log(newCretedDate.getTime());


const newDateHere = new Date();
console.log(newDateHere.getDate(),newDateHere.getMonth()+1,newDateHere.getFullYear(),newDateHere.getDay());

newDateHere.toLocaleString('default',{
    weekday:"short",
});
console.log(newDateHere);