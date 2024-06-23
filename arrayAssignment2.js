console.clear();

// finding max
let array = [9, 7, 8, 44, 33, 22, 8];

let max = array[0];
for (let i = 0; i < array.length; i++) {
  const currentElement = array[i];
  if (max < currentElement) {
    max = currentElement;
  }
}
console.log("max :", max);

// finding min
let min = array[0];
for (let i = 0; i < array.length; i++) {
  // i = 7
  // i < array.length
  // 7 < 7
  const currentElement = array[i];
  // const currentElement = array[6];
  // const currentElement = 8

  if (min > currentElement) {
    // min > currentElement
    // 7 > 8
    // false
    min = currentElement;
    // min = 7
  }
}
console.log("min :", min);

// Calculate Average:
// Initialize variables sum and average.
// Use a for loop to iterate through each element of the array.
// Inside the loop, add each element to the sum variable.
// After the loop, compute the average by dividing sum by the number of elements in the array.
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
const average = sum / array.length;
console.log("average :", average);

// print all the elements that are divisible by 3
// let array = [9, 7, 8, 44, 33, 22, 8];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 3 == 0) {
    console.log(array[i]);
  }
}

console.log(array[array.length - 1]);
// console.log(array[7 - 1])
// console.log(array[6])
console.log("traversing array in reverse order");
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
  // console.log(array[6]);
  // console.log(8);
}

// Concatenate Arrays:
// Initialize an empty array (concatenated).
// Use a for loop to iterate through each element of the first array.
// Inside the loop, push each element of the first array into the concatenated array.
// After looping through all elements of the first array, repeat the process for the second array.

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [8, 9, 10, 11, 12, 13, 14];
const bothArray = [];

for (let i = 0; i < array1.length; i++) {
  bothArray.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
  bothArray.push(array2[i]);
}

console.log(bothArray);

const even = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    even.push(i);
  }
}

console.log(even);

const odd = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    odd.push(i);
  }
}

console.log(odd);

const first = [1, 3, 4, 5, 2, 3, 1, 10, 11];
const unique = [];

for (let i = 0; i < firfirststArray.length; i++) {
  const currentElementInFirst = firstArray[i];
  let isAlreadyPresent = false;
  for (let j = 0; j < uniqueArray.length; j++) {
    const currentElementInUnique = unique[j];
    if (currentElementInFirst == currentElementInUnique) {
        isAlreadyPresent = 
    }
  }
}
