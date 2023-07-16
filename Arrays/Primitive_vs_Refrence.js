let arr1=[1,2];
let arr2=arr1;
console.log(arr1);
console.log(arr2);
arr1.push("3");
console.log(arr1);
console.log(arr2);
// clone array
let array1=['item1','item2'];
let array2=array1.slice(0);
console.log(array1);
console.log(array2);
// using spread operator clone
let array=['item1','item2'];
let arr=[...array];
console.log(array1);
console.log(array2);

// array destructuring
const my_arr=[1,2,3];
let myvar1=my_arr[0];
let myvar2=my_arr[1];
//iski jagah pe seedha destructuring kr sakte hai
let  [myvarr1,myvadr2]= my_arr;



