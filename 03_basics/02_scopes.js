/*
learn basic of what is global and local scope 
also basic of hositing just level of understanding not in code 
*/




let a=10; // global declare
const b=20;
var c=30; 

if (true){   
    let a = 25;  // block  for this loop 
}
// console.log(a);
// console.log(b);
// console.log(c);



/*
var can be re assigned and re declared 
const cannot be re assigned or re declared
let can be re assigned but can not be redeclare inside same scope 

if (){
let a = 10; 
let a = 15;  // this is wrong
}
let a=23;
*/



// ----------- scope level lecture -22 ------------------------------------


function one(){
    const userName = "hitesh";

    function two(){
        const website = "youtube";
        console.log(userName);
        console.log(website);
    }
    two();
}
// one();



if(true){
    const username ="hitesh";
    if (username === "hitesh"){
        const web = " youtube";
        // console.log(username + web)
    }
    // console.log(web);
}
// console.log(username);


// ++++++++++++++++++ interseting  +++++++++++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
 return num+1;
}


const addTwo = function (num){
    return num+2;
}
console.log(addTwo(5));
