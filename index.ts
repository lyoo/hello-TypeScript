// 不能实例化
abstract class Person {
  abstract name: string;

  // constructor(name: string) {
  //   this.name = name;
  // }

  display(): void {
    console.log("name: ", this.name);
  }

  // 抽象方法，没有方法体
  abstract find(string): Person;
}
// 非抽象类“Employee”不会实现继承自“Person”类的抽象成员“find”。
class Employee extends Person {
  name: string;
  empCode: number;

  constructor(name: string, code: number) {
    super();
    this.name = name;
    this.empCode = code;
  }

  // 必须实现抽象的方法
  find(name: string): Person {
    return new Employee(name, 1);
  }
}

let p: Person = new Employee("xxx", 12);
let p1: Person = p.find("lyoo");
console.log(p1);
