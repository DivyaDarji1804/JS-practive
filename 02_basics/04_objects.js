/*
----- quick notes ---------
Created objects learn how to merge two object woth   ... and Object.assign()
learn object how to find keys and values and entities
 */


const  snapUser= new Object(); // singleton object
 snapUser.id= "123abc";
  snapUser.name = "sam";
  snapUser.isLoggedIn = false;

// console.log(snapUser);

const regularUser ={
    email : "sum@gmail.com",
    fullName: {
        userFullName : {
            firstName : "Ronak",
            lastName: "Rana"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);

//  merging two object 

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({},obj1, obj2);  // {} ensures to bind all object property into single object as first is target and second and rest are source 

// console.log(obj3);

// const obj3 ={...obj1,...obj2};  // most used
// console.log(obj3);


const users = [
    {id : 1 , email : "abc@yahoo.uk"},
    {},
    {}
]
// console.log(users[0]);
// console.log(`mail:`,users[0].email);


// how to get keys from the objects
console.log(Object.keys(snapUser));

console.log(Object.values(snapUser));

console.log(Object.entries(snapUser));

console.log(snapUser.hasOwnProperty('isLoggedIn'));

console.log(Object.keys(snapUser).length);
