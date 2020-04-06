import React, { useState, useEffect, useMemo, useLayoutEffect, useRef } from 'react'

export function Hooks() {
  const [count, setCount] = useState(0)

  const double = useMemo(() => {
    console.log('useMemo')
    return count * 2
  }, [count])

  useEffect(() => {
    console.log('useEffect')
    document.title = count
  }, [count])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [count])

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
      <p>Count: {count}</p>
      {console.log('render')}
    </div>
  )
}

export function TextInputWithFocusButton() {
  const inputEl = useRef()
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    console.log(inputEl)
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}

export function RefPrevState() {
  const [count, setCount] = useState(0)
  const prevCount = useRef(null)

  useEffect(() => {
    prevCount.current = count
  }, [count])

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click {count}</button>
      <p>Prev Count: {prevCount.current}</p>
      <p>Current Count: {count}</p>
    </div>
  )
}

export function ClearInterval() {
  const [count, setCount] = useState(0)
  const it = useRef()

  useEffect(() => {
    it.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (count > 10) {
      clearInterval(it.current)
    }
  }, [count])

  return <p>{count}</p>
}
