interface Person {
  firstName: string;
  lastName?: string;

  print?(): void;
}

let person = {
  firstName: "marsliang",
  // lastName: "lyoo",
};

class Programmer implements Person {
  firstName: string;
}

const programmer = new Programmer();
programmer.firstName = "mars";

const sayName = (o: Person) => {
  console.log(o.firstName);
};

sayName(person);

sayName(programmer);

// 类型断言
sayName({ firstName: "a", lastName: "b", age: 18 } as Person);
