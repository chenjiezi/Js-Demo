import { ITodoData } from "./typings";

class TodoTemplate {

  protected todoView ({ id, content, completed }: ITodoData): string {
    return `
      <input type="checkbox" ${ completed ? 'checked' : '' } data-id="${ id }" />
      <span style="text-decoration: ${ completed ? 'line-through' : '' }">${ content }</span>
      <button data-id="${ id }">删除</button>
    `
  }

  protected createItem (tagName: string, className: string, todoItem: string): HTMLElement {
    const oItem: HTMLElement = document.createElement(tagName);
    oItem.className = className;
    oItem.innerHTML = todoItem;

    return oItem;
  }

}

export default TodoTemplate