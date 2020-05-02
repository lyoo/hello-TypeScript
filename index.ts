// 传过来的参数必须包含接口的属性和方法
interface Named {
  // 属性
  name: string;

  // 方法
  // 没有方法体
  // 具体的对象中实现方法体
  print(name: string): void;
}

// 只要传入参数o 有 name  属性
// o 可以是一个接口类型，这个接口类型要有 name 属性
// 定义 o 为接口类型, 可以传入一个对象
const sayName = (o: Named) => {
  console.log(o.name);
};

// 对象
const person = {
  name: "lyoo",
  age: 18,
  print: (name) => {
    console.log(name);
  },
};

sayName(person);

// const bottle = {
//   name: "漂流瓶",
//   litres: 1,
// };

class Person {
  name: string;

  print(name: string): void {
    console.log(name);
  }
}

let aPerson = new Person();
aPerson.name = "marsliang";

sayName(aPerson);

// sayName(bottle);
