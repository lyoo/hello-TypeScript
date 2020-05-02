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
  time: number;

  // this 指向生成的 object 本身
  constructor(name: string, play_count: number, time: number) {
    this.name = name;
    this.play_count = play_count;
    this.time = time;
  }

  // method 方法 可能对数据进行操作
  display_play_count(padding: string = "******") {
    return `${this.play_count} 次数 ${padding}`;
  }

  increase_play_count() {
    this.play_count += 1;
  }
}

// 生成一个对象
let m = new Movie("TypeScript 教程", 15, 80);
console.log(m.name);
console.log(`播放时长${m.time}分钟`);
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());

// 生成一个对象
let m1 = new Movie("Nodejs 教程", 183, 20);

console.log(m1.name);
console.log(`播放时长${m1.time}分钟`);
console.log(m1.display_play_count());
m1.increase_play_count();
console.log(m1.display_play_count());
m1.increase_play_count();
console.log(m1.display_play_count());
m1.increase_play_count();
console.log(m1.display_play_count());
