import drums from './drums'
import baseline from './baseline'

import song from '../../react-helpers/song'
import { kick, snare, base } from '../../instruments'

const meta = {
  name: 'Seven Nation Army',
  bpm: 120,
  repeat: 4000
}

const SevenNationArmy = () =>
  <Song meta={meta}>
    <Sequence instrument={kick} notes={drums.notes} />
    <Sequence instrument={snare} notes={drums.notes} />
    <Riff instrument={base} notes={baseline.notes} />
    <Sequence />
  </Song>

export default SevenNationArmy
