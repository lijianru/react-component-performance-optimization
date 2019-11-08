import React, { Component, memo } from 'react'

// 对于函数组件可以使用memo来做性能优化
const Foo = memo(function Foo() {
    console.log('Foo render')
    return (
        <div>Foo</div>
    )
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
                <Foo name={'XX'} />
            </div>
        )
    }
}
