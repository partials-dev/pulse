import React from 'react'
import { connect } from 'react-redux'
import Tiles from '../../look/tiles'
import defineBeatGif from '../define-beat-gif'
import { TOGGLE_SEARCH, SET_SPIRIT_ANIMAL_SRC } from '../../../reducers/actions'

const xor = (a, b) => (a && !b) || (!a && b)
const onlyOneIsDefined = (a, b) => xor(a == null, b == null)

class SearchResults extends React.Component {
  shouldComponentUpdate (nextProps) {
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
    return this.props.loading ? <div>loading!</div> : <Tiles children={this.props.children} />
  }
}

function getBeatGifForResult (result) {
  const returnFixedWidthSrc = () => result.fixedWidth.url
  const setSpiritAnimalSrc = dispatch => {
    return {
      key: result.id,
      onClick: () => {
        dispatch({ type: SET_SPIRIT_ANIMAL_SRC, src: result.original.url })
        dispatch({ type: TOGGLE_SEARCH })
      }
    }
  }
  const BeatGifForResult = defineBeatGif(returnFixedWidthSrc, setSpiritAnimalSrc)
  const component = <BeatGifForResult key={result.id} className='clickable search-result' />

  return component
}

function mapStateToProps ({ search: { results, loading } }) {
  const children = results.map(getBeatGifForResult)
  return { children, loading }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults)
