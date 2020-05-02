var Person = /** @class */ (function () {
    function Person() {
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
        console.log(this.firstName);
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.othergreet = function () {
        this.greet();
        console.log("******");
    };
    return Person;
}());
var aPerson = new Person();
// console.log(aPerson.firstName);
aPerson.setFirstName("marsliang");
aPerson.getFirstName();
aPerson.callSayHi();
