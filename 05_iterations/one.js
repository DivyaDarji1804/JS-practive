/**
 --------- quick notes of lec 26 loops -----------------
learn about for loop 
break and continue
 */


//  for (let i=0; i < 10;i++){
//   console.log(i);
//  }

//   for(let i=0;i<=10;i++){
//   for(let j=0;j<=10;j++){
//     console.log(`${i} * ${j} =${i*j}`)
//   }
//  }

let myArr = ["sachin", "Virat","Dhoni"];

// for(let index = 0; index<myArr.length;index++){
//     const elemnt = myArr[index];
//     console.log(elemnt);
// }


// break and continue

for (let index = 0; index <=20; index++) {
     if (index == 5){
        console.log(`5 detected`);
        // break;   // it will not take 5
        continue;   // it will skip below console and rest will also print 
     }  
    console.log(`value of index is: ${index}`);
}