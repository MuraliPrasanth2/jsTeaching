console.clear();

function functionName() {
	console.log("This is a function");
	console.log("This does this operation as many times we call this function");
}
functionName();
functionName();

function add(a, b) {
	const sum = a + b;
	console.log("sum is :", sum);
}

add(1, 2);

function findMax(array) {
	let max = array[0];
	// Use a for loop starting from the second element (i = 1) to compare each subsequent element with max.
	for (let i = 1; i < array.length; i++) {
		// If the current element is greater than max, update max to this element.
		// i = 8
		// i < array.length
		// 8 < 8
		let currentElement = array[i];
		// let currentElement = array[i];
		// let currentElement = array[7];
		// let currentElement = 4;
		if (currentElement > max) {
			// currentElement > max
			// 4 > 4
			// false
			max = currentElement;
			// max = currentElement;
			// max = 4;
		}
	}
	// After looping through all elements, max will contain the largest number in the array.
	console.log("max in ", array, "is :", max);
}

findMax([3, 5, 1, 2, 8, 9, 22, 33, 44, 98, 96]);

function findCount(array, target) {
	let count = 0;
	// Use a for loop to iterate through each element of the array.
	for (let i = 0; i < array.length; i++) {
		// Inside the loop, check if the current element equals target.
		// i = 10
		// i < array.length
		// 10 < 10
		if (array[i] == target) {
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
	console.log("count of ", target, "is :", count);
}

findCount([1, 2, 3, 1, 3, 4, 2, 4, 3, 2], 2);
findCount([1, 2, 3, 1, 3, 4, 2, 4, 3, 2], 3);
findCount([1, 2, 3, 1, 3, 4, 2, 4, 3, 2], 4);

function findMin(array) {
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
}

findMin([3, 5, 1, 2, 8, 9, 22, 33, 44, 98, 96]);

function combineArrays(array1, array2) {
	const bothArray = [];

	for (let i = 0; i < array1.length; i++) {
		bothArray.push(array1[i]);
	}

	for (let i = 0; i < array2.length; i++) {
		bothArray.push(array2[i]);
	}

	console.log(bothArray);
}

combineArrays([1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14]);

function even(start, end) {
	const even = [];
	for (let i = start; i <= end; i++) {
		if (i % 2 == 0) {
			even.push(i);
		}
	}

	console.log(even);
}

even(1, 10);
even(11, 20);
even(1, 1000);

function odd(start, end) {
	const odd = [];
	for (let i = start; i <= end; i++) {
		if (i % 2 == 1) {
			odd.push(i);
		}
	}

	console.log(odd);
}

odd(1, 100);

function simpleIntrest(p, n, r) {
	const result = (p * n * r) / 100;
	return result;
}

console.log("returns is :", simpleIntrest(10, 5, 3000));

function add2(a, b) {
	const sum = a + b;
	return sum;
}

console.log("sum is", add2(1, 2));

function isEven(a) {
	return a % 2 == 0;
}

console.log("Is number 2 even: ", isEven(2));
console.log("Is number 3 even: ", isEven(3));

function isOdd(a) {
	return a % 2 == 1;
}

console.log("Is number 2 odd: ", isOdd(2));
console.log("Is number 3 odd: ", isOdd(3));
