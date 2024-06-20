console.clear();
// sum of Array Elements:
// Initialize a variable (sum) to 0.
let sum = 0;
let array = [1, 2, 3, 1, 3, 4, 2, 4, 3, 2];
// Use a for loop to iterate through each element of the array.
for (let i = 0; i < array.length; i++) {
  // Inside the loop, add each element to the sum variable.
  sum = sum + array[i];
}
// After looping through all elements, sum will hold the total sum of the array.
console.log(sum);

// Find Maximum Number:
// Initialize a variable (max) with the first element of the array (array[0]).
let max = array[0];
// Use a for loop starting from the second element (i = 1) to compare each subsequent element with max.
for (let i = 1; i < array.length; i++) {
  // If the current element is greater than max, update max to this element.
  // i = 4
  // i < array.length
  // 4 < 10
  let currentElement = array[i];
  // let currentElement = array[i];
  // let currentElement = array[4];
  // let currentElement = 5;
  if (currentElement > max) {
    // currentElement > max
    // 5 > 4
    // true
    max = currentElement;
    // max = currentElement;
    // max = 5;
  }
}
// After looping through all elements, max will contain the largest number in the array.
console.log(max);

// Array Reversal:
// Initialize an empty array (reversed) to store the reversed elements.
// Use a for loop starting from the last element (i = array.length - 1) to the first element (i >= 0).
// Inside the loop, push each element of the original array (array[i]) into the reversed array.
// After looping through all elements, reversed will contain the elements of array in reverse order.

// Count Occurrences:
let array1 = [1, 2, 3, 1, 3, 4, 2, 4, 3, 2];
// Initialize a variable (count) to 0.
let count = 0;
// Use a for loop to iterate through each element of the array.
for (let i = 0; i < array1.length; i++) {
  // Inside the loop, check if the current element equals target.
  // i = 10
  // i < array.length
  // 10 < 10
  if (array1[i] == 2) {
    // array1[i] == 3
    // array1[9] == 3
    // 2 == 3
    // false
    // If true, increment the count variable.

    count++;
    // count = count + 1
    // count = 2 + 1
    // count = 3
  }
}

// After looping through all elements, count will hold the number of times target appears in the array.
console.log(count);

// Array Filtering:
// Initialize an empty array (filtered) to store elements that meet the condition.
// Use a for loop to iterate through each element of the array.
// Inside the loop, check if the current element satisfies a specific condition (e.g., even numbers using array[i] % 2 === 0).
// If true, push the current element into the filtered array.
// After looping through all elements, filtered will contain only the elements that satisfy the condition.

// Calculate Average:
// Initialize variables sum and average.
// Use a for loop to iterate through each element of the array.
// Inside the loop, add each element to the sum variable.
// After the loop, compute the average by dividing sum by the number of elements in the array.

// Check Prime Numbers:
// Create a function to check if a number is prime (isPrime(num)).
// Initialize a variable (isPrime) to true.
// Use a nested loop to iterate through each element of the array.
// Inside the inner loop, call the isPrime function to check if the current element is prime.
// After looping through all elements, isPrime will indicate whether any prime numbers exist in the array.

// Concatenate Arrays:
// Initialize an empty array (concatenated).
// Use a for loop to iterate through each element of the first array.
// Inside the loop, push each element of the first array into the concatenated array.
// After looping through all elements of the first array, repeat the process for the second array.

// Remove Duplicates:
// Initialize an empty array (unique).
// Use a for loop to iterate through each element of the original array.
// Inside the loop, check if the current element is not already in the unique array.
// If true, push the current element into the unique array.
// After looping through all elements, unique will contain only unique elements from the original array.

// Array Rotation:
// Initialize variables n (number of positions to rotate) and rotated.
// Use a for loop to iterate through each element of the original array.
// Inside the loop, calculate the new index for each element using (i + n) % array.length.
// Assign each element to the corresponding index in the rotated array.
