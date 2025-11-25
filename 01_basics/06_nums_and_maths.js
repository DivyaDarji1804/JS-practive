// quick notes 
/*
learn about basic maths and nums 
we can uses random in math to generate random num 
can do sqrt in Math.sqrt 
in js can convert num to str
we can fix floating num also 

*/ 

// let score = 264;
// console.log(score);
// const balance = new Number(100);
// console.log(balance.toString().length);
// let pi = 3.14257;

// // toFixed fixes floating points 
// console.log(pi.toFixed(2));

// let anotherNum = 1423.8966
// //precision is use to consider before floating points also
// console.log(anotherNum.toPrecision(3));

// toLocalString use to make value in properformat

// const amount = 100000000;

// console.log(amount.toLocaleString()); //us standards
// console.log(amount.toLocaleString('en-IN')); //Inidan standards



// ++++++++++ Maths +++++++++++++

// console.log(Math.abs(-122.45));
// console.log(Math.round(3.148)); // must mostly used 
// console.log(Math.ceil(3.148));
// console.log(Math.floor(3.148));
// console.log(Math.sqrt(144));

// console.log(Math.random());
// console.log((Math.random()*10)+1);

// const min =10
// const max =20 


// console.log(Math.floor(Math.random() * (max -min +1))+ min);


// let number1 = -10.24 ;
// console.log(parseInt(number1));
// console.log(parseFloat(number1));

// console.log(Number.isInteger(number1));
// console.log(Number.isFinite(number1));
// console.log(Number.isNaN(number1));

const x = Number.MAX_SAFE_INTEGER;
console.log(x);

const y = Number.MIN_SAFE_INTEGER;
console.log(y);


const a = Number.MAX_VALUE;
const b = Number.MIN_VALUE;

console.log(`a:${a} & b:${b}`);


const c = Number.POSITIVE_INFINITY;
const d = 100 / "Apple";
console.log(`c:${c}, d : ${d}`);
