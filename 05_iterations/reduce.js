
 // sintex
// const arrayl = [1, 2, 3, 4];
 
// 0+1+2+3+4=10 add

// const initialValue = 0;
// const sumwithInitial = arrayl.reduce((accumulator,currentValue) => accumulator + currentValue,
// initialValue)
 
// console.log(sumwithInitial);
// // Expected output: 10


const myNums = [1,2,3]

const myTotal = myNums. reduce(function (acc, currval) {

console.log(`acc: ${acc} and currval: ${currval}`);

return acc + currval
},3 )

//  same meaning but diffrent sintex 

const mytotal2 = mynum.reduce((acc, currval) =>  acc + currval ,2 ) 

console.log(myTotal);

const shoppingcart = [
    {
        course : 'javascript',
        fee: 300
    },{
        course : 'database',
        fee: 5999
    },{
        course : 'mobile dev ',
        fee: 4999
    },{
        course : 'python',
        fee: 3999
    }
]

const fee_to_pay = shoppingcart.reduce ((acc , item) => acc + item.fee ,0 )

console.log(fee_to_pay);
