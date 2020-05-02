var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 生成一个对象
var aPerson = new Person();
// 设置 firstName 的内容
aPerson.firstName = "marsliang";
// aPerson.firstName = 10;
// 读取 firstName 的内容
console.log(aPerson.firstName);
var Movie = /** @class */ (function () {
    // this 指向生成的 object 本身
    function Movie(name, play_count, time) {
        this.name = name;
        this.play_count = play_count;
        this.time = time;
    }
    // method 方法 可能对数据进行操作
    Movie.prototype.display_play_count = function (padding) {
        if (padding === void 0) { padding = "******"; }
        return this.play_count + " \u6B21\u6570 " + padding;
    };
    Movie.prototype.increase_play_count = function () {
        this.play_count += 1;
    };
    return Movie;
}());
// 生成一个对象
var m = new Movie("TypeScript 教程", 15, 80);
console.log(m.name);
console.log("\u64AD\u653E\u65F6\u957F" + m.time + "\u5206\u949F");
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());
m.increase_play_count();
console.log(m.display_play_count());
// 生成一个对象
var m1 = new Movie("Nodejs 教程", 183, 20);
console.log(m1.name);
console.log("\u64AD\u653E\u65F6\u957F" + m1.time + "\u5206\u949F");
console.log(m1.display_play_count());
m1.increase_play_count();
console.log(m1.display_play_count());
m1.increase_play_count();
console.log(m1.display_play_count());
m1.increase_play_count();
console.log(m1.display_play_count());
