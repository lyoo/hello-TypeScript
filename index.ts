function sayHi(): void {
  console.log("Hi");
}

let a: void = sayHi();
console.log(a);
// 期待有返回值
if (a === undefined) {
}

// 不期待有返回值
function loopForever(): never {
  // 无限循环
  while (true) {}
}

function terminateWithError($msg: string): never {
  throw new Error($msg);
}

function checkExhaustiveness(x: never): never {
  throw new Error("exhaustive check fails for: " + x);
}

function showTrueFalse(x: string | boolean): void {
  if (typeof x === "string") {
    console.log("string: " + x);
  } else if (typeof x === "boolean") {
    console.log("boolean: " + x);
  }

  // 当传入一个 boolean 类型，编译器就是会处理下面的代码
  // 就会把 boolean 类型的值赋值给 never 类型， 就会报错
  // 可以简单理解为 boolean 是可以到达的类型
  else {
    // 传入别的类型，不是 string 或者 boolean， 编译器会处理
    // x 可能是一个不可到达的类型，可以分配类型 never
    // 当传入错误的类型的时候，可以分配给 never 类型
    checkExhaustiveness(x);
    // x 可以是 boolean 类型；
    // let temp: never = x;
  }
}

// never 是很多类型的子类型
// 不能把 number string 等类型或值分配给 never
// let something: void = null;
// let nothing: never = 12;

showTrueFalse(true);
showTrueFalse("false");
