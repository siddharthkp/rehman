import drums from './drums'
import baseline from './baseline'

import song from '../../helpers/song'
import { kick, snare, base } from '../../instruments'

song.create({
  name: 'Seven Nation Army',
  bpm: 120,
  repeat: 4000
})

song.addSequence(kick, drums.notes)
song.addSequence(snare, drums.notes)
song.addRiff(base, baseline.notes)
