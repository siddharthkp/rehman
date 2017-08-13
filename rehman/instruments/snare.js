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
  url: './rehman/audio/snare.wav'
}).chain(distortion, compress)

export default snare
