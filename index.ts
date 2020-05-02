interface Named {
  // 属性
  name: string;
}

// 只要传入参数o 有 name  属性
// o 可以是一个接口类型，这个接口类型要有 name 属性
// 定义 o 为接口类型, 可以传入一个对象
const sayName = (o: Named) => {
  console.log(o.name);
};

const person = {
  name: "lyoo",
  age: 18,
};

sayName(person);

// const bottle = {
//   name: "漂流瓶",
//   litres: 1,
// };

class Person {
  name: string;
}

let aPerson = new Person();
aPerson.name = "marsliang";

sayName(aPerson);

// sayName(bottle);
