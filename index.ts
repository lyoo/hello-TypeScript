// class Person {
//   private _name: string;
//   private _age: number;

//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }

class Person {
  constructor(private _name: string, private _age: number) {}
}

let p: Person = new Person("lyoo", 18);
console.log("p: ", p);
