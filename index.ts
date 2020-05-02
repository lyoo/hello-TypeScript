class Person {
  // 定义2个数据内容
  firstName: string;
  lastName: string;
}

// 生成一个对象
let aPerson = new Person();

// 设置 firstName 的内容
aPerson.firstName = "marsliang";
// aPerson.firstName = 10;

// 读取 firstName 的内容
console.log(aPerson.firstName);

class Movie {
  name: string;
  play_count: number;
  created_at: string;
  time: string;
}

let m = new Movie();
