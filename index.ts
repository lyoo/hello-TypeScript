// x 代表可以是任意类型，比如 string number 等
let x: any = "hi marsliang";
// x 可以是任意类型，编译器可能不能明确知道 x 是哪种类型
// <string> 表示把 x 断言成字符串类型，就是告诉编译器要把 x 当成字符串，这样
// 就可以调用 substring 函数，因为字符串才有这个函数
let s = (<string>x).substring(0, 3);
// let s = <number>x;
console.log(typeof s);

// 编辑器可能不知道明确的类型，因为可以是二者之一
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

// 会报错
// function toBoolean(something: string | number): boolean {
//   return <boolean>something;
// }

interface Person {
  name: string;
  age: number;
  firstName: string;
}

// 另一种断言的方式 as
// 更好的明确类型和类型里面的结构
let person = {} as Person;
person.name = "marsliang";
person.age = 18;
person.firstName = "xxx";

// 一种写法
// react <div></div>
let person1 = <Person>{
  name: "xxx",
};
