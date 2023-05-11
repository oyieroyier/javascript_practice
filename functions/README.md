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

#### Rest Parameters and Variable-Length Argument Lists

Whereas parameter defaults allow us to write functions that can be invoked with fewer arguments than parameters, rest parameters do the opposite.


## Functions as Values

In JS, functions are not only syntax but also values.

Consider this:

**PS: All examples henceforth use TypeScript notation, for my personal TS practice:**

```ts
let square: (x: number) => number;
square = (num: number) => {
	return num * num;
};

let s: Function = square;
square(4);
s(4);
```

In the example above, `square` has been assigned as another variable but still works the same.

Functions can also be assigned to object properties rather than variables.

```ts
let o: {
	square: Function;
}; // Declare an object 'o' whose first key must be called 'square' and its value must be a JavaScript function.

o = {
	square: function (x: number) {
		return x * x;
	},
}; // Assign values to variable 'o'. Further declare that the function in 'o' takes one argument that must be of the type 'number'. Returns the qsquare of that number.

let y = o.square(16);
```
