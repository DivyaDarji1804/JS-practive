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


// // substring do same

// console.log(text.substring(-5));
// console.log(text.substring(0,13));