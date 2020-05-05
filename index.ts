interface Pair<F, S> {
  first: F;
  second: S;
}

let p: Pair<string, number> = { first: "lyoo", second: 45 };
console.log(p);

interface Command<T, R> {
  id: T;
  run(): R;
}

let c: Command<string, number> = {
  id: Math.random().toString(36),
  run: function () {
    return 3;
  },
};

console.log(c.id);
console.log(c.run());

interface ElementChecker {
  // 函数
  <T>(items: T[], toBeChecked: T, atIndex: number): boolean;
}

function checkElementAt<T>(
  elements: T[],
  toBeChecked: T,
  atIndex: number
): boolean {
  return elements[atIndex] === toBeChecked;
}

// 函数
let checker: ElementChecker = checkElementAt;
let items = [1, 3, 5, 7];
let b: boolean = checker<number>(items, 5, 2);
console.log("b: ", b);

let d: boolean = checker<number>(items, 5, 3);
console.log("d: ", d);
