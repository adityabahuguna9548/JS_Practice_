const marvel_heros = ["Iron-Man","Thor","Spider-Man","Captain-America"];
const dc_heros = ["Bat-Man","Super-Man","Flash","Aqua-Man"];

console.log("Marvel Heros Array :-",marvel_heros);
console.log("Dc Heros Array :-",dc_heros);

// marvel_heros.push(dc_heros);
// console.log("After push Dc into a marvel :-",marvel_heros);
// console.log(marvel_heros[4][3]);

const all_heros = marvel_heros.concat(dc_heros);
console.log("All Heroes in new Array after concat :-",all_heros)


// spread operator

// const allHeros = [...all_heros];
const allHeros = [...marvel_heros,...dc_heros];
console.log("After spread operator :-",allHeros);

//flat method :- to spread all arrays in single array

const another_array = [1,2,3,4,[5,6,7],8,9,[10,11,[12,13],14,15,16,[17,18],19],20,21]
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);


console.log(Array.isArray("Aditya Bahuguna"));
console.log(Array.from("Aditya Bahuguna"));

console.log(Array.from({name:"Aditya Bahuguna"}));// it give empty array because it can't read object without any key  


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));