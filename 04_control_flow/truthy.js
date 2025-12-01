/*
------------ continous part of controll flow -------------
when you assume the value is truth or false
learn nullish coalesc`ing operator ?? 
difference of ? and ?? operator  
*/

// const userEmail = "abc.com";
// const userEmail = " ";
const userEmail = [ ];


if(userEmail){
    console.log(` got user email`);
}
else{
    console.log(`Don't got user email`);
}


// -------------->falsy values <-----------------------------------

// false
// 0
// -0
// ""
// null
// undefined
// NaN
// BigInt 0n



// ---------------------> Truthy value <-------------------------

// true
// all value which is not falsy
// " " -- cause it is spae insde string
// "0"  -- cause inside a string so it act as character
// 'false' -- inside string
// {}
// function()


// Nullish Coalescing Operator: null or undefined

// ?? condition check if null or undefined value then give any other value else already value then no need to change 

// val1 = null ?? 10 ?? 20 it will give 10 because already value assigned and ?? check for null or undefined only 

let val1 ;
val1 = 5 ?? 10;
val1 = null ??10;
val1 = undefined ?? 12;

console.log(val1);



let mark = 33;
mark = 55;

mark > 33 ? console.log("pass"):console.log("fail");