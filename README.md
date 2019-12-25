# react组件性能优化
## 类组件的性能优化
### shouldComponentUpdate
```javascript
// 子组件
class Foo extends Component {
    render() {
        console.log('Foo render')
        return (
            <div>Foo</div>
        )
    }
}

// 父组件
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
```


### PureComponent
## 函数组件的性能优化
### memo
### useCallback
### useMemo
