//ordered collection of same data type oe diffrent data type
let fruit=["apple",1,2.4,null,undefined];
console.log(fruit);
console.log(typeof(fruits));
// push is use to add element in last
fruit.push("Tomato");
console.log(fruit);
// pop use delete last element
console.log(fruit.pop());

// unshift is use to add element in starting of array
fruit.unshift("Ayush");
console.log(fruit);

// shift is use to remove elements from starting
fruit.shift()
console.log(fruit);

//push and pop is fast then shift and unshift because in shift and unshift elements are shiftd
