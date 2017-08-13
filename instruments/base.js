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

const synth = new Tone.Synth().chain(compress, distortion)

export default synth
