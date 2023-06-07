// 1.基本声明
interface Piont {
  x: number
  y: number
}
// 可选属性

interface Person {
  name: string
  age1?: number
}

// 只读属性
interface Point2 {
  x: number,
  readonly y: number
}
// 函数类型
interface CalcFunc2 {
  (num1: number, num2: number):number
}
const add: CalcFunc2 = (num1, num2) => {
  return num1 + num2
}
const sub: CalcFunc2 = (num1, num2) => {
  return num1 - num2
}

// 接口继承
interface Person {
  name: string
  eating: () => void
}
interface Animal {
  runing: () => void
}
interface Student extends Person, Animal {
  sno: number
}

// 接口实现
interface ISwim {
  swiming: () => void
}
interface IRun {
  running: () => void
}
class Person2 implements ISwim, IRun {
  swiming() {
    console.log('swiming');
  }
  running() {
    console.log('running');
  }
}
function swim(swimmer:ISwim) {
  swimmer.swiming()
}
const p2 = new Person2()
swim(p2)