// ways of creating an object
let user1 = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

// how to assign properties to an object
let user3 = {
    // each property contains a key: value;
    name: "John", // by key "name" store value "John"
    age: 30, // by key "age" store value 30
};

// how to access the properties of an object using dot notation
console.log("user3 name is ", user3.name);
console.log("user3 age is ", user3.age);

// we can change the value of a property of an object at anytime.
user3.age = 31;
console.log("user3 age is changed to ", user3.age);

// to delete a property in an object
delete user3.age;

// We can also use multiword property names, but then they must be quoted:
let user4 = {
    name: "John",
    age: 30,
    "likes birds": true, // multiword property name must be quoted
};

// accessing multiword property using the square bracket notation
// user3.likes birds will cause error
console.log("does user4 likes birds :", user4["likes birds"]);

// for deleting a multi word property
delete user4["likes birds"];

// we can use a variable also insdie the square bracket notation to assign a property
// for an object
let key = "likes birds";
user[key] = true; // same as user["likes birds"] = true;

// The dot notation cannot be used in a similar way:
let key2 = "name";
alert(user.key2); // undefined

// We can use square brackets in an object literal, when creating an object.
// That’s called computed properties.
let fruit = "apple";

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
    // "apple": 5,
};

alert("apples in bag ", bag.apple);
