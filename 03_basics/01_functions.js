/*
--------- quick notes ----------
learn how to crete a funtion 
how to pass argument 
how to add if else condition
how to pass default value of parameter and overwrite it 
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
console.log(msg);