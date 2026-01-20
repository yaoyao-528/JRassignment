# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

我们这个项目依赖于这些东西，版本
<script src=''>

  ```
  1. 把产品尽量拆分
  -APP
    -Header
    -FYSelector
      -Button
      -button
      -button
    -tax rates table
    -tax calcs card 
      -Form
       -Input
       -Button
      -Result
    -Disclaimer
 质量-可读可复用

 代码质量
 如果一个compoenent都没有一个明确的名字的话， 那么这个component就不该存在

 2. Single responsiblity
 一个组件一个责任

 3. 使用react 构建一个静态版本

 





 
 