import React, { PureComponent, memo } from 'react'
import { isEqual } from 'lodash'

const Lee = memo(function Lee(props) {
  console.log('Lee render')
  return (
    <div>Lee</div>
  )
})

const Foo = memo(function Foo(props) {
    console.log('Foo render')
    return (
        <div>Foo</div>
    )
})

const Bar = memo(function Bar(props) {
  console.log('Bar render')
  return (
    <div>Bar</div>
  )
}, function (prevProps, nextProps) {
  let propsIsEqual = true
  for (let key in prevProps.person) {
    propsIsEqual = isEqual(prevProps[key], nextProps[key])
  }
  return propsIsEqual
})

export default class Demo3 extends PureComponent {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
                <p>count: {this.state.count}</p>
                <Lee person={'Richard'} />
                <Foo person={{info: {age: 18}}} />
                <Bar person={{info: {age: 18}}} />
                {/**
                 * React.memo(MyComponent, areEqual)为高阶组件。它与 React.PureComponent 非常相似，只会对复杂的对象进行浅层比较。它适用于函数组件，但不适用于 class 组件。
                 * 它接受两个参数，第一个为被优化的函数组件，第二个为对比函数。与 class 组件中 shouldComponentUpdate() 方法不同的是，如果 props 相等，
                 * areEqual 会返回 true；如果 props 不相等，则返回 false。这与 shouldComponentUpdate 方法的返回值相反。此方法仅作为性能优化的方式而存在。
                 * 但请不要依赖它来“阻止”渲染，因为这会产生 bug。
                 */}
            </div>
        )
    }
}
