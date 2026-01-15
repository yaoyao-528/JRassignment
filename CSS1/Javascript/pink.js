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

//内置对象

console.log(Math.random()) //0-1之间的小数 随机的
console.log(Math.floor(Math.random() *100) +1) //1-100整数
console.log(Math.ceil(Math.random() *100)) //1-100整数
console.log(Math.round(Math.random() *100)) //0-100整数
console.log(Math.random()*(10+1)) //0-10之间的小数
console.log(Math.floor(Math.random()*(10+1))) //0-10之间的整数

let arr =['apple', 'banana', 'orange', 'grape']
let randomIndex = Math.floor(Math.random() * arr.length)
console.log(`i like ${arr[randomIndex]}`)

Math.floor(Math.random()*6) +1 //1-6之间的整数 骰子

Math.floor(Math.random()*6) +5 //5-10之间的整数

Math.floor(Math.random()*(M-N+1)) + N //N-M之间的整数

function getRandomInt(N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N
}
console.log(getRandomInt(20,50)) //20-50之间的整数

//随机点名练习
let student = ['jeremy', 'lily', 'tom', 'lucy', 'jack', 'emma', 'mike']

let randomStudent = student[Math.floor(Math.random() * student.length)]

console.log(randomStudent)
//splice () 删除数组元素-起始位置，删除几个元素
student.splice(random,1) //删除被点到的学生
console.log(student)


//API const 优先用 const 
// DOM document object model, 操作html页面的内容

//querySelector 通过css选择器选取元素, 只选第一个

const box = document.querySelector('div')
console.log(box)

const nav = document.querySelector('#nav')
console.log(nav)


const li = document.querySelector('ul li:first-child')
console.log(li)

document.querySelectorAll() //选取所有符合条件的元素，返回一个数组
const lis = document.querySelectorAll('ul li')
console.log(lis[0])


// 伪数组， Nodelist, 没有办法修改增加删除元素， 

const lis = document.querySelectorAll('.nav li')
console.log(lis)

for (let i=0; i<lis.length; i++) {
  console.log(lis[i])
}//遍历伪数组 

// 修改元素内容 innerHTML 1.获取元素内容 2.修改元素内容
const box = document.querySelector('.box')
console.log(box.innerText) //获取元素内容

box.innerHTML = '<strong>Hello World</strong>' //修改元素内容, 不解析标签

//innerHTML
const box = document.querySelector('.box')
console.log(box.innerHTML) //获取元素内容
box.innerHTML = '<strong>Hello World</strong>' //修改元素内容, 解析标签


//example
const personArr = ['jeremy', 'lily', 'tom', 'lucy', 'jack', 'emma', 'mike']
const random = Math.floor(Math.random() * personArr.length)
console.log(personArr[random])
const one = document.querySelector('#one')
one.innerHTML = personArr[random]
personArr.splice(random, 1)
console.log(personArr)

// 修改元素属性 setAttribute() getAttribute()
const link = document.querySelector('#myLink')
console.log(link.getAttribute('href')) //获取属性值
link.setAttribute('href', 'https://www.baidu.com') //修改属性值
link.setAttribute('target', '_blank') //添加属性值

function getRandom(N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N
}
const imag = document. querySelector('img')
const random = getRandom(1,6)
imag.src = `image/${random}.jpg`


// 修改元素样式 （ 对象.style.样式属性）
const box = document.querySelector('.box')
box.style.width = '200px'
box.style.height = '200px'
box.style.backgroundColor = 'pink' //多组单词的采取小驼峰命名法
box.style.border = '2px solid black'
//通过类名修改样式 className
const box = document.querySelector('.box')
console.log(box.className) //获取类名
box.className = 'active' //修改类名
// 通过类名修改样式 classList- add（）不加点，是字符串
const box = document.querySelector('.box')
box.classList.add('active') //添加类名
box.classList.remove('active') //删除类名
box.classList.toggle('active') //切换类名，有就删除，没有就添加
console.log(box.classList.contains('active')) //检查类名是否存在，返回true或false


//定时器间歇函数 setInterval() clearInterval()
let count =0
const intervalId = setInterval(function() {
  count++
  console.log(`count is ${count}`)
}, 1000) //每隔1秒执行一次


function fn() {

  console.log('This is an interval function')

}


let n = setInterval(fn, 2000) //每隔2秒执行一次 fn函数不加括号因为加括号是调用函数
console.log(n) //返回一个定时器ID=2

clearInterval(n) //停止定时器



//定时器延时函数 setTimeout() clearTimeout()
const timeoutId = setTimeout(function() {
  alert('This is a delayed alert!')
}, 3000) //3秒后执行一次


//example
const btn = document.querySelector('btn')
console.log(btn.innerHTML)
let i = 60
btn.disabled = true
let n = setInterval(function() {
  i--
  btn.innerHTML = `I have readed the agreement ${i} seconds`
  if (i === 0) {
    clearInterval(n)
    btn.disabled = false
    btn.innerHTML = 'I agree the agreement'
  }
}, 1000)




// 添加事件监听 addEventListener 在编程时系统内发生的动作，比如用户在网页上单击一个按钮，移动鼠标，按下键盘等
//element.addEventListener('事件类型', 事件处理函数)

const btn = document.querySelector('button')
btn.addEventListener('click', function() {
  alert('Button Clicked!')
}) //点击按钮弹出对话框

const box = document.querySelector('.box')
box.addEventListener('mouseover', function() {
  box.style.backgroundColor = 'lightblue'
})
box.addEventListener('click', function() {
  box.style.display = 'none'
})


//mouseenter, mouseleave, click, dblclick, contextmenu(右键菜单), mouseover, 
// mouseout,focus , blur, keydown, keyup, keypress, change, input, submit
//事件类型

//event 对象
const box = document.querySelector('.box')
box.addEventListener('click', function(event) {
  console.log(event)
  console.log(`X coordinate: ${event.clientX}`)
  console.log(`Y coordinate: ${event.clientY}`)
}) //点击盒子，获取鼠标坐标

const input = document.querySelector('input')
input.addEventListener('keyup', function(event) {
  console.log(`Key pressed: ${event.key}`)
  if (event.key === 'Enter') {
    alert('You pressed Enter!')
  }
}) //按下键盘，获取按键值和按键代码 

//环境对象 This, 每个函数里面都有 this 代表当前对象, 【谁调用， This就代表谁 】普通模式下-window
const box = document.querySelector('.box')
box.addEventListener('click', function() {
  console.log(this) //this代表当前元素box
  this.style.backgroundColor = 'yellow'
}) //点击盒子，改变背景颜色

//回调函数
function fn() {
  console.log('This is a callback function')
}
setInterval(fn, 1000) //每隔1秒执行一次


box.addEventListener('click', function() {
  console.log('also a callback function')
}) //点击盒子，执行回调函数

function fetchData(callback) {
  setTimeout(function() {
    const data = 'Sample Data'
    callback(data)
  }, 2000)
}

// tab slices example tab 切片功能
const as = document.querySelectorAll('.tab-nav a')
for(let i=0; i<as.length; i++) {
  as[i].addEventListener('mouseenter', function() {
    document.querySelector('.tab-nav .active').classList.remove('active')//移除类， 我添加类
    this.classList.add('active') //this 代表当前元素 as[i]


    document.querySelector('.tab-content .active').classList.remove('active')
    document.querySelectorAll('.tab-content .item:nth-child (${i+1})').classList.add('active')
  })
}

//事件流
const box = document.querySelector('.box')
const btn = document.querySelector('.box button')

box.addEventListener('click', function() {
  console.log('Box clicked')
})

btn.addEventListener('click', function(event) {
  console.log('Button clicked')
  event.stopPropagation() //阻止事件冒泡
})

//事件捕获， 事件冒泡
const box = document.querySelector('.box')
const btn = document.querySelector('.box button')

box.addEventListener('click', function() {
  console.log('Box clicked')
}, true) //事件捕获阶段执行

btn.addEventListener('click', function(event) {
  console.log('Button clicked')
}, true) //事件捕获阶段执行

//事件冒泡 (所有父级元素的同名事件处理函数都会被依次触发， 从最内层元素开始触发，一直冒泡到最外层元素)
const box = document.querySelector('.box')
const btn = document.querySelector('.box button')

box.addEventListener('click', function() {
  console.log('Box clicked')
}) //事件冒泡阶段执行

btn.addEventListener('click', function(event) {
  console.log('Button clicked')
}) //事件冒泡阶段执行

//事件委托
const ul = document.querySelector('ul')
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(`You clicked on item: ${event.target.innerText}`)
  }
}) //点击列表项，输出内容 
//给ul添加事件监听，利用事件冒泡机制，判断点击目标是否为li

//绑定事件
btn.onclick = function() {
  alert('Button clicked!')
} //点击按钮弹出对话框
//解绑事件
btn.onclick = null //解绑事件

const btn = document.querySelector('button')
btn.onclick = function() {
  alert('First handler')
}
btn.onclick = null //解绑第一个事件 
btn.addEventListener('click', function() {
  alert('Second handler')
}) //添加第二个事件监听
btn.removeEventListener('click', function() {
  alert('Second handler')
}) //无法解绑第二个事件监听，因为函数引用不同
//正确解绑方法
function secondHandler() {
  alert('Second handler')
}
btn.addEventListener('click', secondHandler) //添加第二个事件监听
btn.removeEventListener('click', secondHandler) //解绑第二个事件监听

//事件委托 利用事件冒泡原理
const ul = document.querySelector('ul')//获取ul元素父亲
ul.addEventListener('click', function() {
  alert('11')
  this.style.color = 'red'
  console.log(e.target) //获取点击的目标元素
  e.target.style.color = 'blue' //改变点击目标元素颜色
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'blue'
  } //只点击li才输出内容

}) //点击列表项，输出内容
//给ul添加事件监听，利用事件冒泡机制，判断点击目标是否为li
//tab切片功能

const ul = document.querySelector('.tab-nav')
ul.addEventListener('click', function(e) {
  console.log(e.target) //获取点击的目标元素
  console.log(e.target.tagName) //获取点击目标元素的标签名
  if (e.target.tagName === 'A') {
    console.log('a was selected')
    document.querySelector('.tab-nav .active').classList.remove('active')//排他思想,移除原来的active类
    e.target.classList.add('active')//this 指向ul,不能是this

    const i = +e.target.dataset.id 
    document.querySelector('.tab-content .active').classList.remove('active')
    document.querySelector(`.tab-content .item:nth-child(${i + 1})`).classList.add('active') //注意反引号
  }
}

//阻止默认行为
const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
  e.preventDefault() //阻止默认行为
  alert('Form submitted, but default behavior prevented!')
}) //提交表单，弹出对话框但不提交

const a = document.querySelector('a')
a.addEventListener('click', function(e) {
  e.preventDefault() //阻止默认行为
}) //点击链接，输出信息但不跳转

//页面加载-一些老代码喜欢你代码写在body前，这时候直接找dom元素会报错，因为dom还没加载完
//所以要等页面加载完再执行代码
window.addEventListener('load', function() {
  const btn = document.querySelector('button')
  btn.addEventListener('click', function() {
    alert('Button clicked after page load!')
  })
}) //页面完全加载后执行
Image.addEventListener('load', function() {
  console.log('Image loaded successfully')
}) //图片加载完成后执行

window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed')
}) //DOM内容加载完成后执行



//页面滚动事件
const div = document.querySelector('div')
window.addEventListener('scroll', function() {
  const n = document.documentElement.scrollTop
  //console.log(document.documentElement.scrollTop)//获取html元素
  if (n > = 100) {
    div.style.display = 'block'
  } else {
    div.style.display = 'none'
  }
})

const div = document.querySelector('div')
  div.addEventListener('scroll', function() {

    console.log(div.scrollTop)
  }
 )

//滚动练习
//获取元素
const elevator = document.querySelector('.xtx-elevator')
//1. 当页面滚动》300像素，就显示电梯elevator导航opicity =0
//2.给页面添加滚动事件
windown.addEventListener('scroll', funtion()) {
   //被卷曲的头部》300
   const n = document.documentElement.scrollTop
  /*  if (n > = 300) {
      elevator.style.opacity = 1
    } else {
      elevator.style.opacity = 0
    }  */
   elevator.style.opacity = n >= 300 ? 1:0 //简写

}

//点击返回页面顶部
const backTop = document.querySelector('#backTop')
backTop.addEventListener('click',function() {
  document.documentElement.scrollTop = 0  //scrollTop 可读写

})


//DOM节点操作 元素节点（标签body, div, p, html）  属性节点（href,  id, class） 文本节点（text, 文字）

//查找节点 父子关系，平级关系
const baby = document.querySelector('.baby')
console.log(baby)
  console.log(baby.parentNode) //返回father ，最近一级
  console.log(baby.parentNode.parentNode) //father's dad


// childrenNodes ,获得孩子所有的东西，得到是伪数组， 选择的是亲儿子
const ul = document.querySelector('ul')
console.log(ul.children)  

//获得兄弟 nextElementSibiling/previousElementSibiling
const li2 = document.querySelector('ul li:nth-child(2)')
console.log(li2.previousElementSibling) //上一个兄弟
console.log(li2.nextElementSibling)//下一个兄弟


//增删节点 document.createElement('标签名') 
const div = document.createElement('div') //创建节点
//追加节点 父元素.appendChild(要插入的元素) 插入到父元素的最后一个
document.body.appendChild(div)

const ul = document.querySelector('ul')
const li = document.createElement('li')
li.innerHTML = 'My name is alex'
ul.appendChild(li)

//插入父元素里其中一个子元素的前面 父元.insertBefore(要插入的元，在哪个元前面)

const ul = document.querySelector('ul')
const li = document.createElement('li')
li.innerHTML = 'My name is alex'
ul.insertBefore(li, ul.children[0])



//学生信息表录入
//1.点击模块
const uname = document.querySelector('.uname')
const age = document.querySelector('.age')
const gender = document.querySelector('.gender')
const salary = document.querySelector('.salary')
const city = document.querySelector('.city')
const tbody = document.querySelector('tbody')
const items = document.querySelectorAll('[name]')
//获取元素
const arr = []  //2.生命一个空数组

const info = document.querySelector('.info')
info.addEventListener('submit',function(){
  e.preventDefault() //阻止默认跳转
  //这里进行表单验证validation, 如果不通过，中断了
  for ( let i =0; i < items.length; i++) {
    if (items[i].value === '')
      return alert('输入内容不能为空')
    
  }


  const obj = {
    stuId: arr.length +1 ,
    uname: uname.value ,
    age: age.value ,
    gender: gender.value ,
    salary: salary.value ,
    city: city.value 
  }//3.创建一个新的对象，以对象的形式存入
  console.log(obj)
  //追加给数组
  arr.push(obj)
  console.log(arr)
  this.reset()//清空表单info,reset inform
  render()//调用渲染函数
 
})

 //4. 添加需要渲染，删除也需要渲染，封装函数 +遍历数组
 function render() {
    //先清空tbody
    tbody.innerHTML = ''
  for (let i = 0; i < arr.length; i++){
    //生成tr
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${arr[i].stuID}</td>
      <td>${arr[i].uname}</td>
      <td>${arr[i].age}</td>
      <td>${arr[i].gender}</td>
      <td>${arr[i].salary}</td>
      <td>${arr[i].city}</td>
      <td>
        <a href='javascript:' data-id=${i}> Delete </a>
      </td>
    `
    //追加元素  父元素.appendChild(子元素)
    tbody.appendChild(tr)
  }
 }


//5. 删除模块 事件委托
tbody.addEventListener('click', function(e){
  if(e.target.tagName === 'A') {
    alert(111)
    //自定义序号 data-id =0
    console.log(e.target.dataset.id)
    arr.splice(e.target.dataset.id, 1)
    console.log(arr)
    //重新渲染一次 
    render()
  }
})

//6. validation name属性 -遍历循环只要有一个是null，中断录入













