import React from 'react'
import renderer from './renderer'
import getFrequency from './frequency'
import loadInstrument from './instrument'

class Bass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notes: props.children.trim().split(' ') }
  }
  play() {
    this.state.notes.map((note, index) => {
      loadInstrument(note).then(instrument => {
        const source = window.context.createBufferSource()
        source.buffer = instrument

        const gainNode = context.createGain()
        gainNode.gain.value = 3

        source.connect(gainNode).connect(context.destination)
        setTimeout(() => {
          source.start()
          setTimeout(() => source.stop(), 0.75 * 1000)
        }, index * 0.5 * 1000)
      })
    })
  }
  render() {
    this.play()
    setInterval(() => this.play(), 4000)

    return (
      <div className="instrument">
        <span className="name">bass</span>
        {this.state.notes.map((note, index) => <span key={index} className="note">{note}</span>)}
      </div>
    )
  }
}

export default Bass
