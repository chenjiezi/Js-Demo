import express, { Application } from 'express';
import bodyParse from 'body-parser';
import { operationFile } from './utils';
import { ITodoData } from '../src/js/typings';

const app: Application = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.get('/todolist', function (req, res) {
  const todoList: string = operationFile('todo.json') as string;
  res.send(todoList);
});

app.post('/toggle', function (req, res) {
  const id = req.body.id;

  operationFile('todo.json', function (todoList: ITodoData[]) {
    return todoList.map((todo: ITodoData) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });  
  });

  res.send({
    msg: 'ok',
    codeStatus: 200
  });
});

app.post('/remove', function (req, res) {
  const id = req.body.id;
  
  operationFile('todo.json', function (todoList: ITodoData[]) {
    return todoList.filter((todo: ITodoData) => todo.id !== id);
  });

  res.send({
    msg: 'ok',
    codeStatus: 200
  });
});

app.post('/add', function (req, res) {
  const todo: ITodoData = JSON.parse(req.body.todo);

  let isExist;
  operationFile('todo.json', function (todoList: ITodoData[]) {
    isExist = todoList.find((t: ITodoData) => t.content === todo.content);

    if (isExist) {
      return;
    }

    todoList.push(todo);
    
    return todoList;
  })

  if (!isExist) {
    res.send({
      msg: 'ok',
      codeStatus: 200
    });
  } else {
    res.send({
      msg: 'exist',
      codeStatus: 100
    });
  }
});

app.listen('8888', function () {
  console.log('welcome to EXPRESS!');
  console.log('Listening on port 8888');
})