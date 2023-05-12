const hello = 2;

const message: (name: string) => void = (human: string) => {
	console.log(`Hello ${human}`);
};

message('Bob');

// hello(2);
const wassup: (student: string) => string = (student: string) => {
	console.log(`Wassup ${student}`);

	return `Wassup ${student}`;
};

const greeting = wassup('Kimathi');

console.log(greeting);

// console.log(hello('Mike'));
let sum: ([param]: number[], [param2]: number[]) => number[];

sum = ([a, b]: number[], [c, d]: number[]) => {
	console.log([a + d, b + c]);

	return [a + d, c + b];
};

sum([1, 6], [1, 2]);

function factorial(x: number) {
	if (x < 1) {
		return 1;
	}
	return x * factorial(x - 1);
}

console.log(factorial(4));

interface Something {
	name: string;
	func: (name: string) => string;
}

const person: Something = {
	name: 'John',
	func: (name) => {
		return `Method invoked by ${name}!`;
	},
};

console.log(person['func']('Bob'));

let obj = {
	m: function () {
		let self = this;
		console.log(this === self);
		f();

		function f() {
			console.log(this === obj);
			console.log(this === obj);
			// console.log(self === obj);
		}
	},

	n: function () {
		let self = this;
		console.log(this === self);

		const f = () => this === obj;
		console.log(f());
	},
};

obj.m();
obj.n();

let obj2 = {
	m: function () {
		let self = this;
		console.log(this === self);

		const f = function () {
			console.log(this === obj2);
			console.log(this === obj2);
			// console.log(self === obj2);
		}.bind(this);
		f();
	},
};

obj2.m();

function people(name: string, ...rest: string[]) {
	console.log(name);
	console.log(rest);
	return rest.forEach((e) => console.log(`Hello ${e}`));
}
people('Kimathi', 'Bob', 'Ogada', 'Chemweno');

function add(a: number[], b: number[]) {
	console.log((a[1] + a[0]) * (b[1] + b[0]));
}
add([1, 2], [3, 4]);

function add2([a, b]: number[], [c, d]: number[]) {
	console.log((a + b) * (c + d));
}
add2([1, 2], [3, 4]);

let square: (x: number) => number;

square = (x: number) => {
	return x * x;
};

let s: Function = square;

s(4);
square(4);

console.log(s(4));
console.log(square(4));

let o: {
	square: Function;
};

o = {
	square: function (x: number) {
		return x * x;
	},
};

let y = o.square(6);

console.log(y);

let arr: number[] = [1, 2, 3, 111, 433, 112, 421, 211];

console.log(
	arr.sort(function (num1: number, num2: number) {
		return num1 - num2;
	})
);

function areaOfACircle(pi: number, radius: number) {
	return pi * square(radius);
}
console.log(areaOfACircle(22 / 7, 7));

uniqueCounter.counter = 0;
function uniqueCounter(): number {
	return uniqueCounter.counter++;
}
console.log(uniqueCounter());
console.log(uniqueCounter());
console.log(uniqueCounter());
console.log(uniqueCounter());

let scope: string = 'global scope';

function checkScope(): string {
	let scope: string = 'local scope';

	function f(): string {
		return scope;
	}

	return f();
}
console.log(checkScope());

function constfunc(v: any) {
	return () => v;
}

// console.log(constfunc(5)());

let funcs = [];

for (let i = 0; i < 10; i++) funcs[i] = constfunc(i);

console.log(funcs);

console.log(people.length);

function foo(a: string, b: string, c: string, d: string, e: string) {
	// ...
}
console.log(foo.name); // => foo
console.log(foo.prototype); // => foo

const object = {
	firstName: 'Bob',
};

function wazzup(person) {
	console.log(`Hello ${person}`);
}

wazzup.call(obj, object.firstName);

const mtu = {
	name: 'John',
	yearOfBirth: 2000,
	occupation: 'Developer',
};

function greet(name: string, occupation: string) {
	return `Hello, my name is ${name} and I'm a ${occupation}.`;
}
const salaamz = greet.call(person, 'John', 'Developer');
console.log(salaamz);
// => Hello, my name is John and I'm a Developer.

function subtract(currentYear: number) {
	return `You are now ${currentYear - this.yearOfBirth} years old.`;
}

const currentAge = subtract.bind(mtu);
console.log(currentAge(2023));
