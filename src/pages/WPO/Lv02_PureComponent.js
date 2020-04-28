import React, { PureComponent } from 'react';
import { person } from '../constants';

class Foo extends PureComponent {
  render() {
    console.log('Lv02_PureComponent: Foo render');
    return <div>Foo</div>;
  }
}

class Bar extends PureComponent {
  render() {
    const { person, num } = this.props;
    console.log(`Lv02_PureComponent: Bar${num} render`);
    return (
      <div>
        Bar{num} {person.info.age}
      </div>
    );
  }
}

class Lee extends PureComponent {
  render() {
    console.log(`Lv02_PureComponent: Lee${this.props.num} render`);
    return <div>Lee</div>;
  }
}

export default class Demo2 extends PureComponent {
  state = {
    count: 0,
  };

  handleHoo = () => {};

  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Click count
        </button>
        <p>count: {count}</p>
        <Foo name={'Richard'} />
        <Bar num={1} person={{ info: { age: 18 } }} />
        <Bar num={2} person={person} />
        <Lee num={1} handle={() => {}} />
        <Lee num={2} handle={this.handleLee} />
      </div>
    );
  }
}
