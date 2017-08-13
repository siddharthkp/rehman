import Tone from 'tone'

import sequence from './sequence'
import riff from './riff'

const song = (meta, repeat) => {
  Tone.Transport.bpm.value = meta.bpm
  Tone.Transport.start()
  setInterval(() => (Tone.Transport.position = 0), 4000)
}

export default song

export { sequence, riff }
