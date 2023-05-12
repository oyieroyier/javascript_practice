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
function people(name) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(name);
    console.log(rest);
    return rest.forEach(function (e) { return console.log("Hello ".concat(e)); });
}
people('Kimathi', 'Bob', 'Ogada', 'Chemweno');
function add(a, b) {
    console.log((a[1] + a[0]) * (b[1] + b[0]));
}
add([1, 2], [3, 4]);
function add2(_a, _b) {
    var a = _a[0], b = _a[1];
    var c = _b[0], d = _b[1];
    console.log((a + b) * (c + d));
}
add2([1, 2], [3, 4]);
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
function areaOfACircle(pi, radius) {
    return pi * square(radius);
}
console.log(areaOfACircle(22 / 7, 7));
uniqueCounter.counter = 0;
function uniqueCounter() {
    return uniqueCounter.counter++;
}
console.log(uniqueCounter());
console.log(uniqueCounter());
console.log(uniqueCounter());
console.log(uniqueCounter());
var scope = 'global scope';
function checkScope() {
    var scope = 'local scope';
    function f() {
        return scope;
    }
    return f();
}
console.log(checkScope());
function constfunc(v) {
    return function () { return v; };
}
// console.log(constfunc(5)());
var funcs = [];
for (var i = 0; i < 10; i++)
    funcs[i] = constfunc(i);
console.log(funcs);
console.log(people.length);
function foo(a, b, c, d, e) {
    // ...
}
console.log(foo.name); // => foo
console.log(foo.prototype); // => foo
var object = {
    firstName: 'Bob',
};
function wazzup(person) {
    console.log("Hello ".concat(person));
}
wazzup.call(obj, object.firstName);
var mtu = {
    name: 'John',
    yearOfBirth: 2000,
    occupation: 'Developer',
};
function greet(name, occupation) {
    return "Hello, my name is ".concat(name, " and I'm a ").concat(occupation, ".");
}
var salaamz = greet.call(person, 'John', 'Developer');
console.log(salaamz);
// => Hello, my name is John and I'm a Developer.
function subtract(currentYear) {
    return "You are now ".concat(currentYear - this.yearOfBirth, " years old.");
}
var currentAge = subtract.bind(mtu);
console.log(currentAge(2023));
