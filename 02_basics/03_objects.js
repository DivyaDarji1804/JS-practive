/* 
quick notes
learn how declare object and how to access it 
also learn how to declare symbol 

*/

// if we declare as literal singleton will not ; singleton will only if we use costructor
// constructor : object.create
// object literals

//declaring symbol
const mySymbol = Symbol("key1");

// to use symbol declare first than use [] to define ex; [mysymbol] : "1111"

const jsUser ={
    name: "Alex",
    age: 21,
    [mySymbol]: "myKey1",
    location: "Monaco",
    email: "alex@yahoo.co.in",
    isLoggedIn : false,
    lastLoginDays: ["monday", "tuesday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser.age);
console.log(typeof jsUser[mySymbol]);

// jsUser.email = "alex@yahoo.co.us";
// console.log(jsUser.email);

// to not change any value 
// Object.freeze(jsUser);

// jsUser.email = "alex@gmail.pk";
// console.log(jsUser);

jsUser.greeting = function (){
    console.log("hello there");
}

jsUser.greeting2= function(){
    console.log(`welcome ,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
// console.log(jsUser);
