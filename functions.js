console.clear();
// function functionName(parameter1, parameter2, ....) {
// function body
// }

const name = "Gokila";
console.log("Welcome " + name + "!");

const name2 = "Murali";
console.log("Welcome " + name2 + "!");

const name3 = "Ranjith";
console.log("Welcome " + name3 + "!");

// function declaration
function welcome(name) {
    console.log("Welcome " + name + "!");
}

// function calling
welcome("Murali");
welcome("Gokila");

function isEven(number) {
    if (number % 2 == 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is not even.");
    }
}

isEven(77);
isEven(76);

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log("sum is : " + sum);
}

let array = [1, 2, 3, 1, 3, 4, 2, 4];
let array1 = [1, 2, 3, 1, 3, 4, 2, 4, 3, 2];
let array2 = [20, 11, 22, 33, 44];

sum(array);
sum(array2);

function max(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        if (currentElement > max) {
            max = currentElement;
        }
    }
    console.log("The max in the array is: " + max);
}

max(array);
max(array2);

function fullName(firstName, secondName) {
    console.log("full name is: " + firstName + " " + secondName);
}

fullName("Murali", "Prasanth");

function count(array, target) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            count++;
        }
    }

    console.log(target + " count is : " + count);
}

count([1, 2, 3, 4, 5, 20], 20);

const even = [];
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        even.push(i);
    }
}

console.log(even);

const even2 = [];
for (let i = 10; i <= 20; i++) {
    if (i % 2 == 0) {
        even2.push(i);
    }
}

console.log(even2);
