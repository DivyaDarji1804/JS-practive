/*
Quick note 
on second lec understand how to join two arraays through push,concat and through ...
using flat to devide array into single 
then use .from to convert into  array 
.of to make array
*/
const indPlayers = [`Sachin`, `Virat`, `Dhoni`];
const ausPlayers = [`Gilchrist`,'Ponting','Hayden'];

// indPlayers.push(ausPlayers)
// console.log(indPlayers[3][1]);

// let combined =  indPlayers.concat(ausPlayers);
// console.log(combined);

// indPlayers.push(...ausPlayers);
// console.log(indPlayers);

const allPlayers=[...ausPlayers,...indPlayers];
console.log(allPlayers);


// const myArr = [1,2,3,[4,5,6],7,[7,[6,7,[4,5]]]];

// const newArr = myArr.flat(3);
// console.log(newArr);
// const newArr2 = myArr.flat(2);
// console.log(newArr2);
// const newArr3= myArr.flat(Infinity);
// console.log(newArr3);


console.log(Array.isArray("Roamn"));
console.log(Array.from("Roman"));
console.log(Array.from({name: "hitesh"})); // cannot convert object directly

console.log(Array.of(indPlayers,ausPlayers));  // it add as elemnt of array wheter it is array or element