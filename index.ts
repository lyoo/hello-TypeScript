const add = (a: number, ...num: number[]): number => {
  return num.reduce(function (total, num) {
    return total + num;
  }, a);
};

// const sum = add(10, 20);
const sum = add(10, 30, 20, 30, 10);
console.log(sum);
