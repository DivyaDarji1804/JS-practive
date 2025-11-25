/**
  quick notes
  there are more methods in array which may covers on other tutorials such as reduce , filter so for now just basic check 
 
 */
// here is practice of the array in js 
// there is certain topics not discuss in video so learning from w3schools

// const arr = new Array ("Chirs", "Abraham", "Jean");
// console.log(arr);

var fruits= ["Banana","Apple","Mango","Watermelon"];
// console.log(fruits[fruits.length -1]);

// fruits.unshift("Grapes");
// console.log(fruits);


// // at() method
// console.log(fruits.at(2));


// var string = fruits.join();
// console.log(string);

// fruits.push("oranges");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// console.log(Array.isArray(string));

// var arr2 = ["ronak", "mishra"];
// var arr3=["adam", "goggle"];

// var arr4 = fruits.concat(arr2,arr3);
// console.log(arr4);


// arr2.push(arr3);
// console.log(arr2);

// let arr01 = [1,2,3,[4,3,[5,6]], [2,[1,2,3],2]];
// console.log(arr01.flat(Infinity));

// console.log(fruits.indexOf("Apple"));
// fruits.splice((fruits.indexOf("Apple")),1);
console.log(fruits.includes("Falafal"));

console.log(fruits.sort());
console.log(fruits.reverse());


var fruits = ["Banana","Apple","Mango","Watermelon","Guvava", "Pineapple", "Dragonfruit"];

// var sortFruits = fruits.toSorted();
var sortFruits = fruits.toReversed();
console.log(sortFruits);