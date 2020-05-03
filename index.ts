interface Person {
  // 只读，不可修改
  readonly firstName: string;
  lastName?: string;

  print?(): void;
}

let person: Person = {
  firstName: "marsliang",
  // lastName: "lyoo",
};

person.firstName = "lyoo";

class Programmer implements Person {
  firstName: string;
}

const programmer: Person = new Programmer();
programmer.firstName = "mars";

// const sayName = (o: Person) => {
//   console.log(o.firstName);
// };

// sayName(person);

// sayName(programmer);

// 类型断言
// sayName({ firstName: "a", lastName: "b", age: 18 } as Person);
