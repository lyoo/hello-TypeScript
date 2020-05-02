// const add = (a: number, b: number): number => {
//   return a + b;
// };
// const add = (a: number, b: number): string => {
//   return a.toString() + b.toString();
// };
var add = function (a, b) {
    if (b) {
        console.log(a + b);
    }
    else {
        console.log(a);
    }
};
// const sum = add(10, 20);
var sum = add(10, 30);
console.log(sum);
