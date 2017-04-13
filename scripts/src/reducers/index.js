import { combineReducers } from 'redux'
import tempo from './tempo'
import play from './play'
import search from './search'
import spiritAnimal from './spirit-animal'
import onLine from './on-line'

export default combineReducers({
  tempo,
  play,
  search,
  spiritAnimal,
  onLine
})
