import React, { useState, useMemo, useEffect, memo, useCallback } from 'react'

const Foo = memo(function Foo(props) {
    console.log('Foo render')
    console.log(props);
    return (
      <>
          <button onClick={props.onClick}>改标题</button>
          <h1>{props.name}</h1>
      </>
    );
})

export default function Demo4() {
    const [title, setTitle] = useState(0);
    const [subtitle, setSubtitle] = useState(0);

    const callback = useCallback(() => {
        setTitle((new Date()).getTime());
    }, [])

    return (
      <div className="App">
          <h1>主标题：{title}</h1>
          <h2>副标题：{subtitle}</h2>
          <button onClick={() => setSubtitle((new Date()).getTime())}>改副标题</button>
          <Foo onClick={callback} name="桃桃" />
      </div>
    );
}
