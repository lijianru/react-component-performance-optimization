import React from 'react';
import Demo1 from "./pages/WPO/Lv01_shouldComponentUpdate";
import Demo2 from "./pages/WPO/Lv02_PureComponent";
import Demo3 from "./pages/WPO/Lv03_memo";
import Demo4 from "./pages/WPO/Lv04_useMemo_useCallback";

function App() {
  return (
    <div>
      <h3>Lv01_shouldComponentUpdate</h3>
      <Demo1/>
      <hr/>
      <h3>Lv02_PureComponent</h3>
      <Demo2/>
      <hr/>
      <h3>Lv03_memo</h3>
      <Demo3/>
      <hr/>
      <h3>Lv04_useMemo</h3>
      <Demo4/>
    </div>
  );
}

export default App;
