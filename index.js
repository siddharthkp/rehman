import meta from './songs/seven-nation-army/meta'
import drums from './songs/seven-nation-army/drums'
import baseline from './songs/seven-nation-army/baseline'

import song, { sequence, riff } from './helpers/song'
import { kick, snare, base } from './instruments'

sequence.add(kick, drums.notes)
sequence.add(snare, drums.notes)
riff.add(base, baseline.notes)

song(meta, 4000)
