const score = 400
console.log (score);

// another type of represent numbers :-
const balance = new Number (100)
console. log (balance);
console. log (balance.toString().length);// function/ mathods / properties of number 
console. log (balance.toFixed (2));// function/ mathods / properties of number 


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));// function/ mathods / properties of number 


const hundreds = 1000000
console. log (hundreds. toLocaleString ('en-IN'));// en-IN MEAN INDIAN


// *************************. MATHS. *********************

console. log (Math);

// ALL ARE the mathods/functions  of maths 
console.log (Math.abs(-4));
console. log (Math. round (4.6)); console.log (Math.ceil(4.2));
console. log (Math.floor (4.9));
console. log (Math.min(4, 3, 6, 8)); console. log (Math.max(4, 3, 6, 8))

// inportant

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

 
const min = 10
const max = 20
console. log (Math. floor (Math. random () * (max - min + 1))+ min );