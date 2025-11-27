let a=10; // global declare
const b=20;
var c=30; 

if (true){   
    let a = 25;  // block  for this loop 
}
console.log(a);
console.log(b);
console.log(c);



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