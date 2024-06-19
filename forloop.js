console.clear();

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// for(initilization; condition; incrementOrDecrement) {
//      statements
// }

let array = [10, 20, 30, 40, 70, 80, 100];
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

let sum = 0;
for (let i = 0; i < array.length; i++) {
	sum = sum + array[i];
}
console.log(sum);

// loop through 1 to 10
for (let i = 1; i <= 10; i++) {
	// in the loop check if the number is even
	if (i % 2 == 0) {
		// if even, print the number
		console.log(i);
	}
}

// loop through 1 to 10
// in the loop check if the number is even
// if even, print the number
for (let i = 1; i <= 10; i++) {
	if (i % 2 == 1) {
		console.log(i);
	}
}
