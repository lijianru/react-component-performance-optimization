import React, { useState, useMemo, useEffect, memo, useCallback } from 'react'

const Foo = memo(function Foo(props) {
    console.log('Foo render')
    return (
        <div onClick={props.onClick}>Foo</div>
    )
})

export default function Demo4() {
    const [count, setCount] = useState(0)
    const [clickCount, setClickCount] = useState(0)

    useEffect(() => {
        console.log('useEffect')
    }, [count])

    // useEffect执行的是副作用，所以实在渲染之后执行的。但useMemo却是在渲染的时候执行的
    const double = useMemo(() => {
        console.log('useMemo')
        return count * 2
    }, [count === 3])

    // const onClick = useMemo(() => {
    //     return () => {
    //         console.log('Click')
    //     }
    // }, [])

    const onClick = useCallback(() => {
        console.log('Click')
        setClickCount(clickCount => clickCount +1)
    }, [])
    // useMemo(() => fn) === useCallback(fn)

    return (
        <div>
            <button onClick={() => { setCount(count+1) }}>Click</button>
            <p>count: {count}, double {double}</p>
            <Foo count={double} onClick={onClick} />
        </div>
    )
}
