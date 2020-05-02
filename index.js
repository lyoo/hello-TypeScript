var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        console.log("hi");
    };
    Person.prototype.sayHi = function () {
        console.log("private say hi");
    };
    Person.prototype.callSayHi = function () {
        this.sayHi();
        console.log("******");
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.othergreet = function () {
        this.greet();
        console.log("******");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName) {
        var _this = 
        // 调用父类的构造函数的方法，要传入参数
        _super.call(this, firstName, lastName) || this;
        console.log("Programmer constructor");
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log("hello world");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    // public getFullName(): string {
    //   return `${this.firstName} ${this.lastName}`;
    // }
    Programmer.prototype.getSuperFirstName = function () {
        return this.getFirstName();
    };
    Programmer.prototype.getSuperLastName = function () {
        return this.lastName;
    };
    // getFirstName 和 getLastName 继承而来
    // public getFullName(): string {
    //   return `${this.getFirstName()} ${this.getLastName()}`;
    // }
    Programmer.prototype.getFullName = function () {
        return this.getSuperFirstName() + " " + this.getSuperLastName();
    };
    return Programmer;
}(Person));
// let aPerson = new Person("marsliang", "lyoo");
var aProgrammer = new Programmer("marsliang", "lyoo");
