# react组件性能优化
## 类组件的性能优化
### shouldComponentUpdate
当点击Demo1组件中的Click按钮的时候，Foo组件会重新渲染，即使传入它的props没有发生改变。

自定义子组件的shouldComponentUpdate这个生命周期函数可以实现对它的性能优化：比较本次和下一次传入Foo组件的props，
如果一致将不会渲染（shouldComponentUpdate返回false），否则将会渲染（shouldComponentUpdate返回true）。

此方法仅作为性能优化的方式存在，不要企图依靠此方法来阻止渲染，因为这可能产生bug。你应该考虑使用内置的PureComponent，
而不是手动来编写shouldComponentUpdate()

对应例子：[shouldComponentUpdate](./src/pages/WPO/Lv01_shouldComponentUpdate.js)

### PureComponent
React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，
而 React.PureComponent 中以浅层对比 prop 的方式来实现了该函数。

当点击Click count按钮的时候我们发现只有第一个Bar和Lee组件重新渲染了。比较Foo组件和第一个Bar组件我们发现，
传入Foo组件的是一个基本类型（字符串），而传入第一个Bar组件的是一个引用类型（对象）。由于在点击Click的时候Demo2组件会重新渲染，
这时候虽然传递给第一个Bar组建的对象还是{info: {age: 18}}，但它已经和之前的{info: {age: 18}}不是一个对象了，
比较前后两次的{info: {age: 18}}一定会得到false，所以第一个Bar组件会渲染。Lee组件也是同样的道理，即便handle上传递的函数一直都是() => {}。

那为什么第二个Bar组件却没有渲染？因为我们将person对象提取出来，脱离React组件而存在。在这个应用启动的时候仅仅只为它分配一次内存空间，
所以传如第二个子组件的person始终不会发生变化。

那为什么第一个Lee组件渲染了而第二个Lee组件却没有渲染呢？因为我们将函数绑定到类的属性上，即便父组件重新发生渲染，this.handleLee 总是那个组件初始化的函数。

对应例子：[PureComponent](./src/pages/WPO/Lv02_PureComponent.js)

## 函数组件的性能优化
### memo
React.memo(MyComponent, areEqual)为高阶组件。它与 React.PureComponent 非常相似，只会对复杂的对象进行浅层比较。它适用于函数组件，但不适用于 class 组件。

它接受两个参数，第一个为被优化的函数组件，第二个为对比函数。与 class 组件中 shouldComponentUpdate() 方法不同的是，如果 props 相等，
areEqual 会返回 true；如果 props 不相等，则返回 false。这与 shouldComponentUpdate 方法的返回值相反。此方法仅作为性能优化的方式而存在。
但请不要依赖它来“阻止”渲染，因为这会产生 bug。

对应例子：[memo](./src/pages/WPO/Lv03_memo.js)

### useCallback
useCallback(fn, deps)用来优化函数组件，常常结合memo高阶组件来使用。使用场景：在函数组件中给子组件传递一个回调函数

useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

对应例子：[useCallback](./src/pages/WPO/Lv04_useCallback.js)

### useMemo
useMemo用来优化函数组件。使用场景：1. 在组件中需要获取一个性能消耗很大的函数的返回值，比如将传入这个组件的props洗数据，等等
2. 需要父函数组件需要传递给子函数组件一个引用类型

对应例子：[useMemo](./src/pages/WPO/Lv05_useMemo.js)

# 几个问题
- 什么是浅层比较？
- 为什么采用浅层比较？
- 为什么Demo4中的`<Bar num={1} onClick={callback} name="Richard" />`渲染了，
而Demo2中的`<Hoo handle={this.handleHoo} name={'Richard'} />`没有渲染？
- 为什么Demo5中的`<Foo name={1} person={base3} />`和`<Foo name={2} person={base4} />`渲染了，
而`<Foo name={3} person={base5} />`和`<Foo name={4} person={'Richard'} />`没有渲染
