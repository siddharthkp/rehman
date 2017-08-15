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
synth.volume.value = 15

class Bass extends React.Component {
  render() {
    renderer(this.props, synth)
    return <span>bass</span>
  }
}

export default Bass
