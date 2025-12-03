/*
----- quick notes
three , four five all are from same lecture 

it is nice lecture for loop intro of foreach map etc 

*/
const coding = [`js`,`ruby`,`java`,`python`,`cpp`] ;

// coding.forEach( function (val) {
//     console.log(val);  
// });

// coding.forEach((item)=> {console.log(item)});


function print (item){
    console.log(item);
}

// coding.forEach(print);


// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
// })


const myCode = [
    {
        langName : "javascript",
        file : "js"
    },
    {
        langName : "python",
        file : "py"
    },
    {
        langName : "java",
        file : "java"
    }
];

myCode.forEach((item)=> {
    console.log(item.langName);
});