var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var student;
var teacher;
var softwareEngineer;
function Ranges(from, to) {
    this.from = from;
    this.to = to;
}
Ranges.prototype = (_a = {
        includes: function (x) {
            return this.from <= x && x <= this.to;
        }
    },
    _a[Symbol.iterator] = function () {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = Math.ceil(this.from);
                    _a.label = 1;
                case 1:
                    if (!(x <= this.to)) return [3 /*break*/, 4];
                    return [4 /*yield*/, x];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    x++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    },
    _a.toString = function () {
        return "(".concat(this.from, "...").concat(this.to, ")");
    },
    _a);
var r = new Ranges(1, 5);
console.log(r);
console.log(r.includes(2));
console.log(r.toString());
console.log(__spreadArray([], r, true));
function Person(name, age, programmingLanguage) {
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
        var result = 65 - this.age;
        return "You have ".concat(result, " years left before retirement.");
    },
    languageChoice: function () {
        return this.programmingLanguage === 'JavaScript'
            ? "You have beautiful taste, ".concat(this.name, "!")
            : "Do better, ".concat(this.name, "!");
    },
};
var bob = new Person('Bob', 36, 'JavaScript');
var mike = new Person('Bob', 36, 'JavaScript');
console.log(bob);
console.log(bob.youthFundQualification());
console.log(bob.yearsToRetirement());
console.log(bob.languageChoice());
var somebody = {
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
function Strange() { }
Strange.prototype = Person.prototype;
console.log(bob instanceof Strange);
console.log(mike instanceof Strange);
console.log(bob instanceof Person);
bob.youthFundQualification.isPrototypeOf();
var Mtu = /** @class */ (function () {
    function Mtu(name, age, programmingLanguage) {
        this.name = name;
        this.age = age;
        this.programmingLanguage = programmingLanguage;
        this.name = name;
        this.age = age;
        this.programmingLanguage = programmingLanguage;
        Mtu.instanceCount++;
    }
    Mtu.getInstanceCount = function () {
        return Mtu.instanceCount;
    };
    Mtu.prototype.youthFundQualification = function () {
        return this.age > 35
            ? "Sorry, you don't qualify for the Youth Fund"
            : 'You qualify for the Youth Fund';
    };
    Mtu.prototype.yearsToRetirement = function () {
        var result = 65 - this.age;
        return "You have ".concat(result, " years left before retirement.");
    };
    Mtu.prototype.languageChoice = function () {
        return this.programmingLanguage === 'JavaScript'
            ? "You have beautiful taste, ".concat(this.name, "!")
            : "Do better, ".concat(this.name, "!");
    };
    Mtu.instanceCount = 0;
    return Mtu;
}());
var sammie = new Mtu('Sammie', 22, 'Music');
console.log(sammie.yearsToRetirement());
var Humans = /** @class */ (function () {
    function Humans(name, age, dateOfBirth, residence, canThink, canSee, canWalk) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.residence = residence;
        this.canThink = canThink;
        this.canSee = canSee;
        this.canWalk = canWalk;
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.residence = residence;
        this.canThink = canThink;
        this.canSee = canSee;
        this.canWalk = canWalk;
    }
    return Humans;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(nameOfSchool, subjectsTaken, currentGrade, enrollmentYear, studentNumber, name, age, dateOfBirth, residence, canThink, canSee, canWalk) {
        var _this = _super.call(this, name, age, dateOfBirth, residence, canThink, canSee, canWalk) || this;
        _this.nameOfSchool = nameOfSchool;
        _this.subjectsTaken = subjectsTaken;
        _this.currentGrade = currentGrade;
        _this.enrollmentYear = enrollmentYear;
        _this.studentNumber = studentNumber;
        _this.nameOfSchool = nameOfSchool;
        _this.subjectsTaken = subjectsTaken;
        _this.currentGrade = currentGrade;
        _this.enrollmentYear = enrollmentYear;
        _this.studentNumber = studentNumber;
        return _this;
    }
    return Student;
}(Humans));
var you = new Mtu('asa', 22, 'sas');
console.log(Person.prototype.youthFundQualification());
console.log(Mtu.getInstanceCount());
var aStudent = new Student('Morning School', 'Software Engineering', 'Phase 4', 2022, 'A123BB', 'Bob Oyier', 24, '12/22/2000', 'Washington', true, true, true);
console.log(aStudent);
