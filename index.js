var a;
a = 10;
a = "lyoo";
a = [1, 2, 3];
var log = function (value) {
    console.log(typeof value);
    if (typeof value === "number") {
        return "your number is " + value;
    }
    if (typeof value === "string") {
        return "your string is " + value;
    }
    throw new Error("Expected string or number, got " + value);
};
console.log(log("marsliang"));
console.log(log(12));
console.log(log([1, 2, 3]));
var b;
// b = "10";
b = [1, "2", [1]];
