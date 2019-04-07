// selecting h1 element;
// var h1=document.querySelector("h1");
// h1.style.color="pink";

// changing the background color
// var body = document.querySelector("body"); //SELE 
// var isBlue = false;
// setInterval(function () {   //MANIPULATE  
//     if (isBlue) {
//         body.style.background = "white";
//     } else {
//         body.style.background = "#3498db";
//     }
//     isBlue = !isBlue;
// }, 1000);


//selecting by Id
// let li=document.getElementById("highlight");
// console.log(li);

//selecting by class name
// let li=document.getElementsByClassName("bolded");
// console.log(li);

//selecting tags by name
// let li=document.getElementsByTagName("li");
// console.log(li[1]);


//selecting tags by query selector
// let htmlElement=document.querySelector("h1");
// console.log(htmlElement);


//25/2/
//selecting element by Id
// let h1=document.getElementById("highlight");
// console.log(h1);

//selecting element by class name
// let h1=document.getElementsByClassName("bolded");
// console.log(h1[1]);

//selecting element by tag name
// let h1=document.getElementsByTagName("li");
// console.log(h1[2]);



//selecting element by query selector
// let h1=document.querySelector("li");
// console.log(h1);

//selecting element by query selector all
// let h1=document.querySelectorAll("h1");
// console.log(h1[1]);


// changing elements
// let li = document.getElementById("highlight");
// li.style.color="blue";
// li.style.border="2px solid red";
// li.style.fontSize="30px";
// console.log(li);

//changing elements by adding/remove css class
// let li=document.getElementById("highlight");
// li.classList.add("some-class");
// li.classList.remove("some-class");
// console.log(li);

//changing elements by toggle class
// function toggle(){
//     let li=document.getElementById("highlight");
//     li.classList.toggle("some-class");
//     console.log(li);
// }


// textContent/innerHtml
// let item=document.querySelector("p");
// console.log(item.textContent);
// console.log(item.innerHTML);
// item.innerHTML="this is new paragraph";


//getAttribute
// let link=document.querySelector("a");
// link.getAttribute("href");
// link.setAttribute("href","http://www.codingsastra.com");
// console.log(link);


//adding eventListener

// let button =document.querySelector("button");

//dynamically executing function in the same place when button clicked
// button.addEventListener("click", function() {
//     console.log("You Clicked Me!");
    
// })


//dynamically executing predefined function when button clicked, console

// button.addEventListener("click",ClickMe);

// function
// function ClickMe(){
//     console.log("You executed predefined function");
// }
// console.log(button);


// // displaying dynamic content in element
// let button =document.querySelector("button");
// let p=document.querySelector("p");

// button.addEventListener("click",ClickMe);

// //function
// function ClickMe(){
//     p.textContent="You clicked me!";
// }
// console.log(button);


// displaying dynamic content in element on mouseover
let button =document.querySelector("button");
let p=document.querySelector("p");

button.addEventListener("mouseout",ClickMe);

//function
function ClickMe(){
    p.textContent="You clicked me!";
}
console.log(button);














