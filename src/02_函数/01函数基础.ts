// 1.参数类型
function greet(name:string) {
  console.log(name);
}
greet('tom');

// 2.返回值类型

function sum1(num1:number,num2:number):number {
  console.log(num1 + num2);
  return num1 + num2;
}
sum1(10,20);

// 3.匿名函数的参数

[1,2,3].forEach(i=> {
  console.log(i);
})

// 4.对象参数
function printCoordinate(point: {x: number, y: number}) {
  console.log("x坐标",point.x);
  console.log("y坐标",point.y);
}
printCoordinate({x:20,y:30})

// 5.可选参数
function printCoordinate2(point: {x: number, y: number, z?: number}) {
  console.log("x坐标",point.x);
  console.log("y坐标",point.y);
}
printCoordinate2({x:20,y:30})

// 6.联合类型

function printId(id:number| string) {
  console.log(id);
}
printId(10)
printId("aaa")

// 7.类型别名

type Point = {
  x: number,
  y: number
}
function printCoordinate3(point: Point){}
type ID = number| string
function printId2(id: ID) {}