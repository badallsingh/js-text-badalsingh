// if else

const isUserloggedIn = true;   //. >,<,<=,>=,==,!=,===,!== (oprators)

const temperature = 41


if(temperature > 50){
// console.log ("temperature is less then 50");

} else{
    // console.log("temperature is greater then 50");
    
}

const score = 200;

if (score > 100) {
    const power = "fly"
    // console.log(`power of score :${power}`);
    
}

// shorthand notation


const balance = 1000

// if (balance > 500) console.log("yes"),
// console.log(`yes it's true`);

// multi if statments

if (balance<500) {
    console.log("less then 500");
    
} else if (balance<750) {
        console.log("less then 750");

} else if (balance < 900) {
        console.log("less then 900");

}else if (balance < 1200) {
        // console.log("less then 1200");

}

// multiple canditions 

const UserloggedIn = true
const dabitcard = true

if (UserloggedIn && dabitcard) {
    // console.log("allow to access the courses");
    
}

// or 

if (UserloggedIn || dabitcard) {
        // console.log("allow to access the courses");

}

// Nullish Coalescing Operator (??): null undefined
// this oprator are used to handle multiple stetment like 5 is avalable its oky otherwish(??) 10 
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10 
val1 = null ?? undefined ?? 10
// console.log(val1);


// Terniary Operator
//  condition? true : false also like if statement

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("Tess than 80") : console.log ("more than 80");

 