/*
--------- quick notes f both lectures ----------
learn how to crete a funtion 
how to pass argument 
how to add if else condition
how to pass default value of parameter and overwrite it 
"..." is known as rest or spread operator 
also how to pass object and array into the function
*/
function sayMyName (){
    console.log("walter white");
}

// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();

// function addNum (a,b){ // the parameters
//   console.log( a + b) ;
// }

// addNum(23,7); // the arguments


function addNum (a,b){ // the parameters
  return ( a + b) ;    // after return we cannot execute anything in function 
}

const result = addNum(23,8);
// console.log(result);


// function loginUserMessage (userName){
//     if(!userName){
//         return `please enter user name`;
//     }
//     return `welcome ${userName}`;
// }

function loginUserMessage (userName = "sam"){
    if(!userName){
        return `please enter user name`;
    }
    return `welcome ${userName}`;
}


const msg = loginUserMessage("Heisenberg");
// console.log(msg);



// ---------------------------- lecture 2 of function -----------------------------------------

function calculateCartPrice (...num1) {  //rest operator 
 return num1;
}

// console.log(calculateCartPrice(200,440,500)); 


// function calculateCartPrice (val1,val2,...num1) {  //rest operator 
//  return num1;
// }

// console.log(calculateCartPrice(200,440,500,2000)); 


const user = {
    userName : "Hitesh",
    price : 399
}

function handleObject(anyObject){
 console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user);

// handleObject({
//     userName : "Rajesh",
//     price : 1299
// });


const myArr = [200,400,100,600];

function returnSecondValueOfArr (getArray){
   return getArray[1];
}

// console.log(returnSecondValueOfArr(myArr));
console.log(returnSecondValueOfArr([100,456,44,3443]));