import drums from './drums'
import baseline from './baseline'

import { Song, Sequence, Riff } from '../../helpers/song'
import { kick, snare, base } from '../../instruments'

Song({
  name: 'Seven Nation Army',
  bpm: 120,
  repeat: 4000
})

Sequence(kick, drums.notes)
Sequence(snare, drums.notes)
Riff(base, baseline.notes)
