// 使用 typeof
function show(x: number | string): void {
  console.log(typeof x);
  if (typeof x === "number") {
    console.log("It is a number ", x);
  } else {
    console.log("It is a string ", x);
  }
}

// show(1);
// show("haha");

// class Person {}
// let person = new Person();
// console.log("typeof person: ", typeof person);
// console.log("typeof Person: ", typeof Person);
// console.log("typeof new String: ", typeof new String("test"));
// console.log("typeof undefined: ", typeof undefined);
// console.log("typeof null: ", typeof null);

// 使用 属性
class Car {
  start() {
    console.log("car starting");
  }

  drive() {
    console.log("car driving");
  }
}

class Bike {
  start() {
    console.log("bike starting");
  }

  ride() {
    console.log("bike ridding");
  }
}

// boolean 返回值发挥的作用是在运行时
// vehicle is Car 发挥在编译时期
function isCar(vehicle: Bike | Car): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}

function move(vehicle: Bike | Car): void {
  vehicle.start();

  // 断言方式处理
  // if ((vehicle as Car).drive) {
  //   (vehicle as Car).drive();
  // } else {
  //   (vehicle as Bike).ride();
  // }

  // if (isCar(vehicle)) {
  //   vehicle.drive();
  // } else {
  //   vehicle.ride();
  // }

  // 使用 instanceof
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

move(new Car());
move(new Bike());
