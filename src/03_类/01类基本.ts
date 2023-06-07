// 定义一个类
class Person {
  name!: string
  age: number
  gender: string
  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  running() {
    console.log(this.name + "runing");
  }
}
// 2.类继承
class Student extends Person {
  id: number
  constructor(name: string, age: number,gender: string,id: number) {
    super(name, age,gender)
    this.id = id
  }
  studing() {
    console.log(this.name + "studing");
  }
}

// 只读属性
class P2 {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

// getters/setters
class P3 {
  private _name: string
  set name(newName) {
    this._name = newName
  }
  get name () {
    return this._name
  }
  constructor(name: string) {
    this._name = name
  }
}

const p3 = new P3("tom")
p3.name = "allen"
console.log(p3.name);
