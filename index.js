import React from 'react'
import ReactDOM from 'react-dom'

import { Song, Sequence } from './rehman/helpers/song'
import { Kick, Snare, Hihat, Bass, Lead, Note } from './rehman/instruments'

const SevenNationArmy = () =>
  <Song>
    <Kick>x x x x x x x x</Kick>
    <Snare>x o x o x o x o</Snare>
    <Lead>
      <Note time="0" duration="0.75">E</Note>
      <Note time="0.75" duration="0.125">E</Note>
      <Note time="1" duration="0.125">G</Note>
      <Note time="1.375" duration="0.125">E</Note>
      <Note time="1.75" duration="0.25">D</Note>
      <Note time="2" duration="1">C</Note>
      <Note time="3" duration="1">B</Note>
    </Lead>
  </Song>

ReactDOM.render(<SevenNationArmy />, document.getElementById('root'))
