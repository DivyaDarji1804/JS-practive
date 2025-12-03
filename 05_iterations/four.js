/*
continuous lec to 29
forin loop  it prints key by default 
for of loop for array 
for in loop for object
*/

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift"
}

// for (const val in myObj){
//     console.log(`${val} short cut is for${myObj[val]}`);
// }

const programming = [`js`,`java`,`cpp`,`python`];


for (const key in programming){
    // console.log(key);
    console.log(programming[key]);
}



