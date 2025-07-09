// dates

// date is Object

let myDate = new Date() 


// console.log(myDate) 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


// let myCreatedDate = new Date("2023-01-14" )
// let myCreatedDate = new Date("01-14-2023")
let mynewcreatedDate = new Date(2025,0,30, 12 ,55)
// console.log(mynewcreatedDate.toLocaleString());


//    time 

let mytimestamp = Date.now()

// console. log (myTimeStamp);
// console. log(myCreatedDate.getTime());
// console. log (Math.floor(Date.now()));
// console. log (Math. floor(Date.now()/1000))// to canpert msec. to sec. 

let newDate = new Date()
// console. log (newDate);
// console. log (newDate.getMonth());
//  console. log (newDate.getDay());
//  console. log (newDate.getFullYear());
//  console. log (newDate.getDate());
//  console. log (newDate.getMinutes());


newDate. toLocaleString ('default',{ //modified way to wright 

weekday: "long",

})