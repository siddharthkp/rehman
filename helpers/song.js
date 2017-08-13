import Tone from 'tone'

import sequence from './sequence'
import riff from './riff'

const song = {}

const Song = meta => {
  Tone.Transport.bpm.value = meta.bpm
  Tone.Transport.start()
  setInterval(() => (Tone.Transport.position = 0), meta.repeat)
}

const Sequence = sequence.add
const Riff = riff.add

export { Song, Sequence, Riff }
