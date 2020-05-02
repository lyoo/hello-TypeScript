class Person {
  // 定义2个数据内容
  // private firstName: string;
  // private lastName: string;
  protected firstName: string;
  protected lastName: string;

  constructor() {
    this.firstName = "marsliang";
    this.lastName = "lyoo";
  }

  public greet() {
    console.log("hi");
  }

  private sayHi() {
    console.log("private say hi");
  }

  public callSayHi() {
    this.sayHi();
    console.log("******");
  }

  protected getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public othergreet() {
    this.greet();
    console.log("******");
  }
}

// let aPerson = new Person();
// console.log(aPerson.firstName);
// aPerson.setFirstName("marsliang");
// aPerson.getFirstName();
// aPerson.callSayHi();

class Programmer extends Person {
  public greet() {
    console.log("hello world");
  }

  public greetLikeNormalPeople() {
    super.greet();
  }

  // public getFullName(): string {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  getSuperFirstName(): string {
    return this.getFirstName();
  }

  getSuperLastName(): string {
    return this.lastName;
  }

  // getFirstName 和 getLastName 继承而来
  // public getFullName(): string {
  //   return `${this.getFirstName()} ${this.getLastName()}`;
  // }

  public getFullName(): string {
    return `${this.getSuperFirstName()} ${this.getSuperLastName()}`;
  }
}

let aProgrammer = new Programmer();
// console.log(aProgrammer.firstName);
// aProgrammer.getFirstName();
// console.log(aProgrammer.getFullName());
console.log(aProgrammer.getSuperFirstName());
