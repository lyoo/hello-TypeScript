var add = function (a) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    return num.reduce(function (total, num) {
        return total + num;
    }, a);
};
// const sum = add(10, 20);
var sum = add(10, 30, 20, 30, 10);
console.log(sum);
var numArr = [1, 2, 3, 4, 5];
function getSum(total, num) {
    return total + num;
}
console.log(numArr.reduce(getSum));
