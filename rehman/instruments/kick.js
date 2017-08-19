import React from 'react'
import renderer from './renderer'
import loadInstrument from './instrument'

class Kick extends React.Component {
  constructor(props) {
    super(props)
    const notes = this.props.children.trim().split(' ')
    this.state = { notes }
  }
  componentDidMount() {
    loadInstrument('kick').then(instrument => this.setState({ instrument }))
  }
  getEventSource(instrument) {
    const context = window.context
    const source = context.createBufferSource()
    source.buffer = instrument
    source.connect(context.destination)
    return source
  }
  play() {
    this.state.notes.map((note, index) => {
      const source = this.getEventSource(this.state.instrument)
      const duration = 0.75
      setTimeout(() => {
        source.start()
        setTimeout(() => source.stop(), duration * 1000)
      }, index * 0.5 * 1000)
    })
  }
  render() {
    if (this.state.instrument) {
      this.play()
      setInterval(() => this.play(), 4000)
    }
    return (
      <div className="instrument">
        <span className="name">kick</span>
        {this.state.notes.map((note, index) => <span key={index} className="note">{note}</span>)}
      </div>
    )
  }
}

export default Kick
