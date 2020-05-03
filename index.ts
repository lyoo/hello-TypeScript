interface Person {
  // 只读，不可修改
  readonly firstName: string;
  lastName?: string;

  print(callback: PrintCallback): void;
}

interface PrintCallback {
  // 可以理解为匿名函数
  (success: boolean): void;
}

let printCallback: PrintCallback;
printCallback = (suc: boolean): void => {
  console.log("callback ", suc);
};

let person: Person = {
  firstName: "marsliang",
  // lastName: "lyoo",
  print: (callback: PrintCallback): void => {
    console.log("hello");
    callback(true);
  },
};

person.print(printCallback);
