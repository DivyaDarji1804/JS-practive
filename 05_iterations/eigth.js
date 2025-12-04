/*
it is reduce functionality in which acc, value are added 
*/

const nums = [1, 2, 3];


const total = nums.reduce((acc, val) => {
    console.log(`acc:${acc} val:${val}`)
    return acc + val
}, 3);
console.log(total);

const shoppingCart = [
    {
        itemName: "JS",
        price: 2999
    },
    {
        itemName: "mobile dev",
        price: 7999
    },
    {
        itemName: "data science",
        price: 4999
    }
];

const totalCart =shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0);
console.log(totalCart);
