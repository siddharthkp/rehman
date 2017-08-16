import React from 'react'
import Tone from 'tone'
import renderer from './renderer'

const distortion = new Tone.Distortion({
  distortion: 0.4,
  wet: 0.4
})

const compress = new Tone.Compressor({
  threshold: -30,
  ratio: 6,
  attack: 0.3,
  release: 0.1
})

const synth = new Tone.Synth().toMaster()
synth.set('detune', -100)
synth.set('volume', 15)

class Lead extends React.Component {
  render() {
    renderer(this.props.children, synth)
    return <span>lead</span>
  }
}

export default Lead
