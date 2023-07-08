//primitive data type
// 1.string 2. number 3. BigInt, 4.undefined 5. boolean 6.symbol
// 1.String
var str="hello world";
console.log(str);
// 2. number
var x=3;
var y=3.8;
console.log(x)
console.log(y)
console.log(x*y)
 // 3. big int:- big int is use to store number which are the above the limitation of the number data typpe
 var big=12334474832929299929292929;
 console.log(big)
 // 4. boolean  logical entity
 var a=1;
 var b=3;
 var c=3;
 if(a==b) console.log("true");
 else {
    console.log("false");
 }
 // undefined is just like a place holder . it is use when variable is declared but value is not assigned
 var ab;
 console.log(ab);
 // null -- nin existent or invalid value
 var z=null;
 console.log(null);
 // symbol-- New data type introduce in ES6, it is used to store unique and anonymous value
 var sym=Symbol('hhhiS')
 console.log(sym)
