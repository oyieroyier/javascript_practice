# ASYNCHRONOUS JAVASCRIPT

## Promises

A Promise is an object that represents the result/completion stage of an asynchronous computation/operation.
We use it to figure out if an async action ha been completed or not and what is the result of that operation.

The value of the Promise may or may not be ready and the Promise API is intentionally vague about this.

There is no way to get the value of a Promise except to ask it to run a callback function when the value is ready.

A Promise can be in 3 potential states:

1. A Pending State. It is the initial state a Promise is ALWAYS in. Every Promise starts in the pending state. From there it can go into one of the two below states:
2. Fulfilled State: if the async action was successfully completed.
3. Rejected State: If the action was not successfully completed and there was an error.

### Syntax:

We use a `Promise` constructor to define a new Promise. The `Promise` constructor takes a function as an argument:

```js
let promise = new Promise(function (resolve, reject) {
	// doSomething here
});
```

The two arguments to the `Promise` constructor are also functions/methods themselves.
If the Promise is successful, the `resolve` method is run.
If the Promise in unsuccessful for whatever reason, the `reject` method is run instead.

##### Handling errors with Promises

Async code that involves networking will typically lead to errors and robust code has to be written that handles.
