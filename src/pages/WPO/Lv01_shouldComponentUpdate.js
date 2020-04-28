import React, { Component } from 'react';

class Foo extends Component {
  // 去掉5-7行注释，查看效果
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.name !== this.props.name;
  // }

  render() {
    console.log('Lv01_shouldComponentUpdate: Foo render');
    return <div>Foo</div>;
  }
}

export default class Demo1 extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
        <p>count: {this.state.count}</p>
        <Foo name={'Richard'} />
      </div>
    );
  }
}
