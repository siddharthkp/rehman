import React from 'react'

class Speech extends React.Component {
  bolo(text) {
    const synth = window.speechSynthesis
    const voices = synth.getVoices()

    const speech = new SpeechSynthesisUtterance(text)
    speech.voice = voices[53]
    synth.speak(speech)
  }
  render() {
    window.bolo = this.bolo
    this.bolo(this.props.text)
    return null
  }
}

export default Speech
