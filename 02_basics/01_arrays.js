/*
Quick note 
understand how to declare array 
check for the push , pop 
unshift , shift 
what is difference in slice and splice 

*/


// in js array is non-primive and it is a collection of multiple items under single variable
// in js array is resizable 
// const myArr = [0,1,2,3,4];
 const players=[`Virat`,`sachin`,'dhoni','kapil'];

// const myarr2 = new Array (1,2,3,4);
// console.log(myarr2[2]);

//+++++++++++++++++++++++++++  Array Methods  +++++++++++++++++++++++++++++++++++++++++++++++++ //

let arr1 = [0,1,2,3,4];

// arr1.push(5);
// console.log(arr1);
// arr1.push(6);
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

//  arr1.unshift(0); // unshift is adding array element on starting so avoid it 

//  console.log(arr1);

//  arr1.shift();   // shift removes first element
//  console.log(arr1);

// console.log(arr1.includes(7));
// console.log(arr1.indexOf(7));
// console.log(arr1.indexOf(1));

// join convert array to string 
// const newArr = arr1.join();

// console.log(arr1);
// console.log(newArr);

// const tryArr = players.join();

// console.log(tryArr.slice(0,12));  /

console.log("A",arr1);
const newArr = arr1.slice(1,3);
console.log("B",newArr);
console.log(arr1);


// splice inlcude range and also it changes the value which means it manipulate orginal array
const new2 = arr1.splice(1,3);
console.log("c",new2);
console.log(arr1);