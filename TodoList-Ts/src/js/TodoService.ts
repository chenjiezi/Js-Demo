import $ from 'jquery';
import { ITodoData } from './typings';

export function getTodoList (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  // 保存原有 init 函数
  const _origin = descriptor.value;

  // 重写 init 函数 - 重写的原因：先请求数据在执行 init 函数
  descriptor.value = function (todoData: ITodoData[]) {
    $.get('http://localhost:8888/todolist').then((res: string) => {
      if (!res) {
        return;
      }

      todoData = JSON.parse(res);
    }).then(() => {
      // 为什么要重新绑定 this?
      // 因为 _origin 被重新定义在全局，在严格模式下，this 指向 undefined
      _origin.call(this, todoData)
    })
  }
}

export function removeTodo (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  const _origin = descriptor.value;

  descriptor.value = function (target: HTMLElement, id: number) {
    $.post('http://localhost:8888/remove', { id }).then(({ codeStatus }) => {
      if (codeStatus == 200) {
        _origin.call(this, target, id);
      }
    })
  }
}

export function toggleCompleted (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  const _origin = descriptor.value;

  descriptor.value = function (target: HTMLElement, id: number) {
    $.post('http://localhost:8888/toggle', { id }).then(() => {
      _origin.call(this, target, id);
    })
  }
}

export function addTodo (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  const _origin = descriptor.value;

  descriptor.value = function (todo: ITodoData) {
    $.post('http://localhost:8888/add', { todo: JSON.stringify(todo) }).then((res) => {
      if (res.codeStatus === 200) {
        _origin.call(this, todo);
      } else {
        alert(res.msg)
      }
    })
  }
}
