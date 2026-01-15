
//tax calcs
/* 0-18200: Nil
  18201-45000: 19c for each $1 over 18200 
  45001-120000: $5092 plus 32.5c for each $1 over 45000
  120001-180000: $29467 plus 37c for each $1 over 120000
  180001 and over: $51667 plus 45c for each $1 over 180000
*/
function calculateTax(income) {

  let tax = 0;

  if (income <= 18200) {
    tax = 0;
  } else if (income <= 45000) {
    tax = (income - 18200) * 0.19;
  } else if (income <= 120000) {
    tax = 5092 + (income - 45000) * 0.325;
  } else if (income <= 180000) {
    tax = 29467 + (income - 120000) * 0.37;
  } else {
    tax = 51667 + (income - 180000) * 0.45;
  }

  return tax;
}
// B
const TAX_BRACKETS = [

  { min: 0, max: 18200, rate: 0 },

  { min: 18200, max: 45000, rate: 0.19 },

  { min: 45000, max: 120000, rate: 0.325 },

  { min: 120000, max: 180000, rate: 0.37 },

  { min: 180000, max: Infinity, rate: 0.45 },

];

 

/**

 * 计算个人所得税

 * @param {number} income - 年收入

 */

const calculateTax = (income) => {

  // 2. 使用 reduce 进行累加计算，这是 ES6 处理数组极其强大的方式

  const totalTax = TAX_BRACKETS.reduce((accumulator, bracket) => {

    // arr[4], 29467

    // { min: 180000, max: Infinity, rate: 0.45 }

    // 使用解构赋值获取属性

    const { min, max, rate } = bracket;

    if (income > min) { // 120000 > 180000 false

      // 计算落入当前税阶的金额

      const taxableAmount = Math.min(income, max) - min; // 120000 - 45000 = 75000

      return accumulator + taxableAmount * rate; // 5092 + 75000 * 0.325 = 29467

    }

 

    return accumulator; // 29467

  }, 0);

 

  return totalTax; // 29467

};
//SOLID Principles
//Single Responsibility Principle

//代码质量，可读性，维护性更高，可复用
//符合人类思维的代码才是好的代码


//C 好代码-符合人类的思维方式
const TAX_BRACKETS = [

  { min: 0, max: 18200, rate: 0 , base:0},

  { min: 18200, max: 45000, rate: 0.19 },

  { min: 45000, max: 120000, rate: 0.325 ,base:5092},

  { min: 120000, max: 180000, rate: 0.37, base:29467 },

  { min: 180000, max: Infinity, rate: 0.45 , base:51667 },

];
function calculateTax(income) {

  const bracket = TAX_BRACKETS.find(b => income > b.min && income <= b.max);
  return bracket.base + (income - bracket.min) * bracket.rate;
}

//程序员要Review AI代码 评估结果， 管理预期
//代码质量-殊途同归
//半本武功秘籍走天下SOLID原则
//1. 单一职责原则-只干一件事，并且做好它
//2. 对扩展开放-对修改封闭 （开闭原则）
//3. 依赖倒置原则 例如税表 注入进来  dependency injection

//ES6 是为了提高代码质量，不是效率-代码质量priority over code efficiency

//https://slept-flare-05094629.figma.site

/*声明式编程 vs 命令式编程
命令式编程-告诉计算机如何做
声明式编程-告诉计算机做什么
React是声明式编程范例
HTML JS CSS React本质上还是， 但是我们不能接受命令式编程
前端程序员要学会用声明式编程思维去写代码
junior React dev or Senior React dev 并不是skill差距,而是思维方式差距

*/
















