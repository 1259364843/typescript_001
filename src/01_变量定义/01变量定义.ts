
// 1.string
let name1:string = "tom";
const age:number = 20;

// 2.number

let n1:number = 1000;

// 3.boolean
let b1:boolean = true;

// 4.array
let arr1:string[] = ['1','2'];

// 5.object
let obj1:object = {
  name: "tom",
  age: 20
}

// 6.Symbol
const s1:symbol = Symbol("title")
const s2:symbol = Symbol("title")
const person = {
  [s1]:"教师",
  [s2]:"司机"
}

// 7.null和undefined
let n:null = null;
let u:undefined=undefined;


// any类型

let any1:any = 666;

// unknown类型
let unkown1:unknown

// void
function fun1():void {
  console.log(1);
}

// tuple类型

const info:(string|number)[] = ["tom",12,99];
const item1 = info[0]