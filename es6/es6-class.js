
// 1. 定义一个类
class HttpService {
  constructor() { }    //默认方法 默认存在一个空的constructor
  getBanner() {        // 定义一个取轮播图方法
    let text = "banner";
    return text;
  };
};
// 使用 export default 将类导出，供需要的模块使用；
export default new HttpService();

/**
 * 2. new方法调用类
 */
let Https = new HttpService;
let aaa = Https.getBanner();
console.log(aaa);

/**
 * 3. 在类的实例上面调用方法，其实就是调用原型的方法
 */
class B {
  className() {
    return B.name;
  }
}
let b = new B();
console.log(b.constructor === B.prototype.constructor)  //true
console.log(b.className())  //B

/**
 * 3. class 表达式
 *    这个类的名字是C1而不是Me，Me只在 Class 的内部代码可用，指代当前类。
 */
const C1 = class Me {
  constructor() {}
  getClassName() {
    return Me.name;
  }
}
let ClassName = new C1();
console.log(ClassName.getClassName()); //Me

/**
 * 4. 立即执行的类的实例
 */
let D = new class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name)
  }
}('李四');
D.sayName();  //李四

/**
 * 5. 私有属性方法
 *    a) 模块内部的所有方法都是对外可见的，对于私有方法推荐移除模块定义；
 *    b) 
 *    c) 
 */
class E {
  constructor() {}
  foo(data) {
    bar.call(this, data);
  }
}
function bar() {
  return '私有方法';
}

/**
 * 6.class 取值函数（getter） 和存值函数（setter） 
 *    在类内部可以使用get和set关键字，对某个属性设置存值函数和取值函数 拦截该属性的存取行为；
 */
class myClass {
  constructor(){}

  get prop() {
    return "get prop";
  }

  set prop(value) {
    console.log('set'+value);
  }
}
let inst = new myClass();
inst.prop;   //get prop
inst.prop = 'ok'  //set ok

/**
 * class Generator 方法
 *  如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
 */
// class F {
//   constructor(...args) {
//     this.args = args;
//   }
//   *[Symbol.iterator]() {
//     for (let arg of this.args) {
//       yield arg;
//     }
//   }
// }

// for (let x of new F('hello', 'world')) {
//   console.log(x);
// }

/**
 * 1. class介绍：
 *    a): class可以看作语法糖，绝大部分功能ES5中都可以实现；
 *    b): 新的class写法 对原型的写法更加清晰、更像面向对象编程的语法
 *    c): 在类的实例上面调用方法，其实就是调用原型的方法 (例 class B);
 *    d): 类的方法都是定义在prototype对象上面，所以类的新方法可以添加在Prototype对象上；
 *    e): 类的所有实例共享一个原型对象。
 *    f): 本质上，ES6 的类只是 ES5 的构造函数的一层包装
 * 
 * 2. constructor 方法：
 *    a）类的默认方法
 *    b）一个空的constructor方法会被默认添加
 *    c）该方法默认返回实例对象（即this）
 * 
 * 3. 不存在变量提升
 * 4. 
 */

// 常量 作用域 箭头函数 默认参数 对象代理