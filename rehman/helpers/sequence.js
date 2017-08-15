import Tone from 'tone'
import React from 'react'

class Sequence extends React.Component {
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child, index) => {
          if (!child.props.time) {
            return React.cloneElement(child, { time: index * 0.5 })
          } else return child
        })}
      </div>
    )
  }
}

export default Sequence
