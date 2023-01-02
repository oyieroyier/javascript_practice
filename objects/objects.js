// QUERYING AND SETTING PROPERTIES
let student = {
	name: {
		first: "Samuel",
		second: "Mathenge",
	},
	grades: {
		sciences: {
			Physics: "A",
			Chemistry: "B",
			Biology: "A",
		},
		languages: {
			Kiswahili: "C+",
			English: "B",
		},
	},
	hobbies: ["Skating", "Football", "Gaming", "Coding"], //Arrays list things that have no distinction between them. All are just hobbies.
};

// Using Dot notation:
console.log(student.grades.sciences.Biology);

// Using Array Notation:
console.log(student["grades"]["languages"]["Kiswahili"]);

console.log(student["hobbies"]);

let hobbyList = "";
for (let i = 0; i <= 3; i++) {
	hobbyList += student["hobbies"][i] + "\n";
	// hobbyList += student.hobbies[i] + "\n";
}

hobbyList;

// INHERITANCE.

let o = {}; // o, like ALL objects created using Object literals, inherits its object methods from Object.prototype
o.x = 3; // o now has its own property.

o;

let p = Object.create(o); // Object.create() tells JS to create another object from the referenced one passed as an argument and assign it to the variable.
// p inherits properties from o plus the Object.protype methods existing in o.
console.log(p.__proto__); // This proves that p has inherited from o

p; // Though if you just log p, it will show you an empty object...

console.log(p.x); // But if you log p.x it will show 3.

p.y = 4; // Assigning p its own property.

p; // Logging p in the console no longer gives you an empty object.

let q = Object.create(p); // Creating q which inherits properties from p, o and Object.prototype

q; // If you log q? It show you an empty object.

console.log(q.x); // But q.x gives 3. Inherited from o
console.log(q.y); // And q.y gives 4. Inherited from p

q.z = 5; // Assigning q its own property.

q; // now if you log q in the console, it shows a z:5 name:value pair inside an object.
// Are the other properties hidden?

console.log(q.__proto__.x); // Code says, "Go to the protptypes of q. Then get me the value in x "

// What would happen if we assign q another own property called y with a vaue of 6?

q.y = 6;
q;

// Let us assign the value of that property named y to 7

q.y = 7;
q;

/*
	If q does not have its own (NON-INHERITED) property named y, as was the case before line 72, the assignment creates the
	new peoperty and gives it the new value, 6.
	Whwn this happens, the inherited property is hidden by the newly-created own property with the same name.

	If q has its own (NON-INHERITED) property named y, as was the case before line 77, the assignment
	simply updates the value of the existing property.
*/

console.log(q.__proto__.y); // The inherited y property still exists, but its value is now hidden.
// Assignment only modifies the original object and leaves the prototype untouched.

// TESTING PROPERTIES

/* 
	Testing is done with the:
		1. in operator
		2. hasOwnProperty() method
		3. propertyIsEnumerable() method
*/

let obj = {
	x: 1,
};

// The in operator expects a property name on the left and the object name on the right
// The property name must be in a string form.
console.log("x" in obj);
console.log("y" in obj);
console.log("toString" in obj); // obj inherits "toString property from Object.prototype"

// hasOwnProperty() method tests whether the object has an own property with a given name.
// It returns false for inherited properties.

let obj2 = Object.create(obj); // Creating obj2 object inheriting properties from obj (& Object.prototype)
console.log(obj2.x); // obj2 inherits the property x from obj.

obj2.name = "Siiiiuuuuuu";
obj2; // Own property is name. Time to test.

console.log(obj2.hasOwnProperty("name"));
console.log(obj2.hasOwnProperty("x"));

// propertyIsEnumerable() returns true only if the named property is an own property AND its enumerable attribute is true.
console.log(obj2.propertyIsEnumerable("name"));
