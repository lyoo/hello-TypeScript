// 定义类型别名 type alias
// 以后就可以用 Name 类型 代替 string 类型
type Name = string;
// type Name = [string, number];

let myName: Name = "marsliang";
// let myName: Name = ["marsliang", 18];

// console.log(myName);
// 不能重复定义
type User = {
  name: string;
  age: number;
  print(): void;
};

// const user: User = {
//   name: "marsliang",
//   age: 27,
// };

// const user: { name: string; age: number } = {
//   name: "marsliang",
//   age: 18,
// };

const user: User = {
  name: "marsliang",
  age: 27,
  print: () => {
    console.log("xxx");
  },
};

console.log("user: ", user);

interface IUser {
  name: string;
  age: number;
}

interface IUser {
  email: string;
}

const other_user: IUser = {
  name: "marsliang",
  age: 18,
  email: "32499@qq.com",
};
