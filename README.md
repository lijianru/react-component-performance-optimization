# react组件性能优化
## 类组件的性能优化
### shouldComponentUpdate
[shouldComponentUpdate](./src/pages/WPO/Lv01_shouldComponentUpdate.js)

### PureComponent
[PureComponent](./src/pages/WPO/Lv02_PureComponent.js)

## 函数组件的性能优化
### memo
[memo](./src/pages/WPO/Lv03_memo.js)

### useCallback
[useCallback](./src/pages/WPO/Lv04_useCallback.js)

### useMemo
[useMemo](./src/pages/WPO/Lv05_useMemo.js)

# 几个问题
- 什么是浅层比较？
- 为什么采用浅层比较？
- 为什么Demo4中的`<Bar num={1} onClick={callback} name="Richard" />`渲染了，
而Demo2中的`<Hoo handle={this.handleHoo} name={'Richard'} />`没有渲染？
- 为什么Demo5中的`<Foo name={1} person={base3} />`和`<Foo name={2} person={base4} />`渲染了，
而`<Foo name={3} person={base5} />`和`<Foo name={4} person={'Richard'} />`没有渲染
