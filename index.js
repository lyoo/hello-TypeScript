// 枚举类型
// 它的值是数字序号，从0开始
// 代码可读性强
// 可能会常用下拉框等应用
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 100] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 101] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 102] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 103] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 104] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 105] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 106] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.MON;
if (day === DaysOfTheWeek.MON) {
    console.log("Got to go to work");
}
console.log(day);
