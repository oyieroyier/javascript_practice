# OBJECTS IN JAVASCRIPT

Objects are JavaScript's most fundamental datatype.

They are **composite values** meaning they aggregate _aggregate multiple values_ and allow you to store and retreive those values _by name_.

Objects are **mutable** and **manipuated by reference** rather than by value.

If variable `x` refers to an object and the code `y = x` is executed, the variable `y` holds a _reference to that object_ and **not merely a copy of that opject**.

If you modify the values of the object using `y`, the changes also reflect on `x` and vice versa.

#### example

```js
let x = {
	name: "Bob",
	career: "Law",
};

let y = x;

x.name = "John";
console.log(y);

/*
LOGS:

y = {
	name: "John",
	career: "Law",
}
*/

// This shows that the values of y have been manipulated using x.

y.career = "Software Developer";
console.log(x);

/*
LOGS:
x = {
	name: "John",
	career: "Software Developer",
}
*/

// This shows that the values of x have been manipulated using y.
```

The most common thing to do with Objects is to create them and then **set**, **query**, **delete**, **test** and **enumerate** their _properties_.

JS properties are name-value pairs. No two properties may have the same name.

A value may be _any valid JS value_ or it may be a **setter function** or **getter function**.

## Creating Objects.

- With object literals.
- With the `new` keyword.
- With the `Object.create()` function.

### Creating Objects with object literal.

The simplest way.

An object literal is a comma-separated list of colon-separated name:value pairs enclosed within curly braces.

```js
const obj = {
	name: value,
	name: value,
};
```

An object literal is an expression that _creates_ and _initializes_ a new and distinct object eah time it is evaluated.

The value of each property is evaluated each time the literal is evaluated.
This means a single object literal can create many new objects iff it appears repeatedly within the body of a loop/fxn. And the property values of these objects may differ from each other.

### Creating Objects with the `new` keyword.

The `new` keyword creates and initiaizes a new object. It must be followed by a function invocation.
A function used in this way is called a **constructor**.

```js
let obj = new Object();

// This creates an empty object {}

/*

Equivalent of:

let obj = {}

*/
```

<!-- ### DETOUR - Object Prototypes
Any time you create an object using object literal, what JavaScript actially does is it makes a call to the `new Object()` constructor to create the object.

| What you write | What JavaScript sees/does|
| --- | --- |
|`let myObj = {}` | `let myObj = new Object()`|
 -->

## Querying and Setting Properties

Use the _dot notation_ or _bracket notation_.

When using the dot notation, the righthand value must be a simple identifier naming the property.

```js
let name = book.athor;
```

When using bracket notation, the value within the brackets must evaluate to a string or a value that can be converted to a string.

```js
let name = book["author"];
```

Querying follows same rules, albeit with the values on the right side.

```js
book.author = "Bob"; // Dot Notation
book["author"] = "Bob"; // Bracket Notation
```
###### PS: Bracket Notation is also called Array Notation.

### Objects as Associative Arrays.
Bracket notation looks like one is accessing an array but one that is indexed by strings instead of numbers.

```js
console.log(arr[0]) // Accessing an array at NUMBERED INDEX 0

console.log(obj["name"]) // Accessing an object using what seems like STRING-INDEXING.
```
This kind of string-indexed array is known as an **associative array** (or a **hash** or a **dictionary** in other languages.)

Why is this important/powerful?

In the dot notation, one types identifiers literally. Identifiers are not JavaScript datatypes so the program cannot manipulate them.

However, strings (used in array notation) are JavaScript datatypes and the engine would know how to create and manipulate them while running.

An example of a code hard to achieve with dot notation:

```js
let addr = ""
for (let i = 0; i < 4; i++) {
	addr += customer[`address${i}`] + "\n"
	addr += customer.address`${i}` + "\n"

}
```