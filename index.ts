// 第一种 不被推荐 any
let a: any;

a = function (): void {
  console.log("It work");
};

// 返回匿名函数
function fun(): any {
  return function (): void {
    console.log("It fun");
  };
}

// 第二种
let c: Function;
c = function (): void {
  console.log("It work");
};

// 不能将类型“"xxx"”分配给类型“Function”。
// c = "xxx";

// 第三种, 限制参数和返回值
let d: (para: string) => string;
d = function (pass: string): string {
  return pass;
};

// 第四种 类型别名
type e = (para: string) => string;

const f: e = function (pass: string): string {
  return pass;
};

// 第五种 接口
interface g {
  (para: string): string;
}

const h: g = (pass: string) => pass;
const i: g = function (pass: string): string {
  return pass;
};

// ------ 分割线 --------

function test(cb: () => string) {
  let s = cb();
  return s;
}

console.log(test(() => "Hello"));
