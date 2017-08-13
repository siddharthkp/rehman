import Tone from 'tone'

import sequence from './sequence'

const Song = meta => {
  Tone.Transport.bpm.value = meta.bpm
  Tone.Transport.start()
  setInterval(() => (Tone.Transport.position = 0), meta.repeat)
}

const Sequence = sequence

export { Song, Sequence }
