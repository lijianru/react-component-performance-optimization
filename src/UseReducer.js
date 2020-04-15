import React, { useReducer } from 'react'

/**
 * useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。
 * 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等
 * useReducer接收三个参数：第一个为reducer函数，第二个为初始state，惰性初始化state的函数
 */

function init(initialCount) {
  return { count: initialCount }
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

export default function Counter1({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
