import React from 'react'
import renderer from './renderer'
import getFrequency from './frequency'
import loadInstrument from './instrument'

class Lead extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.children)
    this.state = {
      notes: props.children.map(note => ({
        chord: note.props.children.trim(),
        time: note.props.time,
        duration: note.props.duration
      }))
    }
  }
  play() {
    this.state.notes.map((note, index) => {
      loadInstrument(note.chord).then(instrument => {
        const source = window.context.createBufferSource()
        source.buffer = instrument

        const gainNode = context.createGain()
        gainNode.gain.value = 3

        source.connect(gainNode).connect(context.destination)
        setTimeout(() => {
          source.start()
          setTimeout(() => source.stop(), (note.duration || 0.75) * 1000)
        }, note.time * 1000)
      })
    })
  }
  render() {
    this.play()
    setInterval(() => this.play(), 4000)

    return (
      <div className="instrument">
        <span className="name">lead</span>
        {this.state.notes.map((note, index) =>
          <span
            key={index}
            className="note custom"
            style={{ paddingLeft: note.duration * 100 - 2 + 'px' }}
          >
            {note.chord}
          </span>
        )}
      </div>
    )
  }
}

export default Lead
