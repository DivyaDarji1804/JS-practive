

// practice of this key word



let obj = {
    name: "divya",
    age:21,

    greet : function(){
        console.log(`hello ${this.name}`);
        console.log(this);     // it is giving returen of current context means obj properties
    }
}
//  obj.greet();

//  console.log(this);   // in global context giving {}


 function greet01 () {
    console.log(this);
 } 
greet01();            // when calling single function it is giving global context
                         // we can call function before initialization as we know hositing 
 

const greet02 = () => {
    console.log(this);
}
//greet02();                  // empty result means {} means arrow function not has its own this  
                              // also due to its const hoisting will through error if declare before initialization

(() => {  
    console.info(`check if iffe call first`);
}) ();                               // if it declare above it prints first