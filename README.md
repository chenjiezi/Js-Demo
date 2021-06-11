# DEMO

## TodoList-Ts

- 原生js写法
  - 绑定事件处理函数 -数据
    1. 增加项 - 列表数据 -> 增加一项    
      { id timestamp, content string, compteted: false }    
      每一项的视图 -> 列表

    2. 删除项 - 列表数据   
      将对应项的视图 -> id -> removeItem

    3. 改变完成状态 - 列表数据 -> 删除id -> change compLeted   
      将对应项的完成状态 -> 是否完成 toggle

- 面向对象、类的继承、横向切割程序 - 设计方案
  - 程序进行分类
    1. 外层：浏览器的事件 -> 调用方法 -> 事件处理函数的绑定
    2. 操作数据：addTodo、 removeTodo、toggleComplete
    3. 操作DOM：addItem、 removeItem、 changeCompleted
    4. 管理模板：todoView -> 接收参数

---

## [闪烁九宫格](https://chenjiezi.github.io/Js-Demo/task1/index.html)    

ps：请在移动端浏览九宫格 或 pc端用浏览器的模拟移动端模式  
    
## [ajax实现异步获取该用户的信息](https://chenjiezi.github.io/Js-Demo/task2/index.html)   

## [js实现表单验证](https://chenjiezi.github.io/Js-Demo/task3/index.html)      
- [DOM实现不无刷新页面更换图片](https://chenjiezi.github.io/Js-Demo/task4/index.html)

