// var keyword
// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2; // same variable!      
//         console.log(x);  // 2    
//     }
//     console.log(x);  // 2  
// }    

// varTest();


//let keyword example

// function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;  // different variable      
//         console.log(x);  // 2    
//     } 
//     console.log(x);  // 1  
// }
// letTest();


// const keyword
// const pi=3.14;
// pi=10;
// console.log(pi);


// default parameters in ES5

// var getAccounts=function add(limit){

//     var limit = limit || 10;
//     console.log(limit);
// }
// getAccounts();


//example 2
// var link = function(height, color, url) 
// {     
//     var height = height || 50  ;   
//     var color = color || 'red'  ;   
//     var url = url || 'https://node.university'     // ... 

//     console.log(height,color,url);

// }

// link(100,"blue","http://www.google.com");


// default parameters in ES6

// var getAccounts=function add(limit=10){

//     console.log(limit);
// }
// getAccounts(20);

// template literals
// var first="Varma"; var last="Bhupatiraju"; 
//  //ES5 
//  var myName = "My full name is " +  first + " " + last; 
//  //ES6 
//  var myFullName = `My full name is ${first} ${last}`;
//  console.log(myName);
//  console.log(myFullName);

//template literals, invoking functions
// function add(a,b){
//     return a+b;
// }

// console.log(`2+3=${add(2,3)}`);


// spread operators

// function add(a,b,...c){
//     console.log(a,b,...c);
// }

// add(2,3,4,5,6,7);


//destructuring assignment
//example 1
// let [x, y] = [22, 18] 
// console.log(x,y) // 22, 18 

//example 2
// let [a, b, ...c] = [1, 2, 3, 4, 5] 
// console.log(a, b, c) // 1, 2, [3, 4, 5] 

//Arrow function
//  let add=(a,b)=>{
//      console.log(a+b);
//  }

//  add(2,3);


// es5 prototype 
// function Cat(name) {
//     this.name = name
// }
// Cat.prototype.speak = function () {
//     console.log('Bark, woof')

// }
// Cat.prototype.attack = function (enemy) {
//     console.log('Feed me')
// }

// let cat= new Cat("Meow");
// console.log(cat.speak());
// console.log(cat.attack());
// console.log(cat.name);

//es6 classes
// class Cat{

//     constructor(name){
//         console.log(name);
//     }

//     speak(){
//         console.log("bark,woof");
//     }

//     attack(enamy){
//         console.log("Feed Me");
//     }

// }

// let cat=new Cat("Meow");
// console.log(cat.speak());
// console.log(cat.attack());


//promises example1

// function a() {
//     setTimeout(function () {
//         console.log("function a logged");
//     }, 5000)
// }
// function b() {
//     console.log("function b logged");
// }

// a();
// b(); 


// function a() {
//     setTimeout(function () {
//         console.log("function a logged");
//         b(); 
//     }, 5000)
// }
// function b() {
//     console.log("function b logged");
// }

// a();





