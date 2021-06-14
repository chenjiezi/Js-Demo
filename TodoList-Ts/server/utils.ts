import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { ITodoData } from '../src/js/typings';

export function readFile (path: string): string {
  return readFileSync(resolve(__dirname, path), 'utf-8');
}

export function writeFile<T> (path: string, data: T): void {
  if (data) {
    writeFileSync(resolve(__dirname, path), JSON.stringify(data));
  }
}

export function operationFile (path: string, fn?: Function): string | void {
  if (!fn) {
    return readFile(path);
  }

  let todoList = JSON.parse(readFile(path) || '[]');

  todoList = fn(todoList);

  writeFile<ITodoData[]>(path, todoList);
}