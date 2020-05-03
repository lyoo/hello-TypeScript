class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // 读取 name
  getName(): string {
    return this._name;
  }

  // 设置 name
  setName(name: string): void {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  // Accessors are only available when targeting ECMAScript 5 and higher.
  set name(name: string) {
    this._name = name;
  }
}

let p: Person = new Person("lyoo", 18);
// 输出 name
console.log(p.name);
// console.log(p.getName());

// 修改 name
p.name = "marsliang";
// p.setName("marsliang");
console.log(p);
