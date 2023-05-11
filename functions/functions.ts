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

obj2.m()

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