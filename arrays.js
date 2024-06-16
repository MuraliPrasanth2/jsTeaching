console.clear();
// ways of creting arrays in js
const array1 = new Array(1, 2, 3, 4);
const array2 = [1, 2, 3, 4];

// how to access the elements in the array
console.log(array1[0]);
console.log(array1[1]);

// how to get the length of the array
console.log("length of the array ", array1.length);

// how to change the element in the array
array1[0] = 20;
console.log(array1[0]);
array1[1] = 30;
console.log(array1[1]);
console.log(
	"-----------------------------------------------------------------------",
);

// how to add an element to the end of an array
console.log("before adding one element to array1 ", array1);
array1.push(5);
console.log("after adding one element to array1 ", array1);

console.log(
	"-----------------------------------------------------------------------",
);

// how to delete an element to the end of an array
console.log("before deleting one element at the end of array1 ", array1);
array1.pop();
console.log("after deleting one element at the end of array1 ", array1);

console.log(
	"-----------------------------------------------------------------------",
);
// how to add an element to the beginning of an array
console.log("before adding one element at the beginning of array1 ", array1);
array1.unshift(50);
console.log("after adding one element to the beginning of array1 ", array1);

console.log(
	"-----------------------------------------------------------------------",
);
// how to delete an element to the beginning of an array
console.log("before deleting one element at the beginning of array1 ", array1);
array1.shift();
console.log("after deleting one element at the beginning of array1 ", array1);

//1) Create an Array
// Create an array named colors that contains the strings: "red", "green", and "blue".

const colors = ["red", "green", "blue"];

// Access Array Elements
// Print the first and last elements of the colors array.
console.log("first elememt :", colors[0]);
console.log("last elememt :", colors[colors.length - 1]);

// Modify an Array Element
// Change the second element of the colors array to "yellow".
colors[1] = "yellow";
console.log("after changing the second element of colors to yellow ", colors);

// Add Elements to an Array
// Add the color "purple" to the end of the colors array.

colors.push("purple");
console.log("after the color purple to the end of the colors array", colors);

// Remove the Last Element from an Array
// Remove the last element from the colors array.
colors.pop();
console.log("after remving the last element from the colors array ", colors);

// Find the Length of an Array
// Print the length of the colors array.
console.log("length of the colors is ", colors.length);

//Remove the First Element of an Array
// Remove the first element of the colors array.

colors.shift();
console.log("after removing the first element of the colors array ", colors);

// Add an Element to the Beginning of an Array 
// Add the color "pink" to the beginning of the colors array.
colors.unshift("pink")
console.log("after adding the first element of the colors array ", colors);
//
