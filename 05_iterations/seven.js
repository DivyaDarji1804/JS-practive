/*
filter is just like check true false 
map return with operation
*/

const nums = [1,2,3,4,5,6,7,8,9,10];

// let mynum =nums.map((val)=>{return val+10});


let mynum = nums.map((num)=>num * 10).map((num)=>num+1).filter((val)=> val>=40);

console.log(mynum);

