import React from 'react'
import ReactDOM from 'react-dom'

import { Song } from './rehman/helpers/song'
import { Kick, Snare, Hihat, Bass, Lead, Note } from './rehman/instruments'

const SevenNationArmy = () => <Song />

ReactDOM.render(<SevenNationArmy />, document.getElementById('root'))
