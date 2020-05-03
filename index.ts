interface States {
  [state: string]: boolean;
}

interface States1 {
  // An index signature parameter type must be 'string' or 'number'.
  // 这种方式定义的数组没有 push length join 等属性和方法
  [index: number]: number;
}

let s: States = {
  enabled: true,
  maximized: false,
};
console.log(s);
console.log(s["enabled"]);

let s1: States1 = [1, 2, 3, 4];
// console.log(s1);
// console.log(s1[0]);
// 类型“States1”上不存在属性“join”。
// console.log(s1.join("-"));
// Property 'length' does not exist on type 'States1'.
// console.log(s1.length);

let s2: number[] = [1, 2, 3];
console.log(s2.length);
console.log(s2.join("-"));

interface States2 {
  [index: number]: boolean;
  length: number;

  pop(): boolean;
  push(): void;
}

let s3: States2 = [true, false, false, true];
console.log(s3);
console.log(s3.length);
console.log(s3.pop());

interface States3 {
  [state: string]: boolean;
  mainScreen: boolean;
}

let s4: States3 = {
  mainScreen: true,
};
s4["enabled"] = false;

interface NestedCss {
  color?: string;
  nest?: {
    [selector: string]: NestedCss;
  };
}

let example: NestedCss = {
  color: "red",
  nest: {
    ".subclass": {
      color: "blue",
    },
  },
};

let c1: NestedCss = {
  color: "red",
};

console.log("example: ", example);
console.log("c1: ", c1);
