# 坑

## 1. 原因未知
```js
Lia@DESKTOP-C9KUG13 MINGW64 /g/workspace/Js-Demo/TodoList-Ts (master)
$ npm run dev

> todolist-ts@1.0.0 dev
> vite --host

events.js:292
      throw er; // Unhandled 'error' event
      ^

Error: spawn G:\workspace\Js-Demo\TodoList-Ts\node_modules\esbuild\esbuild.exe ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:269:19)
    at onErrorNT (internal/child_process.js:465:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21)
Emitted 'error' event on ChildProcess instance at:
    at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
    at onErrorNT (internal/child_process.js:465:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'spawn G:\\workspace\\Js-Demo\\TodoList-Ts\\node_modules\\esbuild\\esbuild.exe',
  path: 'G:\\workspace\\Js-Demo\\TodoList-Ts\\node_modules\\esbuild\\esbuild.exe',
  spawnargs: [ '--service=0.12.8', '--ping' ]
}
```
- 解决方案：node node_modules/esbuild/install.js