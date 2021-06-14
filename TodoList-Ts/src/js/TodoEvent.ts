import TodoDom from "./TodoDom";
import { getTodoList, removeTodo, toggleCompleted, addTodo } from "./TodoService";
import { ITodoData } from "./typings";

class TodoEvent extends TodoDom {
  private todoData: ITodoData[];

  constructor (todoWarpper: HTMLElement) {
    super(todoWarpper);
    
    this.init(this.todoData); // 初始化列表
  }

  @getTodoList
  private init (todoData: ITodoData[]) {
    this.todoData = todoData;
    this.initList(this.todoData);
  }

  @addTodo
  public addTodo (todo: ITodoData): undefined | number {
    const  _todo = this.todoData.find((item: ITodoData) => item.content === todo.content);
    
    if  (!_todo) {
      this.todoData.push(todo);
      this.addItem(todo);
      return;
    }

    return 1001; // 禁止添加重复数据: 1001
  }

  @removeTodo
  public removeTodo (target: HTMLElement,id: string): void {
    this.todoData = this.todoData.filter((todo: ITodoData) => todo.id !== id);
    this.removeItem(target);
  }

  @toggleCompleted
  public toggleCompleted (target: HTMLElement, id: string): void {
    this.todoData = this.todoData.map((todo: ITodoData) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.changeCompleted(target, todo.completed);
      }
      return todo;
    })
  }
}

export default TodoEvent;