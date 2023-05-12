# FUNCTIONS

## A Brief introduction to Functions in JavaScript.

A function is a JS code that is defined once but may be executed/invoked any number of times.

JS functions are parameterized; a function definition may have parameters that work as local variables for the body of that function.

During invocation, values known as _arguments_ are passed for the function's parameters.

```js
function greeting(name) {
	// name is a parameter; a mere placeholder.
	console.log(`Hello, ${name}.`); // The function body.
}

greeting('Bob'); // "Bob" is an argument that replaces name during invocation.
```

Functions often use their argument values to compute a _return value_.

The return value then becomes the value of the **function-invocation expression**.

JS functions are objects. Meaning they can be:

- Assigned to variables and passed to other functions.
- Set properties on.
- Have methods invoked on them.

## Invoking Functions

In JS, the body inside a function is not invoked when the function is defined rather when the function gets invoked.

JS functions can be invoked in three ways:

- **As functions (Function Invocation)**

- **As methods (Method Invocation)**

- **As constructors (Constructor Invocation)**

- **Indirectly through their call() and apply() methods.**

- **Implicitly via JS language features that do not appear like normal function invocations.**

### Function Invocation.

Functions are invoked using an **_invocation expression_**.

An invocation expression is JS' syntax for calling or executing a function.

It starts with a function expression followed by open parenthesis, comma separated argument(s), and a closing parenthesis.

```js
greeting('Bob');
/*
	greeting => function expression.
	"Bob" => argument expression.

	Everything before the first parenthesis is the function expression.
*/
```

When an invocation expression is evaluated, the function expression is always evaluated first before the anything else. Why?

To see if it is really a function. If the function expression is not a function, a _TypeError_ is thrown.

Next, the arguments are passed, in order, to the parameter names specified when the function was defined.

Lastly, the body of the function is executed.

If the function had a `return` value, then that value becomes the value of the invocation expression. Otherwise, the value of the invocation expression is `undefined`.

### Method Invocation

A method is simply a JS function that is stored in a property of an object.

The function here takes the role of a **property access expression** which means that the function is invoked as a method rather than as a regular function.

The arguments and return value of a method invocation are handled exactly as in regular function invocation.

Method invocations differ from function invocations in one major way: the _invocation context_.

Property Access Expressions consist of two parts: **the object** and **a property name**.

```js
const person = {
	name: 'John',
	func: function () {
		return 'Wassup!';
	},
};

console.log(person.func()); // => "Wassup!"

// To invoke this function, you must first reference the object 'person' then the property name 'func'.
```

Most method invocations use the dot notation for property access but property access expressions that use array notation also cause method invocation.

```js
const person = {
	name: 'John',
	func: function (name) {
		return 'Method invoked by '.concat(name, '!');
	},
};
console.log(person['func']('Bob'));
// Another way to write person.func("Bob")
```

Methods and the `this` keyword are central to OOP.

Any function used as a method is passed an implicit argument `this`; the object through which it is invoked.

Only **arrow functions** inherit the `this` value of the containing function. Regular nested functions do not inherit `this`.

Check out this example:

```js
let obj = {
	m: function () {
		let self = this;
		console.log(this === self); // => true
		f();

		function f() {
			console.log(this === obj); // => false
			console.log(self === obj); // => true
		}
	},
};

obj.m();
```

When you nest a regular function inside an object, the invocation context of the nested function is set to `global` (or `undefined` if you are using strict mode).

A common workaround for this is to use arrow functions which inherit the invocation context of the outer function within which it has been nested.

```js
let obj = {
	n: function () {
		let self = this;
		console.log(this === self); // => true

		const f = () => this === obj;
		console.log(f()); // => true
	},
};

obj.n();
```

Another workaround is to invoke the `bind()` method on the nested function to literally "bind" it with the invocation context of the outer function.

```js
let obj2 = {
	m: function () {
		let self = this;
		console.log(this === self); // => true

		const f = function () {
			console.log(this === obj2); // => true
			console.log(this === obj2); // => true
		}.bind(this);

		f();
	},
};

obj2.m();
```

### Constructor Invocation

If a function or method is preceded by the keyword `new`, then it is a **constructor invocation**.

Constructor invocations differ from regular function and method invocations in their:

- _handling of arguments_
- _invocation context_
- _return value_.

**PS: It is not common but you can omit the pair of empty parentheses in constructor invocation.**

```js
let o = new Object();
// let p = new Object;

// Both these lines are equvalent.
```

A constructor invocation creates (and initializes) a **new**, **empty** object that inherits from the object specified by the `prototype` property of the constructor.

This newly created object is used as the **invocation context** hence the constructor function can refer to it with the `this` keyword.

Constructor functions do not use the `return` keyword. They return implicitly once they reach the end of their body.

If a constructor uses a return statement to return an object, the object becomes the value of the invocation expression.

BUT if the constructor uses a return with no value, orif it returns a primitive value, the return value is ignored and the new object is returned as the value of the invocation.

## Function Arguments and Parameters

**PS: All examples henceforth use TypeScript notation, for my personal TS practice:**

#### Rest Parameters and Variable-Length Argument Lists

Whereas parameter defaults allow us to write functions that can be invoked with fewer arguments than parameters, rest parameters do the opposite.

A rest parameter is preceded by 3 periods (like the spread operator) and must be the last parameter in a function declaration.
The first arguments are passed to the non-rest parameters then any remaining ones are stored in an array that becomes the value of the rest parameter.

```ts
function people(name: string, ...rest: string[]) {
	console.log(name); // => Kimathi
	console.log(rest); // => ["Bob", "Ogada", "Chemweno"]
	return rest.forEach((e) => console.log(`Hello ${e}`));
}
// => Hello Bob
// => Hello Ogada
// => Hello Chemweno

people('Kimathi', 'Bob', 'Ogada', 'Chemweno');
```

## Destructuring function arguments into parameters

If you define a function that has parameter names within square brackets, you are telling the function to expect an array value to be passed for each pair of square brackets.

Consider this function:

```ts
function add(a: number[], b: number[]) {
	console.log((a[1] + a[0]) * (b[1] + b[0]));
} // => 21
add([1, 2], [3, 4]);
```

The function expects to receive 2 arrays as arguments and inside the body, we will choose specific elements from the array and conduct operations on them.

The above function could be destructured as follows to make it more concise:

```ts
function add([a1, a0]: number[], [b1, b0]: number[]) {
	console.log((a1 + a0) * (b1 + b0));
} // => 21
add([1, 2], [3, 4]);
```

Now the function knows during the declaration stage that it ought to expect two numbers from an array before it even gets into the body.

Similarly, if defining a function that expects an object argument, we cab destructure the parameters of that object.

## Functions as Values

In JS, functions are not only syntax but also values.

Consider this code I'll use to illustrate:

```ts
let square: (x: number) => number;
square = (num: number) => {
	return num * num;
};
square(4); // => 16
```

As a value, this JS function can be:

- Assigned to variables.

```js
let s: Function = square;
s(5); // => 25
```

- Stored in the properties of objects or elements of arrays.

```ts
let o: {
	square: Function;
}; // Declare an object 'o' whose first key must be called 'square' and its value must be a JavaScript function.

o = {
	square: function (x: number) {
		return x * x;
	},
}; // Assign values to variable 'o'. Further declare that the function in 'o' takes one argument that must be of the type 'number'. Returns the square of that number.

let y = o.square(6); // => 36
```

- Passed as arguments to functions

```ts
function areaOfACircle(pi: number, radius: number) {
	return pi * square(radius);
} // => Uses the square function to compute the area.
console.log(areaOfACircle(22 / 7, 7)); // => 154
```

## Functions as Namespaces

Because variables declared within a function are not visible outside of the function, it is sometimes useful to declare a function to merely act as a namespace within which you can define variables to avoid cluttering the global namespace.

## Closures

JS uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined and not the variable scope that is in effect when they got invoked.
All JS functions are closures.

```ts
let scope: string = 'global scope';

function checkScope(): string {
	let scope: string = 'local scope';

	function f(): string {
		return scope;
	}

	return f;
}
console.log(checkScope()()); // => local scope;
```

In returning `scope`, the `f()` function will first look inside its body if the variable is defined there.
In this case it is not so it looks to the body of the function `checkScope()` within which it was defined.
There, it finds the variable has been defined and its value set to `"local scope"` so that is what it returns.
Had scope not been defined there, it would have looked at the nex outer environment (global in this case) and found the variable declared there and its value set to `"global"`. Thut it would have returned `global scope` in that case.

It does not matter that the function `f()` has been invoked in the global environment by the function `checkScope()` (where the value of `scope` is `"global scope"`), it's executed using the variable scope of where it was defined.

## Function Properties, Methods and Constructor

Since functions are objects, they have properties and methods just like all other objects.

#### The length property.

The read-only length property of a function specifies the _arity_ of a function; that is the number of arguments it expects.
If the function has a rest parameter, that parameter is not counted for the purposes of this length property.

```ts
function f(a: string, b: string, c: string, d: string, e: string) {
	// ...
}
console.log(f.length); // => 5
```

#### The name property

The read-only name property of a function specifies the name that was specified when the property was defined.

```ts
function foo(a: string, b: string, c: string, d: string, e: string) {
	// ...
}
console.log(foo.name); // => foo
```

#### The prototype property

All functions except arrow functions have a prototype property.
The prototype property of a function is a reference to the prototype object of the function.

#### The `call()` and `apply()` methods

The se allow you to invoke a function as if it were a method of some other object.

The first argument to both these methods is the object on which the function is to be invoked.
Subsequent arguments to the call function are the arguments the function being invoked expects.

Say we have an object `person`.

```ts
const person = {
	name: 'John',
	yearOfBirth: 2000,
	occupation: 'Developer',
};
```

And a function in the global scope:

```ts
function greet(name: string, occupation: string) {
	return `Hello, my name is ${name} and I'm a ${occupation}.`;
}
```

We can use the `call()` and `apply()` methods to invoke the function on the object inasmuch as the function is not a property/method of that object.

```ts
const greeting = greet.call(person, 'John', 'Developer');

console.log(greeting); // => Hello, my name is John and I'm a Developer.
```

The object that the function gets called on becomes its invocation context and the value of the `this` keyword within the body of the function.

The `apply()` method is similar to the `call()` method, only difference being that with `apply()`, the arguments to be passed to the function are specified in an array.

```ts
const greeting = greet.apply(person, ['John', 'Developer']);

console.log(greeting); // => Hello, my name is John and I'm a Developer.
```

#### The `bind()` method

Its primary purpose is to '_bind_' a function to an object.

Say we have a `subtract()` function that takes the current year as an argument and subtracts the `yearOfBirth` property it finds inside an object.

```ts
function subtract(currentYear: number) {
	return `You are now ${currentYear - this.yearOfBirth} years old.`;
}
```

We can bind the function to the `person` object in the previous example and use it to return the person's current age.

```ts
const currentAge = subtract.bind(person);
currentAge(2023); // => You are now 23 years old.
```

**NOTE**:
**Binding does not work with arrow functions and this is actually not a limitation but an advantage of arrow functions.**
**This is beacuse in practice, binding is used to make non-arrow functions work like/mimic arrow functions.**
