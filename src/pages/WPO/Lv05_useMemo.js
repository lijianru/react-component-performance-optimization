import React, { memo, useState, useMemo } from 'react';
import { expensiveFnCopy } from '../constants';

const Foo = memo(function (props) {
  console.log(`Lv05_useMemo: Foo${props.name} Render`);
  return <div>Foo</div>;
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

  function getData(type) {
    console.log(`Lv05_useMemo: getData ${type}`);
    return {
      info: {
        age: 18,
      },
    };
  }

  const base = expensiveFn('base');
  const base1 = expensiveFnCopy();
  const base2 = useMemo(() => expensiveFn('base2'), []);

  const base3 = {
    info: {
      age: 18,
    },
  };
  const base4 = getData('base3');
  const base5 = useMemo(() => getData('base4'), []);

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + base + base1 + base2)}>Sum</button>
      <Foo name={1} person={base3} />
      <Foo name={2} person={base4} />
      <Foo name={3} person={base5} />
      <Foo name={4} person={'Richard'} />
    </div>
  );
}
