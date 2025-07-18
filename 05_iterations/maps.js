//*********** */ maps**************

// similer then foreach and filter loops techniques 

const mynum = [ 1,2,3,4,5,6,7,8,9,10]

// const newnum = mynum.map((num) => num + 10 )

const newnum = mynum //// multiple loops use (chaining technique )
    .map ((num) => num*10 )
     .map( (num) => num + 1)
      .filter( (num) => num >= 40)

console.log(newnum);
