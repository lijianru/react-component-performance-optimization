import React, { PureComponent } from 'react'
import {person} from "../constants";

class Foo extends PureComponent {
    render() {
        console.log('Foo render')
        return (
            <div>Foo</div>
        )
    }
}

class Bar extends PureComponent {
    render() {
        const { person, num } = this.props
        console.log(`Bar${num} render`)
        return (
            <div>Bar{num} {person.info.age}</div>
        )
    }
}

class Lee extends PureComponent {
    render() {
        console.log('Lee render')
        return (
            <div>Lee</div>
        )
    }
}

class Hoo extends PureComponent {
    render() {
        console.log('Hoo render')
        return (
            <div>Hoo</div>
        )
    }
}

export default class Demo2 extends PureComponent {
    state = {
        count: 0,
    }

    handleHoo = () => {}

    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={() => { this.setState({ count: count + 1 }) }}>Click count</button>
                <p>count: {count}</p>
                <Foo name={'Richard'} />
                <Bar num={1} person={{info: {age: 18}}} />
                <Bar num={2} person={person} />
                <Lee handle={() => {}} />
                <Hoo handle={this.handleHoo} name={'Richard'} />
                {/**
                 * React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，
                 * 而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。
                 *
                 * 当点击Click count按钮的时候我们发现只有第一个Bar和Lee组件重新渲染了。比较Foo组件和第一个Bar组件我们发现，
                 * 传入Foo组件的是一个基本类型（字符串），而传入第一个Bar组件的是一个引用类型（对象）。由于在点击Click的时候Demo2组件会重新渲染，
                 * 这时候虽然传递给第一个Bar组建的对象还是{info: {age: 18}}，但它已经和之前的{info: {age: 18}}不是一个对象了，
                 * 比较前后两次的{info: {age: 18}}一定会得到false，所以第一个Bar组件会渲染。Lee组件也是同样的道理，即便handle上传递的函数一直都是() => {}。
                 *
                 * 那为什么第二个Bar组件却没有渲染？因为我们将person对象提取出来，脱离React组件而存在。在这个应用启动的时候仅仅只为它分配一次内存空间，
                 * 所以传如第二个子组件的person始终不会发生变化。
                 *
                 * 那为什么Lee组件渲染了而Hoo组件却没有渲染呢？因为我们将函数绑定到类的属性上，即便父组件重新发生渲染，this.handleHoo总是那个组件初始化的函数。
                 */}
            </div>
        )
    }
}
