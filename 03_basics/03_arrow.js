//  ***************. arrows*****************

const user  = {
   username : "badalsingh",
price : 999,

welcomeMessage: function () {          /// this is used to access element under the object/variable 
    console.log(` ${this.username},welcome to website `);
    console.log(this);  //// this is print full variable 
    
  }
}
user.welcomeMessage()
user.welcomeMessage = "sam"  //// change the value of username
user.welcomeMessage()

function chai(){   /// this is not work under function
 let username = "hitesh"
// console. log(this.username)
}
// chai()

const chai = function(){ /// this is not work under function
    let username = "hitesh"
// console. log(this.username)
}


const chai = () => {   /// this is also not working in arrow function
 let username = "hitesh"
console. log(this.username)
}

// chai()

// ************* arrow function*******************

// const addtwo = (num1,num2) => {
// return num1 + num2
// }

// do also like this 

// const addtwo = (num1,num2) =>  num1 +num2 

// const addtwo = (num1,num2) =>  (num1 + num2)

// const addtwo = (num1,num2) =>  ({username : "badalsingh"})

