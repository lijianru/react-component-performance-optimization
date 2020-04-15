import React, { useState, memo, useMemo, useCallback } from 'react'

function SubCounter({ name, data }) {
  console.log('SubCounter render')
  return (
    <div>
      name: {name}, data: {data.number}
    </div>
  )
}

/**
 * 在传入子组件的props是引用数据类型的时候需要使用memo和useMemo来做性能优化，
 * useMemo的作用是在父组件渲染的时候保证某些数据的不变，例如传入子组件的data
 * memo函数的作用是保证传入props不变的时候阻止子组件的渲染
 */
const SubCounterMemo = memo(SubCounter)

function Counter() {
  console.log('Counter render')
  const [name, setName] = useState('计数器')
  const [number, setNumber] = useState(0)
  const data = useMemo(() => ({ number }), [number])
  const addClick = useCallback(() => {
    setNumber(number + 1)
  }, [number])
  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addClick}>{data.number}</button>
      <SubCounterMemo data={data} />
    </>
  )
}

export default Counter
