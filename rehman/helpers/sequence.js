import Tone from 'tone'

const sequence = (instrument, notes) => {
  new Tone.Part((time, note) => {
    instrument.triggerAttackRelease(
      note.name,
      note.duration,
      time,
      note.velocity
    )
  }, notes).start()
}

export default sequence
