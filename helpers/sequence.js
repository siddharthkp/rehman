import Tone from 'tone'

const add = (instrument, notes) => {
  new Tone.Sequence((time, note) => {
    instrument.triggerAttackRelease(2, note.duration, time, note.velocity)
  }, notes).start()
}

const sequence = { add }

export default sequence
