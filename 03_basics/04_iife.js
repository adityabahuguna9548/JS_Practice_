// IIFE = Immediately Invoke Function Expression
// () () 

function chai (){
    console.log(`DB Connected`);
}
chai();

(function chai2 (){   // this is named IIFE
    console.log(`DB Connected TWO`);
})
() ;
// their is  IIFE use (function is here ) (execution is here)

(() =>{
    console.log(`DB Connected Three`);
}) ();

((name) =>{  /// simple IIFE
    console.log(`DB Connected Three , ${name}`);
}) ("Aditya Bahugna");