/**
 ---------- quick notes --------------
 // Immediately Invoked Function Expression (IIFE)
 it use to avoid any global conflit also to call any function at a time
 iife means to avoid global scope poluttion and to call any function immediiattly we use  immediatly invoked function expression
 also to add ; after immediately invoked function expresstion - IIFE
syntax : 
( your_function ) ()

 */

(function check (){                                 // named iffe means function way
    console.log(`DB connected`);
})() ;

((name)=> {                                         // unnamed iffe means arrow way 
console.log(`name: ${name}`);
})("Alex");
