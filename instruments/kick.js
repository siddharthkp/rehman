import Tone from 'tone'

const compress = new Tone.Compressor({
  threshold: -30,
  ratio: 6,
  attack: 0.3,
  release: 0.1
}).toMaster()

const kick = new Tone.MembraneSynth({
  pitchDecay: 0.01,
  octaves: 6,
  oscillator: {
    type: 'square4'
  },
  envelope: {
    attack: 0.001,
    decay: 0.2,
    sustain: 0
  }
}).chain(compress)

export default kick
