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
        const { person } = this.props
        console.log('Bar render')
        return (
            <div>Bar {person.info.age}</div>
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
                <Bar person={{info: {age: 18}}} />
                {/*<Bar person={person} />*/}
                {/*即便handle上传递的函数一直都是() => {}，但是在点击按钮的更新count的时候Lee也会渲染，因为在Demo2组件重渲染的时候会创建一个新的() => {},所以在传递函数的时候尽量将函数定义在Demo2组件中*/}
                <Lee handle={() => {}} />
                <Hoo handle={this.handleHoo} name={'Richard'} />
            </div>
        )
    }
}
