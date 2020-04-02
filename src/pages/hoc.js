import React from 'react'

function withHOC(Component) {
  return class extends React.Component {
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
          onMouseMove={e => {
            this.handleMouseMove(e)
          }}
        >
          <Component {...this.props} data={this.state} />
        </div>
      )
    }
  }
}

class MouseText extends React.Component {
  render() {
    return (
      <p style={{ height: '200px', border: '1px solid' }}>
        位置：{this.props.data.x} * {this.props.data.y}
      </p>
    )
  }
}

export const MouseTextHOC = withHOC(MouseText)
