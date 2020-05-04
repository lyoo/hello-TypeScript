// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }

// let myNumArray = getArray([100, 200, 300]);
// let myStrArray = getArray(["hello", "world"]);

// console.log(myNumArray);
// console.log(myStrArray);

// myNumArray.push(400);
// myStrArray.push("lyoo");

// console.log(myNumArray);
// console.log(myStrArray);

// myNumArray.push("marsliang");
// myStrArray.push(500);

// console.log(myNumArray);
// console.log(myStrArray);

// 限制所有的元素是纯数字或者字符串
// function getArray(items: number[]): number[] {
//   return new Array().concat(items);
// }

// function getArray(items: string[]): string[] {
//   return new Array().concat(items);
// }

// 可以用很多类型来代替 T
// T[] 代表数组，每个元素都是 T 类型
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

// 调用，可以传入很多类型，代码复用
let myNumArray = getArray<number>([100, 200, 300]);
let myStrArray = getArray<string>(["helo", "world"]);
let myBooleanArray = getArray([true, false]);

myNumArray.push(400);
myStrArray.push("lyoo");
// 推断出 boolean, 不推荐使用 类型“400”的参数不能赋给类型“boolean”的参数。
// myBooleanArray.push(400);

console.log(myNumArray);
console.log(myStrArray);

// function getArray1<T>(items: T): T {
//   console.log(items.length);
//   return T;
// }

function getArray1<T>(items: T[]): T[] {
  console.log(items.length);
  return items;
}

// myNumArray.push("marsliang");
// myStrArray.push(500);

console.log(myNumArray);
console.log(myStrArray);
