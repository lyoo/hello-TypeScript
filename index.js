var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    // 读取 name
    Person.prototype.getName = function () {
        return this._name;
    };
    // 设置 name
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        // Accessors are only available when targeting ECMAScript 5 and higher.
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person("lyoo", 18);
// 输出 name
console.log(p.name);
// console.log(p.getName());
// 修改 name
p.name = "marsliang";
// p.setName("marsliang");
console.log(p);
