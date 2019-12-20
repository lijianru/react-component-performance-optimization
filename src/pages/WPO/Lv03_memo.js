import React, { Component, memo } from 'react'
import { isEqual } from 'lodash'

const Lee = memo(function Lee(props) {
  console.log('Lee render')
  console.log(props.person)
  return (
    <div>Lee</div>
  )
})

const Foo = memo(function Foo(props) {
    console.log('Foo render')
    console.log(props.person)
    return (
        <div>Foo</div>
    )
})

const Bar = memo(function Bar(props) {
  console.log('Bar render')
  console.log(props.person)
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

export default class Demo3 extends Component {
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
            </div>
        )
    }
}
