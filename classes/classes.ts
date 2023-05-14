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
const mike = new Person('Bob', 36, 'JavaScript');

console.log(bob);

console.log(bob.youthFundQualification());
console.log(bob.yearsToRetirement());
console.log(bob.languageChoice());

const somebody = {
	name: 'Bob',
	age: 36,
	programmingLanguage: 'JavaScript',
	youthFundQualification: function () {
		return this.age > 35
			? "Sorry, you don't qualify for the Youth Fund"
			: 'You qualify for the Youth Fund';
	},
};

console.log(somebody.youthFundQualification());

console.log(somebody instanceof Person);

function Strange() {}
Strange.prototype = Person.prototype;

console.log(bob instanceof Strange);
console.log(mike instanceof Strange);
console.log(bob instanceof Person);

bob.youthFundQualification.isPrototypeOf();

class Mtu {
	constructor(
		public name: string,
		public age: number,
		public programmingLanguage: string
	) {
		this.name = name;
		this.age = age;
		this.programmingLanguage = programmingLanguage;

		Mtu.instanceCount++;
	}
	static instanceCount = 0;

	static getInstanceCount() {
		return Mtu.instanceCount;
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

const sammie = new Mtu('Sammie', 22, 'Music');
console.log(sammie.yearsToRetirement());

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

const you = new Mtu('asa', 22, 'sas');

console.log(Person.prototype.youthFundQualification());
console.log(Mtu.getInstanceCount());


