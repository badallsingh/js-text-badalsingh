// ************ filters ***********

// they are similar  then foreach loop 

const myarray = [1,2,3,4,5,6,7,8,9]

// myarray.filter( (num) => num > 6 ) //// how wright a filter 

const newarray = myarray.filter( (num) => num > 6 ) 

// console.log(newarray); 

//  or 

const newarray1 = myarray.filter( (num) => {
    return num > 6 ;
} ) 
// console.log(newarray1);

// ****** example like real data base *************

const book = [
{ title: 'Book One', genre: 'Fiction', publish: 1981,edition: 2004},
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992,edition: 2008 },
{ title: 'Book Three', genre: "History", publish: 1999,edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,edition: 2010 },
{ title:'Book Five', genre: 'Science', publish: 2009,edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987,edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986,edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011,edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction' , publish: 1981,edition: 1989},
]

 let userbook = book.filter ((bk) => bk.genre === "History")

  userbook = book.filter((bk) => bk.publish >= 2000 )

  userbook = book.filter((bk) => bk.publish >= 1995 || bk.genre === "science" )

    userbook = book.filter((bk) => bk.publish >= 1995 && bk.genre === "History" )


console.log(userbook);


