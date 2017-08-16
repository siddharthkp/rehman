import React from 'react'
import ReactDOM from 'react-dom'

import { Song, Sequence } from './rehman/helpers/song'
import { Kick, Snare, Hihat, Bass } from './rehman/instruments'

const SevenNationArmy = () =>
  <Song>
    <Sequence name="kick">
      <Kick /><Kick /><Kick /><Kick /><Kick /><Kick /><Kick /><Kick />
    </Sequence>
    <Sequence name="snare">
      <Snare time="0" />
      <Snare time="1" />
      <Snare time="2" />
      <Snare time="3" />
    </Sequence>
    <Sequence name="bass">
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
