import React from 'react'
import Timer from './timer'

class Song extends React.Component {
  render() {
    return (
      <div>
        <Timer />
        {this.props.children}
      </div>
    )
  }
}

export { Song }
