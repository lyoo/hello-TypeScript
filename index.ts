function splitInHalf(str: string | null): string {
  let checkString = function () {
    if (str === null || str === undefined) {
      str = "test";
    }
  };
  checkString();
  console.log(str!.length / 2);
  // 告诉编辑器 str 不能为空
  return str!.substring(0, str!.length / 2);
}

let s: string = splitInHalf("hello");
console.log(s);
