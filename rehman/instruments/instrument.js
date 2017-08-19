import React from 'react'

const Instrument = instrument => {
  return new Promise((resolve, reject) => {
    const context = window.context

    let ext = 'wav'
    if (instrument.length === 1) ext = 'ogg'
    else if (instrument.length === 2) ext = 'm4a'

    const url = `./rehman/audio/${instrument}.${ext}`

    new BufferLoader(context, url, audioBuffer => {
      resolve(audioBuffer)
    }).load()
  })
}

export default Instrument
