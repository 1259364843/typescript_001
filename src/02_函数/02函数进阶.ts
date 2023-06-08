// 函数类型的表达式
type CalcFunc = (num1:number,num2:number) => void;

function calc(fn:CalcFunc) {
  console.log(fn(20, 30));
}
function sum11(num1:number,num2:number) {
  return num1+num2
}
function mul(num1:number,num2:number) {
  return num1*num2
}
calc(sum11)
calc(mul)

// 默认参数
function foo1(x:number, y:number = 10) {
  console.log(x+y);
}

// 剩余参数
function foo2(...nums:number[]) {
  let total = 0;
  for(const num of nums) {
    total += num
  }
  return total
}
const result1 = foo2(10,20,40)
console.log(result1);

// 函数重载
function sum(a1:number,a2:number):number;
function sum(a1:string,a2:string):string;
function sum(a1:any,a2:any):any {
  return a1 + a2;
};
console.log(sum(20,30));
console.log(sum("aa","bb"));
