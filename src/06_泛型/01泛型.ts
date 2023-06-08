function foo<Type>(arg: Type): Type {
  return arg
}
foo<string>("abc")

// 泛型接口
interface IFoo<T> {
  name: T,
  list: T[],
  handle: (value:T) => void
}
const foo3: IFoo<string> = {
  name: "tom",
  list: ["1","2"],
  handle: (value: string) => {
    console.log(value);
  }
}
// 泛型类

class Point3<T> {
  x: T
  y: T
  constructor(x: T, y:T) {
    this.x = x
    this.y = y
  }
}
const p21 = new Point3<number>(10,20)