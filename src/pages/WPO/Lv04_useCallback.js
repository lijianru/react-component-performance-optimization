import React, { useState, memo, useCallback } from 'react';
import { isEqual } from 'lodash';

const Foo = memo(
  function Foo(props) {
    console.log('Lv04_useCallback: Foo render');
    return (
      <>
        <h1>{props.name}</h1>
      </>
    );
  },
  function (prevProps, nextProps) {
    let propsIsEqual = true;
    for (let key in prevProps.person) {
      propsIsEqual = isEqual(prevProps[key], nextProps[key]);
    }
    return propsIsEqual;
  }
);

const Bar = memo(function Bar(props) {
  console.log(`Lv04_useCallback: ${props.name} render`);
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
});

export default function Demo4() {
  const [title, setTitle] = useState(0);

  const callback = () => {
    setTitle(new Date().getTime());
  };

  const callbackUseHook = useCallback(() => {
    setTitle(new Date().getTime());
  }, []);

  return (
    <div className="App">
      <h1>主标题：{title}</h1>
      <button onClick={() => setTitle(new Date().getTime())}>改副标题</button>
      <Foo onClick={callback} name="Richard" />
      <Bar num={1} onClick={callback} name="Richard1" />
      <Bar num={2} onClick={callbackUseHook} name="Richard2" />
    </div>
  );
}
