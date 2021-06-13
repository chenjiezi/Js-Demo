import { ITodoData } from "./js/typings";
import TodoEvent from './js/TodoEvent';

;((doc) => {
  
  const oInput: HTMLInputElement = document.querySelector('input');
  const oAddBtn: HTMLButtonElement = document.querySelector('button');
  const oTodoList: HTMLElement = document.querySelector('.todo-list');

  const todoData: ITodoData[] = [
    {
      id: 1,
      content: '123',
      completed: false
    },
    {
      id: 1,
      content: '456',
      completed: true
    },
    {
      id: 3,
      content: '321',
      completed: false
    }
  ];
  
  const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList);

  const init = (): void => {
    bindEvent();
  }

  function bindEvent () {
    oAddBtn.addEventListener('click', handleAddBtnClick, false);
    oTodoList.addEventListener('click', handleListClick, false);
  }

  function handleAddBtnClick (): void {
    const val: string = oInput.value.trim();

    if (val.length) {
      const ret = todoEvent.addTodo(<ITodoData>{
        id: Date.now(),
        content: val,
        completed: false
      });
      
      if (ret && ret === 1001) {
        alert('列表项已存在');
        return;
      }

      oInput.value = '';
    }
  }

  function handleListClick (e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tarName = tar.tagName.toLowerCase();

    if (tarName === 'input' || tarName === 'button') {
      const id = parseInt(tar.dataset.id);
      switch (tarName) {
        case 'input':
          todoEvent.toggleCompleted(tar, id);
          break;
        case 'button':
          todoEvent.removeTodo(tar, id);
          break;
        default:
          break;
      }
    }
  }

  init();

})(document);