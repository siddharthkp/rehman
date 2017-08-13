import drums from './songs/seven-nation-army/drums'
import baseline from './songs/seven-nation-army/baseline'

import song from './helpers/song'
import { kick, snare, base } from './instruments'

song.addSequence(kick, drums.notes)
song.addSequence(snare, drums.notes)
song.addRiff(base, baseline.notes)

song.create({
  name: 'Seven Nation Army',
  bpm: 120,
  repeat: 4000
})
