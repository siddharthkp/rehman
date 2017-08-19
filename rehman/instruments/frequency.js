const getFrequency = chord => {
  const chords = {
    B: 61.735,
    C: 65.406,
    D: 73.416,
    E: 82.407,
    F: 87.307,
    G: 97.999
  }
  return chords[chord]
}

export default getFrequency
