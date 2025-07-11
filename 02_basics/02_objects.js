//*************** object litreals ************************

const mysyb = Symbol(mykey1);

const newobject = {
    name: "Badalsingh",
  "  full name" : "choudharybadalsingh",
    age: 18,
    [mysyb]:"mykey1", /// to add a symbol in object 
    location: "faridabad",
    email: "badalsingh931038@gmail.com",
    isloggin: false,
    lastlogindate : ["monday","tuesday"]
}

// console.log(newobject.email); // it is not wronge mathod of print a output 

// console.log(newobject["email"]); //// this beatter then those type of printing
// console.log(newobject["name"]);
// console.log(newobject["  full name"]);
// console.log(newobject[mysyb]);

newobject.email= " badalsingh@chatgpt.com"

// Object.freeze(newobject) //// after use this statement we are not. change any keyword in objects

// console.log(newobject);

newobject.greeting = function() {
 console.log(`hello new object,${this.name} `);
    
}
console.log(newobject.greeting());
console.log(newobject.greetingtwo());


