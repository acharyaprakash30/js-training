// Conditional statements are used to perform different actions based on
//  different conditions.


//syntax
// if (condition) {
//   //  block of code to be executed if the condition is true
// } else {
//   //  block of code to be executed if the condition is false
// }

//syntax
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }



let age = 18;

if(age>=18){
  console.log("you are eligible to vote")
}else{
  console.log("you are not eligible for it")
}


let item = 20;

if(item % 2 == 0){
  console.log("this is even")
}
else{
console.log("this is odd");
}


let a = 12;
let b = "12";

if(a === b){
  console.log("true")
}else{
  console.log("false")
}


let myage = 25;
let userName = "prakash";

if(myage>=18 || userName === "prakashi"){
  console.log("hello prakash")
}
else{
  console.log("who are you?");
}


let myName = "prakash";

myName == "prakash" ?
  console.log("hello i am prakashh"):
  console.log("i am not prakash")

  
  const si = (p,t,r) =>{
    return ((p*t*r)/100);
  }
  let simpleInterest =si(100,200,300);
  const checkEvenOdd = (interest) =>{
    if(interest % 2 == 0){
      console.log("even")
    }else{
      console.log("odd");
    }
  }
  checkEvenOdd(simpleInterest)


  // The JavaScript Switch Statement
//Use the switch statement to select one of many code blocks to be executed.

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
  
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}