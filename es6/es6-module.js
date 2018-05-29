/**
 * 1. 介绍：
 *    ES6模块的设计思想是尽量的静态化，使编译时能确定模块的依赖关系，以及输入和输出的变量；
 *    ES6模块不是对象，而是通过 export 命令显式指定输出的代码，在通过 import 命令输入；
 * 
 * 2. 编译时加载（静态加载）：
 *      import { aa, bb, cc} from 'fs';
 *      上面代码的实质是从 fs 中加载了 3个方法，其它方法不加载，这种被称为“编译时加载” 或 “静态加载”；
 *      效率比CommonJS模块的加载方式高；
 * 
 * 3. ES6 模块好处：
 *     不在需要umd模块格式，将来服务器和浏览器都会支持ES6模块格式；
 *     不在需要对象作为命名空间；
 * 
 * 4. 严格模式（"use strict"）
 *      es6 的模块自动采用严格模式，不管你有没有在模块头部添加“use strict";
 * 
 * 5. 模块工能组成：
 *      模块功能主要由两个命令构成： export 和 import。
 *      export 命令用于规定模块的对外接口；
 *      import 命令用于输入其他模块提供的功能；
 */

/**
 * 6. export命令
 */
// ---------- 1 --------
export let n1 = 'I am N1';
export let n2 = 'I am N2';
// ----------- 2 -------
let n3 = 123;
let n4 = 'I am Jack'
// export {n3, n4};

/**
 * 7. as 关键字
 *      export输出变量是用原本的名字，也可以使用as关键字重命名；
 */
class getName{
  constructor() {}
  className(name) {
    return getName.name;
  }
}
let gets = new getName();
export { n3, n4, gets as getClassName };  
//对应import写法： import { n1, n2, n3, n4, getClassName } from '../../es6/es6-module.js'

/**
 * 7. import 命令
 *      使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
 *      import { n1, n2, n3, n4, getClassName } from '../../es6/es6-module.js'
 */

/**
 * 8. 模块整体加载 （*）
 *      除了指定加载某个输出值，还可以使用整体加载，
 */

/**
 * 9. export default 命令
 *      为模块指定默认输出；
 */
class fn {
  constructor() {
  }
  plus(x,y) {
    return x + y;
  }
}

export default new fn();   
//对应import写法： import fn from '../../es6/es6-module.js'