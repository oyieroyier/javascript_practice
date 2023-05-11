var hello = 2;
var message = function (human) {
    console.log("Hello ".concat(human));
};
message('Bob');
// hello(2);
var wassup = function (student) {
    console.log("Wassup ".concat(student));
    return "Wassup ".concat(student);
};
var greeting = wassup('Kimathi');
console.log(greeting);
// console.log(hello('Mike'));
var sum;
sum = function (_a, _b) {
    var a = _a[0], b = _a[1];
    var c = _b[0], d = _b[1];
    console.log([a + d, b + c]);
    return [a + d, c + b];
};
sum([1, 6], [1, 2]);
function factorial(x) {
    if (x < 1) {
        return 1;
    }
    return x * factorial(x - 1);
}
console.log(factorial(4));
var person = {
    name: 'John',
    func: function (name) {
        return "Method invoked by ".concat(name, "!");
    },
};
console.log(person['func']('Bob'));
var obj = {
    m: function () {
        var self = this;
        console.log(this === self);
        f();
        function f() {
            console.log(this === obj);
            console.log(this === obj);
            // console.log(self === obj);
        }
    },
    n: function () {
        var _this = this;
        var self = this;
        console.log(this === self);
        var f = function () { return _this === obj; };
        console.log(f());
    },
};
obj.m();
obj.n();
var obj2 = {
    m: function () {
        var self = this;
        console.log(this === self);
        var f = function () {
            console.log(this === obj2);
            console.log(this === obj2);
            // console.log(self === obj2);
        }.bind(this);
        f();
    },
};
obj2.m();
var square;
square = function (x) {
    return x * x;
};
var s = square;
s(4);
square(4);
console.log(s(4));
console.log(square(4));
var o;
o = {
    square: function (x) {
        return x * x;
    },
};
var y = o.square(6);
console.log(y);
var arr = [1, 2, 3, 111, 433, 112, 421, 211];
console.log(arr.sort(function (num1, num2) {
    return num1 - num2;
}));
