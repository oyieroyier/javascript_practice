let student: {
	name: string;
	age: number;
	dateOfBirth: number;
	residence: string;
	canThink: boolean;
	canSee: boolean;
	canWalk: boolean;
	nameOfSchool: string;
	subjectsTaken: string;
	currentGrade: string;
	enrollmentYear: number;
	studentNumber: string;
};

let teacher: {
	name: string;
	age: number;
	dateOfBirth: number;
	residence: string;
	canThink: boolean;
	canSee: boolean;
	canWalk: boolean;
	placeOfWork: string;
	subjectsTaught: string;
	previousEmployer: string;
	employeeNumber: string;
	specialization: string;
};

let softwareEngineer: {
	name: string;
	age: number;
	dateOfBirth: number;
	residence: string;
	canThink: boolean;
	canSee: boolean;
	canWalk: boolean;
	preferredProgrammingLanguages: string;
	preferredOperatingSystem: string;
	preferredEditor: string;
};

function Ranges(from: number, to: number) {
	this.from = from;
	this.to = to;
}

Ranges.prototype = {
	includes: function (x: number) {
		return this.from <= x && x <= this.to;
	},

	[Symbol.iterator]: function* () {
		for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
	},

	toString: function () {
		return `(${this.from}...${this.to})`;
	},
};

let r = new Ranges(1, 5);

console.log(r);

console.log(r.includes(2));

console.log(r.toString());

console.log([...r]);

function Person(name: string, age: number, programmingLanguage: string) {
	this.name = name;
	this.age = age;
	this.programmingLanguage = programmingLanguage;
}

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

const bob = new Person('Bob', 36, 'JavaScript');

console.log(bob);

console.log(bob.youthFundQualification());
console.log(bob.yearsToRetirement());
console.log(bob.languageChoice());