import React, { Component, memo } from 'react'

// 对于函数组件可以使用memo来做性能优化
// 默认情况下其只会对 props 的复杂对象做浅层对比(浅层对比就是只会对比前后两次 props 对象引用是否相同，不会对比对象里面的内容是否相同)
// 这时候第二个参数就派上用场了，如果 props 相等，isEqual 会返回 true（不渲染）；如果 props 不相等，则返回 false（渲染）
const Foo = memo(function Foo(props) {
    console.log('Foo render')
    console.log(props.person)
    return (
        <div>Foo</div>
    )
}, function (prevProps, nextProps) {
  let isEqual = true
  for (let key in prevProps.person) {
    if (prevProps[key] !== nextProps[key]) {
      isEqual = false
    }
  }
  return isEqual
})

export default class Demo3 extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
                <p>count: {this.state.count}</p>
                <Foo person={{ age: 18 }} />
            </div>
        )
    }
}
