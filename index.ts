class Person {
  // 定义2个数据内容
  protected firstName: string;
  protected lastName: string;

  protected constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
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

class Programmer extends Person {
  public greet() {
    console.log("hello world");
  }

  constructor(firstName: string, lastName: string) {
    // 调用父类的构造函数的方法，要传入参数
    super(firstName, lastName);
    console.log("Programmer constructor");
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

// let aPerson = new Person("marsliang", "lyoo");
let aProgrammer = new Programmer("marsliang", "lyoo");
