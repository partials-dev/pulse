import React from 'react'
import { connect } from 'react-redux'
import Tiles from '../../look/tiles'
import defineBeatGif from '../define-beat-gif'
import { TOGGLE_SEARCH, SET_SPIRIT_ANIMAL_SRC } from '../../../reducers/actions'
import gifCache from '../../../gif-cache'

const xor = (a, b) => (a && !b) || (!a && b)
const onlyOneIsDefined = (a, b) => xor(a == null, b == null)

class SearchResults extends React.Component {
  shouldComponentUpdate (nextProps) {
    if (nextProps.onLine !== this.props.onLine) {
      return true
    }
    if (nextProps.children.length !== this.props.children.length) {
      return true
    }
    if (this.props.loading !== nextProps.loading) {
      return true
    }

    const childIsDifferent = (child, i) => {
      const nextChild = nextProps.children[i]
      if (onlyOneIsDefined(child, nextChild)) {
        return true
      }
      return (nextChild !== child) && (child.key !== nextChild.key)
    }
    const childrenChanged = this.props.children.some(childIsDifferent)
    return childrenChanged
  }
  render () {
    // const children = this.props.loading ? 'loading...' : this.props.children
    if (this.props.loading) {
      return <div>loading!</div>
    } else {
      return <Tiles children={this.props.children} />
    }
  }
}

function getBeatGifForResult (result) {
  const returnFixedWidthSrc = () => result.fixedWidth.url
  const setSpiritAnimalSrc = dispatch => {
    return {
      key: result.id,
      onClick: () => {
        gifCache.set({ id: result.id, url: result.original.url }).then(localPath => {
          dispatch({ type: SET_SPIRIT_ANIMAL_SRC, src: localPath })
          dispatch({ type: TOGGLE_SEARCH })
        })
        // window.fetch(result.original.url).then(response => {
        //   return response.arrayBuffer()
        // }).then(arrayBuffer => {
        //   var buffer = new Buffer(arrayBuffer)
        //   return saveToAppData(buffer, ['gif-cache'], `${result.id}_original.gif`)
        // }).then(localPath => {
        //   dispatch({ type: SET_SPIRIT_ANIMAL_SRC, src: localPath })
        //   dispatch({ type: TOGGLE_SEARCH })
        // })
      }
    }
  }
  const BeatGifForResult = defineBeatGif(returnFixedWidthSrc, setSpiritAnimalSrc)
  const component = <BeatGifForResult key={result.id} className='clickable search-result' />

  return component
}

function mapStateToProps ({ onLine, search: { results, loading } }) {
  const children = results.map(getBeatGifForResult)
  return { children, loading, onLine }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults)
