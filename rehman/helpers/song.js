import React from 'react'
import Tone from 'tone'

import sequence from './sequence'

class Song extends React.Component {
  render() {
    Tone.Transport.bpm.value = 120
    Tone.Transport.start()
    setInterval(() => (Tone.Transport.position = 0), 4000)
    return <div>{this.props.children}</div>
  }
}

const Sequence = sequence

export { Song, Sequence }
