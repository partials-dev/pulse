import path from 'path'

const gifs = [
  'beyond-awareness',
  'the-beautiful-struggle',
  'theres-nothing-to-sphere-but-sphere-itself'
]

const pathFor = (gif, type) =>
  path.format({
    dir: __dirname,
    name: `${gif}-${type}`,
    ext: '.gif'
  })

const fixedWidth = gif => ({ url: pathFor(gif, 'fixed-width') })
const original = gif => ({ url: pathFor(gif, 'original') })

const format = gif => ({
  id: gif,
  fixedWidth: fixedWidth(gif),
  original: original(gif)
})

export default gifs.map(format)
