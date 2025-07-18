// *********** for each loop ********************

// const coding = ["js","ruby", "java", "python", "ср"]

// coding.forEach(function(val1) {
// console.log(val1);

// })

// ********or*************

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// ********or*************

// function printme(item) {
//     console.log(printme);
    
// }
// coding.forEach(printme)

// coding.forEach ((item, index, arr) => {     ///they have three parameters 
// console.log(item, index, arr);
//  })


 const mycoding = [
 js = {
   langugagename : "javascript",
    langugagefile : "js"
    },
    java = {
        langugagename : "java",
    langugagefile : "java"
    },
    python = {
        langugagename : "python",
    langugagefile : "py"
    }
 ];

mycoding.forEach((item , index ,arr) => {
// console.log(item,index,arr );
// console.log(item.langugagename);
// console.log(item.langugagefile);

})  
 
// ************** stored in variables ***************

const coding = ["js","ruby", "java", "python", "ср"]

let values = coding.forEach( (item) => {
    // console.log(item)
    // return //// they can't return type 
} )

// console.log(values ); //// they always show undefine 


// ************* give canditions ************

// const array = [1,2,3,4,5,6,7,8,9,10]

// genrate values in empty array 

const array = []

for (let i = 0; i < 20; i++) {
     array.push(i);
}

array.forEach( (i) =>  {
    if (i > 6) {
        console.log(i); /// to print 
    //   array.push(num )
        
    }
} )
// console.log(array);
