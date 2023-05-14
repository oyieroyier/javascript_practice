# CLASSES

Objects do not exist in a vacuum. They always tend to borrow some properties from other objects.
Think of humans in general. We have some general features such as a name, age, date of birth, residence, the ability to think, see, walk etc.
Now, think of a student. As a human being, a student ordinarily has all these features of a human being listed above, alongside some student-specific ones; such as the name of the school they go to, the subjects they do, their crrent grade, their enrollment year, their student number etc.

When defining a `student` object, we could write all these properties they have as follows:

```ts
let student: {
	name;
	age;
	dateOfBirth;
	residence;
	canThink;
	canSee;
	canWalk;
	nameOfSchool;
	subjectsTaken;
	currentGrade;
	enrollmentYear;
	studentNumber;
};
```

Now, assume we have a teacher who, being a human being too, shares all the attributes of a human being listed above alongside teacher-specific ones such as place of work, subjects taught, previous place of work, employee number, specialization.

We could again define a `teacher` object as follows:

```ts
let teacher: {
	name;
	age;
	dateOfBirth;
	residence;
	canThink;
	canSee;
	canWalk;
	placeOfWork;
	subjectsTaught;
	previousEmployer;
	employeeNumber;
	specialization;
};
```

We also have a Software Engineer who on top of the human attributes has developer-specific ones such as their preferred programming languages, preferred operating system and preferred text editor.

We could again define a `softwareEngineer` object this way:

```ts
let softwareEngineer: {
	name;
	age;
	dateOfBirth;
	residence;
	canThink;
	canSee;
	canWalk;
	preferredProgrammingLanguages;
	preferredOperatingSystem;
	preferredEditor;
};
```

You may have noticed that each time we defined the objects, we repeated all the human attributes `name`, `age`, `dateOfBirth`, `residence`, `canThink`, `canSee`, `canWalk` for each of the objects.
Repetition in coding, especially repeating the same 7 lines thrice, is not good practice.

What if we had one object called `humans` whose attributes the `student`, `teacher` and `softwareEngineer` can all borrow so we keep our code concise?

```ts
let Humans: {
	name;
	age;
	dateOfBirth;
	residence;
	canThink;
	canSee;
	canWalk;
};
```

So that any time we declare the above objects we simply say:

- `student` object

```ts
let student: {
	// Take all attributes from the `Humans` object and add these ones:
	nameOfSchool;
	subjectsTaken;
	currentGrade;
	enrollmentYear;
	studentNumber;
};
```

- `teacher` object

```ts
let teacher: {
	// Take all attributes from the `Humans` object and add these ones:
	placeOfWork;
	subjectsTaught;
	previousEmployer;
	employeeNumber;
	specialization;
};
```

- `softwareEngineer` object

```ts
let softwareEngineer: {
	// Take all attributes from the `Humans` object and add these ones:
	preferredProgrammingLanguages;
	preferredOperatingSystem;
	preferredEditor;
};
```

That is the exact concept of `classes` and inheritance.

## What is a class?

In JavaScript, a class is a set of objects that inherit properties from the same prototype object.

### Classes and Constructors

A constructor is a function designed for the initialization of newly-created objects. They are invoked using the `new` keyword and automatically create the new object.

The `prototype` property of the constructor is used as the prototype of the new object.
All objects created with the same constructor function inherit from the same object and therefore are members of the same class.

Here's an example of a constructor function:

```ts
function Person(name: string, age: number, programmingLanguage: string) {
	this.name = name;
	this.age = age;
	this.programmingLanguage = programmingLanguage;
}
```

First note, because constructor functions initiate classes and by convention classes begin with capital letters, the function name should also begin with a capital letter.

We could add other functionalities to this function by expanding its prototype object. Say, as follows:

```ts
Person.prototype = {
	youthFundQualification: function () {
		return this.age > 35
			? "Sorry, you don't qualify for the Youth Fund"
			: 'You qualify for the Youth Fund';
	},

	yearsToRetirement: function () {
		let result = 65 - this.age;
		return `You have ${result} years left before retirement.`;
	},

	languageChoice: function () {
		return this.programmingLanguage === 'JavaScript'
			? `You have beautiful taste, ${this.name}!`
			: `Do better, ${this.name}!`;
	},
};
```

Now when someone initializes an object using this constructor function:

- The `youthFundQualification()` method can use their age to tell them whether the qualify for the Youth Funding.
- The `yearsToRetirement()` method also uses their age to tell them how long they have left to work in public service before retirement.
- The `languageChoice()` method uses their preferred programming language to tell them if they have a good taste or they should make better choices in life 😂😂.

Now, we can reuse this constructor function on as many instances as we like without repeating code.

Initializing 3 people's objects is as simple as:

```ts
const walter = new Person('Walter', 36, 'Python');
const bob = new Person('Bob', 22, 'JavaScript');
const wendy = new Person('Wendy', 52, 'Ruby');
```

When you log teach of these person's object you will get:

```ts
console.log(walter); // => { name: 'Walter', age: 36, programmingLanguage: 'Python' }
console.log(bob); // => { name: 'Bob', age: 22, programmingLanguage: 'JavaScript' }
console.log(wendy); // => { name: 'Wendy', age: 52, programmingLanguage: 'Ruby' }
```

You don't see the additional functionality we added to the `Person` constructor function prototype object, but they have been inherited by these object instances and can be accessed by simply calling them.

- `youthFundQuaification()`

```ts
console.log(walter.youthFundQualification());
// => Sorry, you don't qualify for the Youth Fund
console.log(bob.youthFundQualification());
// => You qualify for the Youth Fund
```

- `yearsToRetirement()`

```ts
console.log(wendy.yearsToRetirement());
// => You have 13 years left before retirement.
console.log(walter.yearsToRetirement());
// => You have 29 years left before retirement.
```

- `languageChoice()`

```ts
console.log(bob.languageChoice());
// => You have beautiful taste, Bob!
console.log(wendy.languageChoice());
// => Do better, Wendy!
```

**NOTE**:

- **Remember, if the property is a method, don't forget to invoke it.**
- **Also, the `Function.prototype` convention is mandatory, if you want to add extra functionality to the constructor function's prototype that will be inherited by the class instances. An invocation of the `Person()` constructor automatically uses `Person.prototype` as the prototype of the new `Person` object.**

We do not use arrow function syntax for constructor functions or the pototype methods because arrow functions do not have a prototype property and so can't be used as constructors.

Also, arrow functions inherit the `this` keyword from the context in which they were defined rather than setting it in the object in wich they were invoked. This makes them useless for method invocation.

#### Constructors, Class Identity and `instanceof`

As we saw, objects are instances of the same class ONLY IF they inherit from the same prototype.

It is not the constructor function which initializes the state of the new object that determines inheritance per se rather the prototype.

Two constructor functions may have the same prototype properties pointing to the same object.

Let me demonstrate that the `Person()` constructor we previously defined:

```ts
const SomebodyElse() {} // An empty function.

SomebodyElse.prototype = Person.prototype;
// Assigning the prototype methods of Person to SomebodyElse

// SomebodyElse and Person are two different constructor functions but they now both have the same properties.
```

Though constructors themselves are not as fundamental as prototypes, they are the face of a class. A constructor's name will be the class name.

We say a `Person()` constructor creates `Person` objects.

If we want to know whether an object is an instance of a specific constructor, we use the `instanceof` operator.

The `instanceof` operator lets us test whether an object is an instance of a constructor function.
The syntax is:

```ts
object instanceof constructor;
```

The lefthand operand should be the object being tested and the righthand operand should be the conttructor function that names the class.

The `instanceof` operator returns a boolean value.

For example, demonstrating further using the previous examples:

```ts
console.log(bob instanceof Person); // => true
// bob inherits from Person.prototype
console.log(wendy instanceof Person);
// wendy inherits from Person.prototype
// => true
```

The inheritance does not need to be direct, though.

Using the previous examples, we can check if `bob` is also an instance of `SomebodyElse()` even though it was initialized by `Person()` and not `SomebodyElse()`.

```ts
console.log(bob instanceof SomebodyElse); // => true
// even though bob is created by Person.prototype
// => true
```

### Classes with the `class` keyword

ES6 finally gave JavaScript its own syntax for writing classes with the introduction of the `class` keyword.

Let' rewrite the previous `Person()` costructor function using the `class` keyword:

```ts
class Mtu {
	constructor(
		public name: string,
		public age: number,
		public programmingLanguage: string
	) {
		this.name = name;
		this.age = age;
		this.programmingLanguage = programmingLanguage;
	}

	youthFundQualification() {
		return this.age > 35
			? "Sorry, you don't qualify for the Youth Fund"
			: 'You qualify for the Youth Fund';
	}

	yearsToRetirement() {
		let result = 65 - this.age;
		return `You have ${result} years left before retirement.`;
	}

	languageChoice() {
		return this.programmingLanguage === 'JavaScript'
			? `You have beautiful taste, ${this.name}!`
			: `Do better, ${this.name}!`;
	}
}
```

Note that instead of defining the method properties of the prototype object separately like we did before, we bundle it all inside the class declaration. Neat!

This declaration does not alter the underlying functioning of constructor invocations. It is just syntactic sugar.

Note the following about the `class` syntax:

- Declared with the `class` keyword followed by:
  - the name of the class
  - the body of the class in curly braces.
- The class body includes method definitions using the object literal shorthand (i.e no need for the word `function` keyword before declaring a function.)
- Unlike object literals, classes do not use commas to separate methods from one another. Classes do not support key-value pairs.
- The keyword `constructor` is used do define the constructor function for the class.
- Sometimes you need a class that doesn't require initialization. Just ignore the `constructor` and its body in that case.

If you want to define a class that inherits from another class, you can use the `extends` keyword with the `class` keyword.

At the beginning of this chapter, we talked of `Students` object that has all the characteristics of a `Humans` object.
Let us try to implement it.

We first start with the `Humans` class.

```ts
class Humans {
	constructor(
		public name: string,
		public age: number,
		public dateOfBirth: string,
		public residence: string,
		public canThink: boolean,
		public canSee: boolean,
		public canWalk: boolean
	) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
		this.residence = residence;
		this.canThink = canThink;
		this.canSee = canSee;
		this.canWalk = canWalk;
	}
}
```

Then a `Student` class extends it as follows:

```ts
class Student extends Humans {
	constructor(
		public nameOfSchool: string,
		public subjectsTaken: string,
		public currentGrade: string,
		public enrollmentYear: number,
		public studentNumber: string,
		name: string,
		age: number,
		dateOfBirth: string,
		residence: string,
		canThink: boolean,
		canSee: boolean,
		canWalk: boolean
	) {
		super(name, age, dateOfBirth, residence, canThink, canSee, canWalk);
		this.nameOfSchool = nameOfSchool;
		this.subjectsTaken = subjectsTaken;
		this.currentGrade = currentGrade;
		this.enrollmentYear = enrollmentYear;
		this.studentNumber = studentNumber;
	}
}
```

Inasmuch as this is TypeScript notation, you can see that we don't need to declare `public` keyword before the `name`, `age`, `dateOfBirth`, `residence`, `canThink`, `canSee` and `canWalk` properties because our class knows they have already been defined in the class it is inheriting from.

##### Final notes on this introduction to the `class` keyword:

- All code within a `class` declaration is implicitly in strict mode.
- Unlike function declarations, class declarations are not hoisted. You cannot instantiate a class before you declare it.