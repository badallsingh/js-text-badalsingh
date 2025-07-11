// ********************* singleton ******************

// const tinderuser = new Object() /// singleton object 

const tinderuser = {}  /// non-singleton object/ object litreal

tinderuser.id = "123@abc"
tinderuser.name = "badalsingh"
tinderuser.location = "faridabad"

// console.log(tinderuser);
// console.log(Object.keys(tinderUser)); /// check keys 
// console.log(Object.values(tinderUser)); /// check values 
// console.log(Object.entries(tinderUser)); /// used to canvert everything in array 
// console.log(tinderuser.hasownproperty());  ///used to find keys 

const regularuser = {            /// concept of object under object 
userfullname :{
    userfullname: "badalsingh",
 firstname:{
    name:"badal",
    lastname:{
      lastname:"singh"
    }
  }
 }
}

//  console.log( regularuser.fullname.userfullname.firstname );

// cambination of objects 

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a",4: "b"}

// const obj3 = { obj1 , obj2 } 

// const obj3 = Object.assign({}, obj1, obj2) /// to cambine and {is used to genrate obj1,obj2 into a single object}

const obj3 = {...obj1,...obj2} // also used to cambine (...) is the spried opration 
console.log(obj3);

// this situation is hepend... if data base sent data of users  

const user = [            /// array under object are allowed    
{
    id : '1',
    email: "h@gmail.com"
  },
{
  id : "2",
  email : "b@gmail.com"
  },
{
  id: "3",
  email : "c@gmail.com"
  }
]
user(1).email

///destructure of any object,array 

const course = {
coursename: "js in hindi",
 price:"999",
courseInstructor: "hitesh"
}
// course.courseInstructor

const {courseInstructor } = course  /// destructured the object 

const {courseInstructor: insturctor} = course /// used to rename 

console.log(insturctor);


