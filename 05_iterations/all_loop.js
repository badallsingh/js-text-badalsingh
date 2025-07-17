// ****************** for of loop ***********************

// ["","",""]
// [{},{},{}]

const myarray = [1,2,3,4,5]

for (const arr of myarray) {
    // console.log(arr);
    
}

const greeting = "hello world";

let count = " " ;
for (const greet  of greeting) {
    // console.log(`print : ${greet}`);
  count += greet;
   if (count === "hello" ) {
        console.log(`print : ${greet}`);

    break;
    console.log(`detected :${greet}`);
    
   }
//  console.log(`this is greet ${greet}`);
    count++
}

// ***** maps *******

 