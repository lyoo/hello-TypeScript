class Person {
  // 定义2个数据内容
  protected firstName: string;
  protected lastName: string;

  // 静态属性
  protected static age: number = 10;

  // 静态方法
  public static getStaticAge() {
    return `my age is ${Person.age}`;
  }

  // static all() {
  //  // Person 对应数据库的一个表模型
  //  // 可以列出 persons 表的所有记录
  //  // new 出来的可能是一条记录，要找到所有记录，可能要通过静态方法
  //  return Person.select().all();
  // }

  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getAge() {
    return `my age is ${Person.age}`;
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
  constructor(firstName: string, lastName: string) {
    // 调用父类的构造函数的方法，要传入参数
    super(firstName, lastName);
    console.log("Programmer constructor");
  }

  public static getSuperAge() {
    return `super age is ${Programmer.age}`;
  }

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

// let aPerson = new Person("marsliang", "lyoo");
let aProgrammer = new Programmer("marsliang", "lyoo");
// console.log(aPerson.getAge());
// console.log(Person.getStaticAge());
console.log(Programmer.getSuperAge());
