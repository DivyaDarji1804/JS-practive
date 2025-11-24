// in following file mentioned of the string and its different functions and methods most are method except the .length 
// reference is w3 school and chai aur code 

/*
quick note 
.length : give total length of str
concat : to join multiple string 
splice substring : to get specific string char
trim : to remove space 
replace: to replace a string or word 
isWellFormed  check if it is structured
repeat : repeat word 
indexOf : find the index of word

*/
// let str1 = `Hello world`;

// console.log(str1);

// charAt use to find the char at index position
// console.log(str1.length);
// console.log(str1.charAt(7));
// console.log(str1.at(7));
// console.log(str1[7]);

// charCodeAt findsout the utf-16 code of that position

// console.log(str1.charCodeAt(2));

// console.log(str1.codePointAt(2));

// concat method is use to connect two strings to gether two or more strings also 

// let str1 = `hello`;
// let str2 = `world`;
// let str3= `good morning`;

// let str4= str1.concat(" ",str2,"! ", str3);
// console.log(str4);


// slice is use to extracr a part of string you want

 let text = "Apple, Banana, Kiwi";
// console.log(text.slice(7,13));

// // if we just right single digit then it will print after that num like after 5 length rest will printed but not first 5
// console.log(text.slice(7));

// // same go for negative but it countes from backwards last is -1, second last is -2 and it gives only that amount 

// console.log(text.slice(-6));  // it will print kiwi 

// // we can do negative with -negative also 

// console.log(text.slice(-12,-6));


// // substring do same just minus value considers as zeros

// console.log(text.substring(-5));
// console.log(text.substring(0,13));


// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// console.log(text.isWellFormed());

// let txt2 = `this is  test  \uD800`;
// console.log(txt2.isWellFormed());

// //towellFormed will make this proper
// console.log(txt2.toWellFormed());


// trim is use to remove spaces from both side of string 

// let bigString = `         Helllo world                     `;
// console.log(bigString.trim());
// console.log(bigString.trimStart());
// console.log(bigString.trimEnd());


// padStart() and padEnd use to add  pads anothe string until it reaches the given length 

// let num1= 5;
// let str =num1.toString();

// console.log(str.padStart(5,"D"));

// console.log(str.padEnd(11,"o"));

// repeat is use to repeact a sting 

// let greetings= "Good Morning!!! ";
// console.log(greetings.repeat(4));

// replace is use to replace a string  specific

// let str = `hello i am johny . Johny is my first name willams is second`;
// console.log(str.replace("johny","roman"));
// // for the case cencitivity using / at start and /gi at end instead of ""
// console.log(str.replace(/johny/gi,"roman"));

// let text23 = "I love cats. Cats are very easy to love. Cats are very popular.";
// console.log(text23.replaceAll(/cats/gi,"wolfs"));


// to convert a string to array we can use split()

//  text = "Apple, Banana, Kiwi";
//  let arrText = text.split(",");
//  console.log(typeof arrText);
//  console.log(arrText);
//  console.log(arrText[1]);

// split(",")
// split(" ")
// split("|")


// let str07 = ` hello there. please find if there is a notebook there.`;
// console.log(str07.indexOf("there"));
// console.log(str07.lastIndexOf("there"));
// console.log(str07.indexOf("there",15));

// console.log(str07.search("there"));

// let str08=`The rain in SPAIN stays mainly in the plain`;

// console.log(str08.match(/ain/gi));