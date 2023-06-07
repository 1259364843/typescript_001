// 抽象类
abstract class Shape {
  abstract getArea(): number
}

class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea() {
    return this.r * this.r * 3.14
  }
}