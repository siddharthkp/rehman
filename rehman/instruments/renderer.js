import Tone from 'tone'

const renderer = (props, instrument) => {
  let note = Object.assign({}, { time: 0 }, props)
  new Tone.Part(
    (time, note) => {
      instrument.triggerAttackRelease(note.chord, note.duration || 0.75, time || 0, note.velocity || 0.75)
    },
    [note]
  ).start()
}

export default renderer
