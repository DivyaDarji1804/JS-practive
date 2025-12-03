/*
------quick notes
learn about while and do-while loops
*/

let a=10;

while(a >0){
    console.log(`value of a is :${a}`);
    a = a -2;
}

let myArr =["Rohit","Kohli","Tendulkar"];

let arr= 0;

while(arr < myArr.length){
  console.log(`player is:${myArr[arr]}`);
  arr++;
}

let score =11

do {
 console.log(`score is : ${score}`);
 score = score +1;
}while(score <=10);