import Tone from 'tone'

const chords = {
  E: 'E2',
  E: 'E2',
  G: 'G2',
  E: 'E2',
  D: 'D2',
  C: 'C2',
  B: 'B1',
  F: 'F2',
  x: 0
}

const renderer = (keys, instrument) => {
  let notes = []
  if (typeof keys === 'string') {
    notes = keys.split(' ').map((key, index) => ({ chord: key, time: index * 0.5 }))
  } else {
    notes = keys.map(key => ({
      time: key.props.time,
      chord: key.props.children,
      duration: key.props.duration
    }))
  }

  notes.map((note, index) => {
    if (note.chord !== 'o') {
      new Tone.Part(
        (time, tone) => {
          instrument.triggerAttackRelease(
            chords[note.chord],
            note.duration || 0.75, // duration
            time,
            0.75 //velocity
          )
        },
        [note]
      ).start()
    }
  })
}

export default renderer
