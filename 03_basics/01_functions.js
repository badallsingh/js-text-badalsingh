// ******************function*************************

function myname() { ///dafination of func.
console. log ("b") ;
console.log("a");
console.log("d");
console. log("a");
console.log("l");
}

myname ()  /// print a func.

// additon

// function addnumbers(number1,number2) {       ////numbers like(number1,number2) is parameters of func.
//     console.log(number1 + number2);
    
// }

// addnumbers(45,796)
// addnumbers(45,"35")
// addnumbers(45,null)   /// (45,null) they all are a arguments

function addTwoNumbers (number1 , number2){  /// batter/smart type to 

let result = number1 + number2;
//  console.log ("Result: ", result);  /// find the value to result like numbers,boolean,string
//  return result or return number1 + number2 

}
 
// addTwoNumbers(3,5)

function loginUserMessage (username) {   /// type. to print vsrisble
return  ` ${username} just logged in `
}

// console.log(loginUserMessage("badalsingh"))

function calculatecartprice(value1,value2,...num1) {
 return num1   
}

// console.log(calculatecartprice(200,400,5004000,4000))
 
// pass object in a function

// const user = {
//   name : "badalsingh",
//   price: 1440
// }

function hanleobject(anyobject) {
  console.log(`username is ${anyobject.name} and price is ${anyobject.price}` );
  
}

hanleobject({       
name : "badalsingh",
price : 199
})

// pass array form a function

const mynewarray =[100,300,400]

function resultsecondvalue(getarray) {
    return getarray[1]
}

console.log(resultsecondvalue(mynewarray));


