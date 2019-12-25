import React, { Component } from 'react'

class Foo extends Component {
    /**
     * 当点击Demo1组件中的Click按钮的时候，Foo组件会重新渲染，即使传入它的props没有发生改变。
     *
     * 自定义子组件的shouldComponentUpdate这个生命周期函数可以实现对它的性能优化：比较本次和下一次传入Foo组件的props，
     * 如果一致将不会渲染（shouldComponentUpdate返回false），否则将会渲染（shouldComponentUpdate返回true）。
     *
     * 此方法仅作为性能优化的方式存在，不要企图依靠此方法来阻止渲染，因为这可能产生bug。你应该考虑使用内置的PureComponent，
     * 而不是手动来编写shouldComponentUpdate()
     */
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.name !== this.props.name
    // }

    render() {
        console.log('Foo render')
        return (
            <div>Foo</div>
        )
    }
}

export default class Demo1 extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
                <p>count: {this.state.count}</p>
                <Foo name={'Richard'} />
            </div>
        )
    }
}
