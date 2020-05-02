function isNumber(value) {
    // 可以进行进一步判断
    return typeof value === "number";
}
function isString(value) {
    return typeof value === "string";
}
// const log = (value: any) => {
//   console.log(typeof value);
//   if (isNumber(value)) {
//     return "your number is " + value;
//   }
//   if (typeof value === "string") {
//     return "your string is " + value;
//   }
//   throw new Error("Expected string or number, got " + value);
// };
var log = function (value) {
    console.log(typeof value);
    if (isNumber(value)) {
        return "your number is " + value;
    }
    if (typeof value === "string") {
        return "your string is " + value;
    }
};
console.log(log("marsliang"));
console.log(log(12));
// console.log(log([1, 2, 3]));
