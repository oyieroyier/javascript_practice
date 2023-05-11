var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [1, , , 2, 3, 4];
console.log(arr.indexOf(2));
var letters = ['a', 'b', 'c'];
var mixed = __spreadArray(__spreadArray([], letters, true), [1, 2, 3], false);
console.log(mixed);
var digits = __spreadArray([], '123456', true);
console.log(digits);
var numbers = new Array(5);
console.log(numbers);
var js = Array.from('JavaScript');
console.log(js);
var greeting = Array.from('Hello');
var salamu = Array.from(greeting);
console.log(salamu);
var nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.length);
nums.length = 3;
console.log(nums);
nums.length = 10;
console.log(nums);
var tens = [10, 20, 30, 40];
delete tens[2];
console.log(tens);
var yo = ['a', , 'c'];
yo.forEach(function (item, index) {
    console.log(item, index);
});
