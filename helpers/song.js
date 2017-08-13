import Tone from 'tone'

import sequence from './sequence'
import riff from './riff'

const song = {}

song.create = meta => {
  Tone.Transport.bpm.value = meta.bpm
  Tone.Transport.start()
  setInterval(() => (Tone.Transport.position = 0), meta.repeat)
}

song.addSequence = sequence.add
song.addRiff = riff.add

export default song
