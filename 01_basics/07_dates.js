// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// // month start with zero in js  29/06/2024
// let myCreatedDate = new Date(2024, 5 , 29 );
// console.log(myCreatedDate.toDateString());

// let anotherDate = new Date (2025 , 8 , 19 , 13 , 46);
// console.log(anotherDate.toLocaleString());

// let myDate = new Date("2021-05-19");
// console.log(myDate.toDateString());

// let Date02 = new Date("08-08-2015");
// console.log(Date02.toLocaleString());

// let myTimeStamp =Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getFullYear());
// console.log(newDate.toISOString());
console.log(newDate.toString());
console.log(newDate.getMinutes());

let check = newDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
});

console.log(check);