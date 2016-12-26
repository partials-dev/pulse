export default function beatsBeforeChange (beat, changeInterval) {
  if (changeInterval < 1) {
    return Number.POSITIVE_INFINITY
  }
  return changeInterval - (beat % changeInterval)
}
