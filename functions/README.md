# FUNCTIONS

## A Brief introduction to Functions in JavaScript.

A function is a JS code that is defined once but may be executed/invoked any number of times.

JS functions are parameterized; a function definition may have parameters that work as local variables for the body of that function.

During invocation, values known as _arguments_ are passed for the function's parameters.

```js
function greeting(name) {
	// name is a parameter. A mere placeholder.
	console.log(`Hello, ${name}.`); // The function body.
}

greeting("Bob"); // "Bob" is an argument that replaces name during invocation.
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

    1. As functions (Function Invocation)

    2. As methods (Method Invocation)

    3. As constructors (Constructor Invocation)

    4. Indirectly through their call() and apply() methods.

    5. Implicitly via JS language features that do not appear like normal function invocations.

### Function Invocation.

Functions are invoked using an **_invocation expression_**.

An invocation expression is JS' syntax for calling or executing a function.

It starts with a function expression followed by open parenthesis, comma separated argument(s), and a closing parenthesis.

```js
greeting("Bob");
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

The function here takes the role of a **property access expression**.

The arguments and return value of a method invocation are handled exactly as in regular function invocation.

Method invocations differ from function invocations in one major way: the *invocation context*.

Property Access Expressions consist of two parts: **the object** and **a property name**.
