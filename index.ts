class Person {
  // 定义2个数据内容
  private firstName: string;
  private lastName: string;

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

  getFirstName() {
    console.log(this.firstName);
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public othergreet() {
    this.greet();
    console.log("******");
  }
}

let aPerson = new Person();
// console.log(aPerson.firstName);
aPerson.setFirstName("marsliang");
aPerson.getFirstName();

aPerson.callSayHi();
