class Rectangle {
  private w: number;
  private h: number;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
  }

  getAreaFunction() {
    return (): number => {
      return this.w * this.h;
    };
  }
}

let rectangle = new Rectangle(2, 5);
let areaFunction = rectangle.getAreaFunction();
// 得到面积
// this 是指向 rectangle 这个对象，还是调用的上下文
// 使用箭头函数 指向 rectangle 对象
let area = areaFunction();

console.log(area);
