//declaring new object
// var user=new Object();
// user.name="CodingSastra";
// user.city="Hyderabad";
// console.log(user.city);

// declaring object
// var user={name:"CodingSastra",city:"Hyderabad"}
// console.log(user.city);

// adding the values
// var user={name:"john", age:30}
// user.isAdmin=true;
// console.log(user);

// //delete the property
// var user={name:"john", age:30}
// user.isAdmin=true;

// delete user.age;
// console.log(user);

//add square brackets for adding the property with multi words
// var user={name:"john", age:30}
// user["is Admin"]=true;
// console.log(user);

//short hand key and values, variables
// var name="John";
// var age=30;

// var user={
//     name,
//     age
// }
// console.log(user);

// //check existence
// var user={
//     name:"John",
//     age:30
// }

// if("city" in user){
//     console.log("name is available");
// }
// else{
//     console.log("name is not available");
// }


//check undefined
// var user={
//     name:"John",
//     age:30
// }

// if(user.city==undefined){
//     console.log("undefined");
// }
// else{
//     console.log("defined");
// }


//object checking
// var a={};
// var b={};

// if(a==b){
//     console.log("matched");
// }
// else{
//     console.log("unmatched");
// }

// // check arrays
// var a=[];
// var b=[];

// if(a==b){
//     console.log("matched");
// }
// else{
//     console.log("unmatched");
// }


// // check reference objects
// var a={};
// var b=a;

// if(a===b){
//     console.log("matched");
// }
// else{
//     console.log("unmatched");
// }


// let keyword
// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x);
//     }
//         console.log(x);
//     } 
    
//     varTest();
// function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
//  letTest();

 // const variable

//  function letTest() {
//     const x = 1;
//      x = 2;
//      console.log(x);
// }
//  letTest();


// object assign

var user={name:'john',age:30}
var newUser={newUser:"CS", city:"Hyderabad"}
var newUser2={canEdit:"false", canView:"true"}

console.log(Object.assign(user,newUser,newUser2));



