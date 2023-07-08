// hoisting  is the default behaviour of JS where all the 
// variable and function declarations are moved on top
hoistedvariable=4;
console.log(hoistedvariable);
var hoistedvariable;
//2. 
var a;
 console.log(a);
 a=10;
 // example 3--hoisted function
 hoistedFun();  // even function is declared after calling
 function hoistedFun()
 {
    console.log("hi");
 }
 //Note::- variable initalization are not hoisted only varibale declaration are hoisted
 var x;
 console.log(x);
 x=23;
 // to avoid hoisting we can use strict mode
 