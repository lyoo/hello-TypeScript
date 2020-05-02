let a: any;

a = 10;
a = "lyoo";
a = [1, 2, 3];

const log = (value: any) => {
  console.log(typeof value);
  if (typeof value === "number") {
    return `your number is ${value}`;
  }

  if (typeof value === "string") {
    return `your string is ${value}`;
  }

  throw new Error(`Expected string or number, got ${value}`);
};

console.log(log("marsliang"));
console.log(log(12));
console.log(log([1, 2, 3]));

let b: any[];
// b = "10";
b = [1, "2", [1]];
