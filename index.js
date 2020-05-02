// 只要传入参数o 有 name  属性
// o 可以是一个接口类型，这个接口类型要有 name 属性
var sayName = function (o) {
    console.log(o.name);
};
var person = {
    // name: "lyoo",
    age: 18
};
sayName(person);
// const bottle = {
//   name: "漂流瓶",
//   litres: 1,
// };
// class Person {
//   name: string;
// }
// let aPerson = new Person();
// aPerson.name = "marsliang";
// sayName(bottle);
