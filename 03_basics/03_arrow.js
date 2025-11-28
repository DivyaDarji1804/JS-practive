/**
 * ----------- quick notes -------------------------------
 learn about this key word use for current context
 arrow function doesnot have its own this   return {} 
 regular function has its own this  return Global in node
 in browser return window 
  3 ways to declare arrow fun but with conditions as mentioned below
  we can't return object without curly brackets
 */



const user = {
    userName : "Harsh",
    price : 911,

    welcomeMsg : function(){
        console.log(`${this.userName}, welcome to our westie!!!`);    // to referr currentcontext
        // console.log(this);
    } 
}
// user.welcomeMsg();
// user.userName='lalit';  // as i change here the name it will refere it that's why use this keyword 
// user.welcomeMsg();
// console.log(this);

// in browser console.log(this) will give you window and in node {} in objects  global context

// console.log(this);

// in function this will be global context and we can't use this.username 

// function chai (){
//     console.log(this)
// }

// chai();


// const chai = function () {
//     let userName = "ronak";
//     console.log(this.userName);  // return undefined 
// }


const chai = () => {
let userName = "ronak";
console.log(this);
// console.log(this.userName);  // return undefined 
}

// chai ();

// 3 ways to declare arrow fun

// const addTwo = (num1,num2) => {
//    return num1+num2;
// }

// const addTwo = (num1,num2) => num1+num2;

const addTwo = (num1,num2) => (num1+num2);

const Name = (nameOfUser) => {
    return  nameOfUser
}

console.log("Ronak");

console.log(addTwo(4,3));
