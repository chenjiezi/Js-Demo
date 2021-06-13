import { ITodoData } from "./typings";
import TodoTemplate from './TodoTemplate';
import { findParentNode } from "./utils";

class TodoDom extends TodoTemplate {
  private todoWrapper: HTMLElement;

  constructor (todoWrapper: HTMLElement) {
    super();
    this.todoWrapper = todoWrapper;
  }

  protected initList (todoData: ITodoData[]) {
    if (todoData.length) {
      const oFrag = document.createDocumentFragment();
      todoData.forEach((todo: ITodoData) => {
        const oItem: HTMLElement = this.createItem('div', 'todo-item', this.todoView(todo));
        oFrag.appendChild(oItem);
      })
      this.todoWrapper.appendChild(oFrag);
    }
  }

  protected addItem (todo: ITodoData) {
    const oItem: HTMLElement = this.createItem('div', 'todo-item', this.todoView(todo));
    this.todoWrapper.appendChild(oItem);
  }

  protected removeItem (target: HTMLElement) {
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item');
    oParentNode.remove();
  }

  protected changeCompleted (target: HTMLElement, completed: Boolean) {
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item');
    const oContent: HTMLElement = oParentNode.getElementsByTagName('span')[0];

    oContent.style.textDecoration = completed ? 'line-through' : '';
  }
}

export default TodoDom;