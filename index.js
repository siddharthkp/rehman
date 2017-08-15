import React from 'react'
import ReactDOM from 'react-dom'

import { Song, Sequence } from './rehman/helpers/song'
import { Kick, Snare, Hihat, Bass } from './rehman/instruments'

const Null = () => null

const SevenNationArmy = () =>
  <Song>
    <Sequence>
      <Kick /><Kick /><Kick /><Kick /><Kick /><Kick /><Kick /><Kick />
    </Sequence>
    <Sequence>
      <Snare /><Null /><Snare /><Null /><Snare /><Null /><Snare /><Null />
    </Sequence>

    <Sequence>
      <Bass time="0" chord="E2" />
      <Bass time="0.75" duration="0.125" chord="E2" />
      <Bass time="1" duration="0.125" chord="G2" />
      <Bass time="1.375" duration="0.125" chord="E2" />
      <Bass time="1.75" duration="0.25" chord="D2" />
      <Bass time="2" duration="1" chord="C2" />
      <Bass time="3" duration="1" chord="B1" />
    </Sequence>
  </Song>

ReactDOM.render(<SevenNationArmy />, document.getElementById('root'))
