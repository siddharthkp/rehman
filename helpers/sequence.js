import Tone from 'tone'

const sequence = (instrument, notes) => {
  new Tone.Sequence((time, note) => {
    instrument.triggerAttackRelease(2, note.duration, time, note.velocity)
  }, notes).start()
}

export default sequence
