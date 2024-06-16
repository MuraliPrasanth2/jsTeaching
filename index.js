console.clear();
//
//
//
// primitive data types in js
//
// number
// string
// boolean
// undefined
// null

// task1:
//
// Store the following into variables
//
// numberOfChildernForMyParents
// motherName
// fatherName
// myCity
// myJobTitle
//
// print(or log) the above information in the below format.
//
// my father name is fatherName and my mother name is motherName, they have numberOfChildernForMyParents children.I am in myCity and my job title is myJobTitle.
let numberOfChildrenForMyParents = 2; //number
let motherName = "selvi"; //string
let fatherName = "selvam";
let myCity = "banglore";
let myJobTitle = "Trainer";

console.log(
	"my father name is " +
		fatherName +
		" and my mother name is " +
		motherName +
		", they have " +
		numberOfChildrenForMyParents +
		" children. I am in " +
		myCity +
		" and my job title is " +
		myJobTitle,
);

// task2:
// Store your birth year and currentYear in the below variables
// birthYear
// currentYear
//
// calculate the age using the data stored in the above variables and store it in the below variable.
// age
//
// print(or log) the age

let birthYear = 1999;
let currentYear = 2024;
let age = currentYear - birthYear;
console.log("my age is " + age);

// task3:
// Store the current temperature of the room in the below variable in celsius
// currentTemperatureInCelsius
//
// convert  the current temperature of the room to farenheat and store it in the below variable.
// currentTemperatureInFarenheat
//
// print(or log) it.

let currentTemperatureInCelsius = 30;
// °F = °C × (9/5) + 32
let currentTemperatureInFarenheat = currentTemperatureInCelsius * (9 / 5) + 32;
console.log(
	"current temperature in farenheat: " + currentTemperatureInFarenheat,
);

// task4:
// Store a radius into a variable.
// radius
//
// Calculate the circumference based on the radius and store it in the below variable
// circumference
//
// print (or log) the result in the below format.
// "The circumference is NN".
//
// Calculate the area based on the radius and store it in the below variable
// print (or log) the result in the below format.
// "The area is NN".
let radius = 5;
// circumference formula = 2 * 3.14 * r
let circumference = 2 * 3.14 * radius;
console.log("circumference is : " + circumference);

// task5:
// store a boolean value in the below variable
// isThisDesertTasteGood
// just print(or log) the data in that variable.

let isTheDesertTasetGood = true;
console.log(isTheDesertTasetGood);

// task6:
// store some data in a variable and make it so that the value cannot be changed for that variable.
const someConstantVariable = "Some constant value";
someConstantVariable = "some other value";

