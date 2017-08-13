import Tone from 'tone'

const distortion = new Tone.Distortion({
  distortion: 0.4,
  wet: 0.4
})

const compress = new Tone.Compressor({
  threshold: -30,
  ratio: 6,
  attack: 0.3,
  release: 0.1
}).toMaster()

const snare = new Tone.Sampler({
  url: './audio/snare.mp3',
  envelope: {
    attack: 0.01,
    decay: 0.05,
    sustain: 0
  }
}).chain(distortion, compress)

export default snare
