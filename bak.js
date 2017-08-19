import React from 'react'
import ReactDOM from 'react-dom'

import { Song } from './rehman/helpers/song'
import { Kick, Snare, Hihat, Bass, Lead, Note } from './rehman/instruments'

const SevenNationArmy = () =>
  <Song>
    <Kick>x x x x x x x x</Kick>
    <Snare>x o x o x o x o</Snare>
    <Hihat>x x x x x x x x</Hihat>
    <Bass>E E E E B B B B</Bass>
    <Lead>
      <Note time="0" duration="0.75">E2</Note>
      <Note time="0.75" duration="0.25">E2</Note>
      <Note time="1" duration="0.25">G2</Note>
      <Note time="1.375" duration="0.25">E2</Note>
      <Note time="1.75" duration="0.25">D2</Note>
      <Note time="2" duration="1">C2</Note>
      <Note time="3" duration="0.75">B1</Note>
    </Lead>
  </Song>

ReactDOM.render(<SevenNationArmy />, document.getElementById('root'))
