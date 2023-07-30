// To analyze the differences between these keywords, I'll be using three factors:
// 1.Scope of variables
// 2.Redeclaration and reassignment
// 3.Hoisting

// KEYWORD	SCOPE	             REDECLARATION & REASSIGNMENT	       HOISTING
// var	Global, Local	              yes & yes	                    yes, with default value
// let	Global, Local, Block	        no & yes	                yes, without default value
// const	Global, Local, Block	    no & no	                    yes, without default value

//scope are three global , local and block

// in terms of var
var a= 10;
var a = 20;
a=30;             //redeclare and reassignment is true

console.log(b);
b = 20;   //undefined  //hoisting  with default value


let glob = 12;
let golb = 14  // SyntaxError: Identifier 'glob' has already been declared


console.log(number)
// ReferenceError: Cannot access 'number' before initialization
let number = 50  //hoisiting without default



//const

// const numberconst = 50
// const numberconst = 100

// SyntaxError: Identifier 'number' has already been declared



const numbers = 50
numbers = 100
// TypeError: Assignment to constant variable