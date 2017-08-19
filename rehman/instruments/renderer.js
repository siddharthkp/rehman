const renderer = (keys, instrument) => {
  let notes = []
  if (typeof keys === 'string') {
    notes = keys.split(' ').map((key, index) => ({ chord: key, time: index * 0.5 }))
  }
  const play = () => {
    notes.map((note, index) => {
      if (note.chord !== 'o') {
        const context = window.context
        const source = context.createBufferSource()
        source.buffer = instrument

        source.connect(context.destination)
        setTimeout(() => {
          source.start()
          setTimeout(() => source.stop(), (note.duration || 0.75) * 1000)
        }, note.time * 1000)
      }
    })
  }
  play()
  setInterval(play, 4000)
}

export default renderer
