//equality operator and comparison operator work diffrently

console.log(null >= 0 );
console.log(null > 0 );
console.log(null == 0 );

console.log(undefined > 0 );
console.log(undefined == 0 );
console.log(undefined >= 0 );

console.log("2" == 2); // it check only value 
console.log("2" === 2 ); // it check value and their datatype both
