import React, { useState, useMemo } from 'react'

export default function Demo5() {
  const [num, setNum] = useState(0);

  function expensiveFn() {
    console.log('expensiveFn')
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    console.log(result)
    return result;
  }

  // 通过useMemo将计算结果缓存起来，避免在组件重新渲染的时候再次执行expensiveFn函数
  const base = useMemo(expensiveFn, []);
  // const base = expensiveFn()

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  )
}
