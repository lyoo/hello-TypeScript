class Person {
  // 定义2个数据内容
  firstName: string;
  lastName: string;

  greet() {
    console.log("hi");
  }

  othergreet() {
    this.greet();
    console.log("******");
  }
}

class Programmer extends Person {
  greet() {
    console.log("hello world");
  }

  greetLikeNormalPeople() {
    super.greet();
  }
}

let aProgrammer: Programmer = new Programmer();

// aProgrammer.greet();
aProgrammer.greetLikeNormalPeople();
aProgrammer.othergreet();
