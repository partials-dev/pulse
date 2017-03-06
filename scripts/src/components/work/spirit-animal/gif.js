import defineBeatGif from '../define-beat-gif'

function mapStateToSrc ({ spiritAnimal: { src } }) {
  return src
}

const SpiritAnimalGif = defineBeatGif(mapStateToSrc)

export default SpiritAnimalGif
