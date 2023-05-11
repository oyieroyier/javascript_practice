# ARRAYS

Arrays are unordered collections of values.
Each value is called an element and each element has a numeric position called _index_.

Arrays are **untyped** meaning an array element may be of any type.

They are also **dynamic** meaning they can grow and shrink as needed. There is no need to declare a fixed size of the arrau and also no need to reallocate memory when the array size changes.

They may also be **sparse** meaning the elements don't need to have contiguous indexes. There may be gaps, and that's okay.

Arrays are special **objects**.

They are optimized to be accessed faster than objects meaning Array elements can be accessed fater than object properties.

JavaScript strings behave like an array of characters.

## Ways to create an array.

- Array literals
- The ... spread operator
- The Array() constructor
- The Array.from() method
- The Array.of() method

### Array literals.

This is the simplest and most efficient way of creating an array. It is simply a coma-separated list of array elements within square brackets.

```js
const arr = ['a', 'b', 'c'];
```

If an array literal contains multiple commas in a row with no value between them, the array is **sparse**.

```js
const arr = [1, , , 2, 3, 4];

console.log(arr.indexOf(1)); // Element 1 is index 0.
console.log(arr.indexOf(2)); // Element 2 is index 3.
// There is no index 1 and 2 in this array.
```

### The ... Spread operator

The three dots "spread" an existing array so that its elements become elements within a new array literal.

```js
const arr = ['a', 'b', 'c'];
const arr2 = [...arr, 1, 2, 3];

console.log(arr2); // => [ 'a', 'b', 'c', 1, 2, 3 ]
```

The spread operator can also create a shallow copy of an existing array.

```js
const arr = ['a', 'b', 'c'];
const arr2 = [...arr];
console.log(arr2 === arr); // => true
```

Modifying an array doesn't affect the original. It is non-destructive.

The spread operator works on any iterable object.

```js
const digits = [...'12345'];
console.log(digits); // => ['1', '2', '3', '4', '5']
```

### The Array() constructor

The Array() constructor can be invoked in three ways:

- Call it with no arguments:

```js
const arr = new Array(); // => []
// Returns an empty array
```

- Call it with a single numeric argument. The argument specifies the length.

```js
const arr = new Array(5); // => [, , , , ]
// Returns an array of 5 empty elements
```

This method is used when you know how many elements to preallocate to the array. No values are stored in this array when invoked.

- Explicitly specify two or more array elements od a single **non-numeric** element for the array.
  Each element is assigned to the array in the same order as the arguments.

```js
const arr = new Array('a', 'b', 'c'); // => ['a', 'b', 'c']
const arr2 = new Array(1, 2, 4, 'hello'); // => [1, 2, 3, 'hello'];
```

### Array.of()

Because the Array() constructor cannot be invoked using a single numeric element (**because it treats it as the length of an array**), in comes Array.of()

```js
// Using an Array() constructor:
const numbers = new Array(5); // => [ , , , ,  ]

// Using Array.of() instead:
const numbers = Array.of(5); // => [5]
```

Array.of() can be used with any other data types.

```js
const arr = Array.of(true, false, 'hello', 3.14);
// => [true, false, 'hello', 3.14]
```

### Array.from()

It expects any iterable as its first argument.

```js
const js = Array.from('JavaScript');
// => [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
```

It can also work as a spread operator.

```js
const arr = Array.from('abc');
const arr2 = Array.from(arr);
console.log(arr2); // => ['a', 'b', 'c']
```

#### Array indexes vs Object property name:

All indexes ae property names.
But only property names that are integers are indexes. A property name that is not an integer can never be an index because indexes are numeric.

#### Array length in summary:

An array will never have an element whose index is greater than or equal to the array length.
If you assign a value to an array element whose index **i** is greater than or equal to the array length, the array's length is set to **i + 1**

##### Using Array.length to manipulate arrays:

```js
const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.length); // => 7

nums.length = 3;
console.log(nums); // => [1, 2, 3]
// Destructively truncates the array to the specified length.

nums.length = 10;
console.log(nums); // => [1, 2, 3, , , , , , , ]
// Adds sparse areas to the tail end of the array.

nums.length = 0;
console.log(nums); // => []
// Deletes everything.
```

## Adding and Deleting array elements.

Consider this empty array:

```js
const arr = [];
```

#### Array.push()

This method adds one or more elements to the end of an array.

```js
const arr = [];
arr.push('a', 'b', 'c');
console.log(arr); // => ['a', 'b', 'c']
```

#### Array.unshift()

This method adds one or more elements to the beginning of an array.

```js
const arr = ['a', 'b', 'c'];
arr.unshift('d', 'e');
console.log(arr); // => ['d', 'e', 'a', 'b', 'c']
```

This shifts the existing array elements to higher indexes.

#### Array.pop()

This method removes the last element from an array and returns that element.

```js
const arr = ['a', 'b', 'c'];
const popped = arr.pop();
console.log(arr); // => ['a', 'b']
console.log(popped); // => 'c'
```

#### Array.shift()

This method removes the first element from an array and returns that element.

```js
const arr = ['a', 'b', 'c'];
const shifted = arr.shift();
console.log(arr); // => ['b', 'c']
console.log(shifted); // => 'a'
```

##### **NOTE:**

You can delete an element in array using the `delete` operator.

```js
const tens = [10, 20, 30, 40];
delete tens[2];
console.log(tens); // => [10, 20, , 40]
```

Using the `delete` operator does not affect the length of the array because it does not shift the elements of the array with higher indexes to fill the gap.

When used, that array becomes sparse.

## Iterating Arrays

The easiest way to iterate arrays is using a for/of loop.
It has no special behavior for sparse arrays and simply returns `undefined` for any elements that don't exist.

```js
const arr = ['a', 'b', 'c'];
for (let item of arr) {
	console.log(item);
}
// => 'a'
// => 'b'
// => 'c'
```

Another way would be to use the `forEach()` method which offers a functional approach.

```js
const arr = ['a', 'b', 'c'];
arr.forEach((item) => {
	console.log(item);
});
// => 'a'
// => 'b'
// => 'c'
```

`forEach()` iterates the array in order and passes the array index to the function as a second arguent.
It is also unaware of sparse arrays and does not invoke the function on nonexistent elements.

```js
const arr = ['a', , 'c'];
arr.forEach((item, index) => {
	console.log(item, index);
});
// => 'a' 0
// => 'c' 2
```

Finally, we could use the good old for loop to iterate arrays.

```js
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
// => 'a'
// => 'b'
// => 'c'
```
