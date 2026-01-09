/* shift +alt+a */
/* ; 结束符 */
/* input + output */
document.write('');
alert('');
console.log(''); //给程序员看的if it is right or fault

prompt('please type your name') //有对话框

/* 变量 */
let age = 18;
age = 19; // let 不允许多次声明

temp = num1;
num1 = num2;
num2 = temp;


/* 数组  */
let name =[12, 13, 14, 15];
console.log(arr[1]);
/* 常量 never change , const*/
const PI = 3.14;
console.log(PI);

/* 数据类型number, string, boolean, null, undefined, object */
console.log(1+1);
console.log(4%2) //余数 0
/* 自增 ----*/
let i = 1;
++i; //前面增加 
console.log(i);
i++; //后面自增都一样n=n+1
i = 1;
console.log(++i +1)  //3
let i =1 
console.log(i++ + 1)//2

/* 运算优先级 */
&& then ||
比较运算符 > 逻辑运算

switch (1) {
  case 1:
    console.log('11111')
    break
  case 2:
    console.log('22222')
    break
  case 3: 
    console.log('333333')
    break
  default:
    console.log('defaultinggggg')
} //break
// caculator example below
let num1 = +prompt('input your first number')
let num2 = +prompt('input your seond number')
let sp = prompt('+-/*')

switch(sp) {
  case '+':
    alert(`sum ${num1 + num2}`)
    break
    case '-':
    alert(`sum ${num1 - num2}`)
    break
    case '*':
    alert(`sum ${num1 * num2}`)
    break
    case '/':
    alert(`sum ${num1 / num2}`)
    break
    default:
      alert(`??? erorror`)
  
}

/* while+ for loop  */
let i = 1
while(i <=100) {
  document.write(`this is ${i} <br>`)
  i++
}

let i=1
let sum =0
while(i <=100) {
  sum += i
  i++
}
//continue 结束本次循环

// for循环
for(let i=1; i<=100; i++) {
  document.write(`this is for loop ${i} <br>`)
}
for(let i=1; i<=100; i+=1) {
  document.write(`this year my age is ${i} <br>`)
}

let sum =0
for(let i=0; i<=100; i++) {
  if i % 2 ==0 {
  sum += i
}
document.write(`the sum is ${sum}`)
} 

let arr =['apple', 'banana', 'orange', 'grape']
for (let i=0; i<=arr.length-1; i++) {
  document.write(`i like ${arr[i]} <br>`)   
}


for (let i =1; i<=5; i++) {
  if(i==3) {
    continue
  }
  document.write(`i is ${i} <br>`)
} // 1245

for (let i =1; i<=5; i++) {
  if(i==3) {
    break
  }
  document.write(`i is ${i} <br>`)
} // 12 退出整个循环

for（;；） {
  console.log('infinite loop')
  //无限循环
} 

for (let i=1; i<=3; i++) {
  document.write(`this is the ${i} day <br>`)
  for (let j=1; j<=5; j++) {
    document.write(`j what english words were memeorized today is ${j} <br>`)
  }

}
//循环嵌套 （外层循环打印第几天， 里层循环打印单词）
for (let j=1; j<=5; j++) {
  

for(let i =1; i<=5; i++) {
  document.write(`star`)
  }
  document.write(`<br>`)
}
//打印5行星星

for (let i=1; i<=9; i++) {
  for (let j=1; j<=i; j++) {
    document.write(`ixj=${i*j}`)
  }
  document.write(`<br>`)
}
//乘法表

/* Array 是有顺序的 */
let arr = ['apple', 'banana', 'orange', 'grape']
console.log(arr[0]) //apple
console.log(arr.length) //4
arr.push('pear') //在数组最后添加元素
arr.pop() //删除最后一个元素
arr.shift() //删除第一个元素
arr.unshift('watermelon') //在数组最前面添加元素
console.log(arr)


[2,6,1,77,52,25,7] //求最大值
let arr = [2,6,1,77,52,25,7]
let max = arr[0]
for (let i=1; i<arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log(`the max number is ${max}`)



//数组筛选
let arr = [2,0,6,1,77,0,52,0,25,7]
let newArr = []
for (let i=0; i<arr.length; i++) {
  if (arr[i] >= 10) {
    newArr.push(arr[i])
  }
}
console.log(newArr)


function sayHello() {
  console.log('hello world')
}//函数的声明
sayHello() //调用函数，代码实现复用 alert() prompt() console.log()



function getSum() {
  let sum =0
  for (let i=1; i<=100; i++) {
    sum += i
  }
  console.log(sum)    
}
getSum() //调用函数



function getSum(start, end) {
  console.log(end)
  let sum =0
  for (let i=start; i<=end; i++) {
    sum += i
  }
  console.log(sum)    
}
getSum(1,50)
getSum(200,100) //函数传参



let results2= parseInt('111')
alert('不需要返回值')
prompt('请输入数字')

function fn() {
  return 20
}
//相当于 fn() 调用者fn() =20
let re= fn()
console.log(re)
//函数返回值

function getSum(start, end) {
  return start + end
}
let sum = getSum(10,20)
console.log(sum)
//函数返回值


//对象object也是数据类型，无顺序的，
let person = {
  name: 'jeremy',
  age: 18,
  gender: 'male',
  hobby: ['reading', 'traveling', 'swimming'],
  sayHello: function() {
    console.log('hello everyone')
  }
}
console.log(person.name)
person.sayHello()

person.age =19
console.log(person.age) //改变对象的属性，no add let 


person.height =180
console.log(person.height)//增加属性

delete person.height
console.log(person) //删除属性

//对象的使用

//对象方法
person.sayHello()

//this 代表当前对象
let person = {
  name: 'jeremy',
  age: 18,
  gender: 'male',
  hobby: ['reading', 'traveling', 'swimming'],
  sayHello: function() {
    console.log(`hello everyone, my name is ${this.name}`)
  }
}
person.sayHello()

//遍历对象
let person = {
  name: 'jeremy',
  age: 18,        
  gender: 'male',
  hobby: ['reading', 'traveling', 'swimming'],
  sayHello: function() {
    console.log(`hello everyone, my name is ${this.name}`)
  }
}

for (let key in person) {
  console.log(`key is ${key}, value is ${person[key]}`)//key 是字符串形式 ‘0’
}
// for in 循环遍历对象的属性  
for (let key in obj) {
  console.log(key) // 'name' 'age' 'gender' 'hobby' 'sayHello'
  console.log(obj.key) //undefined
  console.log(obj[key]) //jeremy 18 male ['reading', 'traveling', 'swimming'] function() {...}   
} 

let students=[
  {name: 'jeremy', age: 18, gender: 'male'},
  {name: 'lily', age:20, gender: 'female'},
  {name: 'tom', age:22, gender: 'male'} 
  {name: 'lucy', age:19, gender: 'female'}
]
for (let i=0; i<students.length; i++) {
  console.log((i))
  console.log(students[i])
  console.log(students[i].name)
}


