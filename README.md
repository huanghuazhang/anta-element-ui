# ANTA ELEMENT UI

```html
基于 element ui 定制主题
```

[https://github.com/ElemeFE/element](https://github.com/ElemeFE/element)

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
....

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~anta-element-ui/node_modules/element-ui/lib/theme-chalk/fonts';

@import '~anta-element-ui/src/scss/theme.scss';
```