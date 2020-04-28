import React, { memo, useState, useMemo } from 'react';
import { expensiveFnCopy } from '../constants';

const Foo = memo(function (props) {
  console.log(`Lv05_useMemo: Foo${props.name} Render`);
  return <div>Foo {props.name}</div>;
});

export default function Demo5() {
  const [num, setNum] = useState(0);

  function expensiveFn(type) {
    console.log(`Lv05_useMemo: expensiveFn ${type}`);
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    return result;
  }

  const base1 = expensiveFn('base1');
  const base2 = useMemo(() => expensiveFn('base2'), []);
  const base3 = expensiveFnCopy('base3');
  const base4 = useMemo(() => expensiveFnCopy('base4'), []);

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + 1)}>Sum</button>
      <Foo name={1} person={base1} />
      <Foo name={2} person={base2} />
      <Foo name={3} person={base3} />
      <Foo name={4} person={base4} />
    </div>
  );
}
