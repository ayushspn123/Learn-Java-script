// implicit type coercion in JS is the  automatic conversion of value from one data type to another 
// string coercion
var x=3;
var y="5";
console.log(x+y);
console.log(typeof(x+y));
// output 35  converted in string
var a="hello"
var b="world"
console.log(a+b);  // + concatented string
console.log(x-y);  // output -2
console.log(typeof(x-y)); // - convert into number data type


// 2. Boolean coercion:: booleam corecion takes place when using logical operators ,ternary operators
//all values except false, 0,0n,"",null,undefined and NaN are truth value
var ab=1; // true
if(ab) console.log("true");
else console.log("false");

var ab1=0; // true
if(ab1) console.log("true");
else console.log("false");


// logical operators:
// always return  one of the operand
// OR operator (||) :: if the first value true is true then return first value, otherwise return second value returned
// AND (&&) operator :: if both are true then return second value;
// if first value is falsy return first value
// second value falsy return second value
var  x=220;
var y="hi";
var z=null;
console.log(x||y);
console.log(x|| z)
console.log(x&&y);

