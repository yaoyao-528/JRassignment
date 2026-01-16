// 作用域局部， function（）； block {}
fn() {

}
 for (let i=0; i< arr.length; i++) {
    console.log(i)
 } //块作用域 if change to var 就可以了

//如果当前作用域查找不到，就往上逐级查找父级作用域。 父级作用域无法访问儿子
// Garbage collection 内存不使用时候被垃圾自动回收。
const arr =[1,2,3,4]
arr = null //释放了空间
//相互引用，无法回收，导致内存泄漏
// js 闭包 (内层函数+外层函数的变量 closure)

function outer() {
  const a = 1
  function f() {
    console.log(a) //里层函数用到了外层函数的变量
  }
  return fn //外部函数也可以访问里层函数的变量
}
outer() 

//动态参数 arguments 只存在于函数里面 伪数组
function getSum() {
  console.log(arguments) 
  let sum = 0
  for(let i =0 ; i < arguments.length; i++) {
    sum +=arguments[i]
  }
  console.log(sum)
}
getSum(2,3,4)

//剩余参数, 是真数组 
function getSum(a,b, ...arr) {

}
getSum(2,3)
getSum(1,2,3)

//展开运算符,object, arry都能用, 展开数组,不会修改原数组，（求数组的最大值，合并数组）
const arr1 =[1,2,3]
console.log(...arr)
console.log(Math.max(1,2,3))
console.log(Math.max(...arr)) //3

const arr2 =[2,3,4,5]
const arr = [...arr1, ...arr2]
console.log(arr)

//ES6 箭头函数

const fn = () => {
  consoloe.log(123)
}
fn()

const fn = x => x+X
console.log(fn(1)) //只有一行代码，可以省略return

const form = document.querySelector('form')
form. addEventListener('click', ev=>ev.preventDefault())

//箭头函数可以直接返回一个对象
const fn = (uname) => （ {
  uname: uname
}）
fn('刘德芳')
//箭头函数只有剩余参数没有arguments

  const getSum = (...arr)=> {
      let sum = 0
      for (let i =0; i< arr.length; i++){
        sum += arr[i]
      }
      return sum
  }
  getSum(2,3)

// 解构赋值 数组解构, 批量赋值给变量的简单语法
const arr =[100,60,80]
const [max, min, avg] = arr // const max = arr[0] 类似

//交换变量
let a = 1
let b = 2 ;
[b,a]= [a,b]
console.log (a,b)


const [hr, lx, ,mi,fz] = ['海尔'， '联想'， 'xiaomi', 'fangzheng']
console.log(hr)

function getValue() {
  return [100,60]
}

const [max, min] = getValue()
console.log(max)
cossole.log(min)

//对象解构








//例子








