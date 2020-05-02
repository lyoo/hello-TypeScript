// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const add = (a: number, b: number): string => {
//   return a.toString() + b.toString();
// };

const add = (a: number, b?: number): void => {
  if (b) {
    console.log(a + b);
  } else {
    console.log(a);
  }
};

// const sum = add(10, 20);
const sum = add(10, 30);
console.log(sum);
