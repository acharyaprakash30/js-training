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

myName == "prakash" ? console.log("hello i am prakashh") : console.log("i am not prakash")

//switch case eg:
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}