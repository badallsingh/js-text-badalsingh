// ************ for loop *****************

// for (let index = 0; index <= 10; index++) {
//     const element =index;
//     console.log(element);
    
// }     ////// simple sintex

// add candition 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
        
    }
    console.log(element);
    
    
}

// use multiple loops

for (let i = 1; i < array.length; i++) {
    // console.log(`outer loop values: ${i}`);
    
for (let j = 1; j < array.length; j++) {
//  console.log(`inner loop value for j : ${j} and inner loop value for i ${i}`);
    //  console.log(i + "*" + j + " = " + i*j);  /// tables upto 1-10 
     
}    
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = array[index];
    console.log(element);
    
}

// break and continue 

for (let index = 1; index < 10; index++) {
    if (index ===5) {
        // console.log(`detected 5 `);
        break 
    }
    //  console.log(`the values of index is : ${index}`);
     
}

for (let index = 1; index < 10; index++) {
    if (index ===5) {
        // console.log(`detected 5 `);
       continue;
    }
    //  console.log(`the values of index is : ${index}`);
     
}