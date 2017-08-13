import drums from './drums'
import baseline from './baseline'

import { Song, Sequence, Riff } from '../../helpers/song'
import { kick, snare, base, hihat } from '../../instruments'

Song({
  name: 'Seven Nation Army',
  bpm: 120,
  repeat: 4000
})

Riff(kick, drums.notes)
Riff(snare, drums.notes.filter((note, index) => index % 2))
Riff(hihat, drums.notes.filter((note, index) => index % 2 === 0))
Riff(base, baseline.notes)
