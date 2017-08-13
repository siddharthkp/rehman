import Tone from 'tone'

const add = (instrument, notes) => {
  new Tone.Part((time, note) => {
    instrument.triggerAttackRelease(
      note.name,
      note.duration,
      time,
      note.velocity
    )
  }, notes).start()
}

const riff = { add }

export default riff
