import Tone from 'tone'

import meta from './songs/seven-nation-army/meta'
import drums from './songs/seven-nation-army/drums'
import baseline from './songs/seven-nation-army/base'

import kick from './instruments/kick'
import snare from './instruments/snare'
import base from './instruments/base'

const synth = new Tone.Synth().toMaster()

Tone.Transport.bpm.value = meta.bpm

const kickPart = new Tone.Sequence((time, note) => {
  kick.triggerAttackRelease(2, note.duration, time, note.velocity)
}, drums.notes).start()

const snarePart = new Tone.Sequence((time, note) => {
  snare.triggerAttackRelease(0, note.duration, time, note.velocity)
}, drums.notes).start()

const basePart = new Tone.Part((time, note) => {
  synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
}, baseline.notes).start()

Tone.Transport.start()

setInterval(() => (Tone.Transport.position = 0), 4000)
