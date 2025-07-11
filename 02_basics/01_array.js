// ********************. Arrays *********************

const myArr = [0,1,2,3,4,5]

const myheros = [ "ironmen","thor","spidermen"]

// console.log(myarr(3));

// other type to represent array

const myarr2 = new Array(1,2 ,3,4,5,6) // to joint with a object 

// mathods

myArr. push (6) // add value at last of the arry
myArr.pop ()

myArr.unshift(9)   // add value at start of the arry 
myArr.shift()

// console.log(myArr.includes(9)) // find the vslue we will give 
// console.log(myArr.indexOf(3)) // check the value we will given 

// console. log (myArr);

const newarr = myArr.join() // this sintex canvert a 2 arrays into a string 


//slice, splice

// console. log("A", myArr);

const myn1 = myArr. slice (1, 3)

// console. log (myn1) ;
// console.log("B", myArr);

const myn2 = myArr. splice (1, 3)
// console. log("C", myArr);
// console. log(myn2) ;


const marvalheros = ["ironmen","spidermen","thor"]

const dcheros = ["supermen","flash","batmen"]

const allheros = marvalheros.concat(dcheros) // used to cambine two or more array 
// console.log(allheros);

const all_newheros = [...marvalheros,...dcheros] /// triple dote are used to spred array 

// console.log(all_newheros);


const another_array = [1,2,3[4,5,6],7,[8,9,[10,11]]]

const real_another_array = another_array.flat(Infinity) // used to canvert multiple arrays to single 

// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))    /// used to que. the following is array or not ..
// console.log(Array.from("Hitesh"))  /// to canvert a string to array 

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3));




