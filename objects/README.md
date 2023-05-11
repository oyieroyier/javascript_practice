# OBJECTS IN JAVASCRIPT

Objects are JavaScript's most fundamental datatype.

They are **composite values** meaning they _aggregate multiple values_ and allow you to store and retreive those values _by name_.

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

**_PS: Bracket Notation is also called Array Notation._**

### Objects as Associative Arrays.

Bracket notation looks like one is accessing an array but one that is indexed by strings instead of numbers.

```js
console.log(arr[0]); // Accessing an array at NUMBERED INDEX 0

console.log(obj["name"]); // Accessing an object using what seems like STRING-INDEXING.
```

This kind of string-indexed array is known as an **associative array** (or a **hash** or a **dictionary** in other languages.)

Why is this important/powerful?

In the dot notation, one types identifiers literally. Identifiers are not JavaScript datatypes so the program cannot manipulate them.

However, strings (used in array notation) are JavaScript datatypes and the engine would know how to create and manipulate them while running.

An example of a code hard to achieve with dot notation:

```js
let addr = "";

for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
```

## Inheritance

Inheritance is the process of reusing _objects_ that serve as _prototypes_.

One object is based upon another object instead of having to retype the properties afresh.

Think of it like the concept of forking/cloning a GitHub repository instead of just coding everything from scratch.

Basing an object on another object is called **_prototypal inheritance_** or **_prototype-based inheritance_**.

Check `object.js` file from **line 37** to follow through the notes and code on Inheritance.

For optimal results, install the [Quokka Extension](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) on VS Code.

Enable the Quokka extension on the file using the keyboard shortcut `Ctrl` + `K`, and then `Q`.

### Property Access Errors

Property access expressions don't always return a value.

It is NOT an error to query a property that does not exist. It will simply return `undefined`.

It is an error, however, to try and query a property of an object that does not exist.

In short, it is an error to query the values of `null` and `undefined` becayse they have no propetues.

### Delete Properties

The `delete` operator removes a property from an object.

```js
delete book.author; // Deletes author using the delete operator and dot notation.

delete book["title"]; // Deletes title using the delete operator and array notation
```

`delete` operator only deletes own property, not inherited ones.

**To delete an inherited property, you must delete it from the prototype object in which it is defined. Doing this affects ALL the objects that inherited from it.**

### Testing Properties

Check `object.js` file from **line 92** to follow through the notes and code on Inheritance.

For optimal results, install the [Quokka Extension](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) on VS Code.

Enable the Quokka extension on the file using the keyboard shortcut `Ctrl` + `K`, and then `Q`.

### Enumerating Properties

Usually, it is not merely good enough to know whether a property exists.
Sometimes we want to get a list of all the properties in an obect.

The `for/in` loop iterates through an object once for each **enumarable** property, whether **own** or **inherited**, assigning the name of the property to the loop variable.

Check `object.js` file from **line 126** to for enumeration of one of the objects created in the Inheritance discussion.

## Extending Objects

It's common in JavaScript programs to want to copy one object into another.

In ES6, this is possible thanks to `Object.assign()`

`Object.assign()` expects two or more objects as its arguments.

It modifies and returns the first argument only, which is the **target object**.

It does not alter the second or any subsequent arguments. It treats them as **source objects**.

Check `object.js` file from **line 144** to to se how a new object `first Object` has been extended from the object `student` created in the Querying and Setting Properties discussion and object `q` created in the Inheritance discussion.

## Object Methods

All JavaScript objects inherit properties from `Object.prototype`.

These properties are primarily methods; that is why all objects created using object literal have the same prototype.

Some of these methods we have discussed above such as `hasOwnProperty()` and `propertyIsEnumerable()`.

## Getter and Setter Functions

Getters and Setters are special properties that we can use to:

1. Get data/Access properties from a class.
2. Set/Change or Mutate the properties.

They are called **accessor properties** (the previous types discussed are called **data properties**). They may look like functions (because of the parentheses) but in reality they are not functions.

They start with the `get` and `set` keywords.

It is best practice to make properties as private as possible and only provide access to the, using getters and setters.
This means that properties cannot be set from outside without the object itself being in control; a principle called **encapsulation**.

When a program queries the value of an accessor property, JS invokes the `getter` method (passing no arguments).
The return value of this method becomes the value of the **property access expression**.

When a program sets the value of an accessor property, JS invokes the `setter` method, passing **the value on the right hand side of the assignment**.

The method, literally, sets the property value.

**The return value of a setter method is ignored**.

A property with both a getter and setter method is a read/write property.

If it only has a getter method it's a read-only property.

If it only has a setter method it's a write-only property. Any attempt to read it will return `undefinded`. This is not possible with data properties.
