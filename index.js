import Tone from 'tone'

import meta from './songs/seven-nation-army/meta'
import drums from './songs/seven-nation-army/drums'
import baseline from './songs/seven-nation-army/baseline'

import sequence from './helpers/sequence'
import riff from './helpers/riff'

import kick from './instruments/kick'
import snare from './instruments/snare'
import base from './instruments/base'

Tone.Transport.bpm.value = meta.bpm

sequence(kick, drums.notes)
sequence(snare, drums.notes)
riff(base, baseline.notes)

Tone.Transport.start()
setInterval(() => (Tone.Transport.position = 0), 4000)
