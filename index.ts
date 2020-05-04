// 函数名相同 参数不同 参数类型相同
// 没有实现定义
function sum(x: number, y: number): number;
function sum(x: number, y: number, z: number): number;

// 上面两种定义的组合实现
function sum(x: number, y: number, z?: number): number {
  console.log(typeof z);
  if (typeof z === "undefined") {
    return x + y;
  } else {
    return x + y + z;
  }
}

let n = sum(1, 2);
console.log(n);

n = sum(1, 2, 3);
console.log(n);

// 函数名相同 参数类型不同类型
function divide(x: number, y: number): number;
function divide(str: string, y: number): string[];

function divide(x: any, y: number): any {
  if (typeof x === "number") {
    return x / y;
  } else if (typeof x === "string") {
    return [x.substring(0, y), x.substring(y)];
  }
}

let n1: number = divide(6, 2);
console.log(n1);
let s1: string[] = divide("football", 4);
console.log(s1);

// class 重载
// 静态方法和实例方法
class Util {
  static divide(x: number, y: number): number;
  static divide(str: string, y: number): string[];

  static divide(x: any, y: number): any {
    if (typeof x === "number") {
      return x / y;
    } else if (typeof x === "string") {
      return [x.substring(0, y), x.substring(y)];
    }
  }
}

// let a1: Util = new Util();
// console.log(a1.divide(2, 1));
// console.log(a1.divide("hello world", 4));

let c: number = Util.divide(6, 2);
console.log(c);
