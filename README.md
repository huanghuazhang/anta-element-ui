# ANTA ELEMENT UI

[![npm](https://img.shields.io/npm/v/anta-element-ui)](https://www.npmjs.com/package/anta-element-ui) ![license](https://img.shields.io/npm/l/anta-element-ui)

```html
基于 element-ui 定制主题
```


- [element-ui](https://github.com/ElemeFE/element)
- [element-ui-backstarge](https://github.com/youpinyao/anta-element-ui-backstage)
- [demo](http://anta-element-ui.fetribe.cn/login)

## 安装

```js
npm i anta-element-ui
```

## 使用

```js
import 'anta-element-ui/src/scss/index.scss';
import AntaElementUI from 'anta-element-ui';

Vue.use(AntaElementUI);
```

## 定制主题

```js
/* 改变主题色变量 */
$--color-primary: #155bd4;
...

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~anta-element-ui/node_modules/element-ui/lib/theme-chalk/fonts';

@import '~anta-element-ui/src/scss/reset.scss';
@import '~anta-element-ui/src/scss/theme.scss';
```