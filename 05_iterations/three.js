/*
------- quick notes------------
advance loops
these loops are array specific 
forof loop , Maps
-- watch till 13 min
Maps is just like object but t foloows order means whicever value is first inser it wil display accordingly
Maps store unique values
*/


const arr = [1,2,3,4,5];


//forof loop 

// for(const val of arr){
// console.log(val);
// }

const greetings = "Hello World!!";

// for (const greet of greetings){
//     if(greet == " "){
//         continue;
//     }
//     console.log(`each char is: ${greet}`);
// }

// Maps 

const map = new Map();
map.set('IN',"India");
map.set("US", "United States of America");
map.set("FR","france");


// console.log(map);


// for (const key of map){
//  console.log(key);
// }

// for destructuring array 

// for (const [key,value] of map){
//   console.log(`${key} - ${value}`);
// }

const myObject = {
    game1 : "Contra",
    game2 : "Mario"
}

for (const [key,value] of myObject){
//   console.log(`${key} - ${value}`);
    console.log()
}