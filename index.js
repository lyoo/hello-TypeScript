var Person = /** @class */ (function () {
    // static all() {
    //  // Person 对应数据库的一个表模型
    //  // 可以列出 persons 表的所有记录
    //  // new 出来的可能是一条记录，要找到所有记录，可能要通过静态方法
    //  return Person.select().all();
    // }
    function Person(firstName, lastName) {
        // 只读属性 不能修改
        this.name = "marsliang";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 静态方法
    Person.getStaticAge = function () {
        return "my age is " + Person.age;
    };
    Person.prototype.getAge = function () {
        return "my age is " + Person.age;
    };
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
    // 静态属性
    Person.age = 10;
    return Person;
}());
// class Programmer extends Person {
//   constructor(firstName: string, lastName: string) {
//     // 调用父类的构造函数的方法，要传入参数
//     super(firstName, lastName);
//     console.log("Programmer constructor");
//   }
//   public static getSuperAge() {
//     return `super age is ${Programmer.age}`;
//   }
//   public greet() {
//     console.log("hello world");
//   }
//   public greetLikeNormalPeople() {
//     super.greet();
//   }
//   // public getFullName(): string {
//   //   return `${this.firstName} ${this.lastName}`;
//   // }
//   getSuperFirstName(): string {
//     return this.getFirstName();
//   }
//   getSuperLastName(): string {
//     return this.lastName;
//   }
//   // getFirstName 和 getLastName 继承而来
//   // public getFullName(): string {
//   //   return `${this.getFirstName()} ${this.getLastName()}`;
//   // }
//   public getFullName(): string {
//     return `${this.getSuperFirstName()} ${this.getSuperLastName()}`;
//   }
// }
var aPerson = new Person("marsliang", "lyoo");
aPerson.name = "111";
console.log(aPerson.name);
// let aProgrammer = new Programmer("marsliang", "lyoo");
// console.log(aPerson.getAge());
// console.log(Person.getStaticAge());
// console.log(Programmer.getSuperAge());
