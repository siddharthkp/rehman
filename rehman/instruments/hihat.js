import React from 'react'
import renderer from './renderer'
import loadInstrument from './instrument'

class Hihat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    loadInstrument('hihat').then(instrument => this.setState({ instrument }))
  }
  render() {
    if (this.state.instrument) renderer(this.props.children, this.state.instrument)
    return (
      <div className="instrument">
        <span className="name">hihat</span>
        {this.props.children
          .trim()
          .split(' ')
          .map((note, index) => <span key={index} className="note">{note}</span>)}
      </div>
    )
  }
}

export default Hihat
