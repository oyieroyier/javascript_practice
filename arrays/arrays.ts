const arr: any[] = [1, , , 2, 3, 4];

console.log(arr.indexOf(2));

const letters = ['a', 'b', 'c'];
const mixed = [...letters, 1, 2, 3];

console.log(mixed);

const digits = [...'123456'];
console.log(digits);

const numbers = new Array(5);
console.log(numbers);

const js = Array.from('JavaScript');
console.log(js);

const greeting = Array.from('Hello');
const salamu = Array.from(greeting);
console.log(salamu);

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.length);
nums.length = 3;
console.log(nums);
nums.length = 10;
console.log(nums);

const tens = [10, 20, 30, 40];
delete tens[2]
console.log(tens);

const yo = ['a', , 'c'];
yo.forEach((item, index) => {
	console.log(item, index);
});
