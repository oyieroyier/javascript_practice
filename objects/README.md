# OBJECTS IN JAVASCRIPT

Objects are JavaScript's most fundamental datatype.

They are **composite values** meaning they aggregate *aggregate multiple values* and allow you to store and retreive those values *by name*.

Objects are **mutable** and **manipuated by reference** rather than by value.

If variable ```x``` refers to an object and the code ```y = x``` is executed, the variable ```y``` holds a *reference to that object* and **not merely a copy of that opject**.

If you modify the values of the object using ```y```, the changes also reflect on ```x``` and vice versa.

###example

```js
let x = {
	name: "Bob",
	career: "Law",
}

let y = x

x.name = "John"
console.log(y)

/*
y = {
	name: "John",
	career: "Law",
}
*/

// This shows that the values of y have been manipulated using x.

y.career = "Software Developer"
console.log(x)

/*
x = {
	name: "John",
	career: "Software Developer",
}
*/

// This shows that the values of x have been manipulated using y.
```