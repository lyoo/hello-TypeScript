interface Person {
  name: string;
}

interface Employee {
  age: number;
}

interface Programmer extends Person {
  age: number;
}

let p: Programmer = {
  name: "marsliang",
  age: 18,
};

// 类不能继承多个类，也就是说不能有多个父类
// 但是可以实现多个接口
// 每一个接口的属性和方法都要实现
class P implements Person, Employee {
  name: string;
  age: number;
}

let p1: P = {
  name: "lyoo",
  age: 18,
};

let p2: Person = p1;

let p3: Employee = p1;
