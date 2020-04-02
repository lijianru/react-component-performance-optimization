import React from 'react'

class Add extends React.Component {
  render() {
    const { mouse } = this.props
    return (
      <img
        alt="Add"
        src="./icon.png"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      />
    )
  }
}

class Location extends React.Component {
  render() {
    const { location } = this.props
    return (
      <p>
        位置：{location.x} * {location.y}
      </p>
    )
  }
}

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0,
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <div
        style={{ height: '200px', border: '1px solid' }}
        onMouseMove={e => {
          this.handleMouseMove(e)
        }}
      >
        {this.props.render(this.state)}
      </div>
    )
  }
}

export class MouseAdd extends React.Component {
  render() {
    return <Mouse render={mouse => <Add mouse={mouse} />} />
  }
}

export class MouseText extends React.Component {
  render() {
    return <Mouse render={location => <Location location={location} />} />
  }
}
