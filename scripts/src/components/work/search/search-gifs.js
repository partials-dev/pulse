import offlineGifs from './offline-gifs'

const searchUrlFor = (query, limit, offset) => {
  const api = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&'
  return api + `q=${query}&limit=${limit}&offset=${offset}`
}

// TODO: I think we can remove this functionality
// since the app doesn't do anything with the
// width or height of the gifs
function parseWidthAndHeight (image) {
  image.height = parseInt(image.height)
  image.width = parseInt(image.width)
  return image
}

function searchGifsOffLine (query, page = 0, limit = 25) {
  const offset = page * limit
  const results = offlineGifs.slice(offset, offset + limit)
  return Promise.resolve(results)
}

function searchGifsOnLine (query, page = 0, limit = 25) {
  const offset = page * limit
  const searchUrl = searchUrlFor(query, limit, offset)
  return window.fetch(searchUrl).then(response => {
    return response.json()
  }).then(json => {
    const srces = json.data.map(gifData => {
      const fixedWidth = parseWidthAndHeight(gifData.images.fixed_width)
      const original = parseWidthAndHeight(gifData.images.original)
      return {
        fixedWidth,
        original,
        id: gifData.id
      }
    })
    // TODO: is this necessary? I think the limit parameter we pass to searchUrlFor
    // should probably handle it.
    if (srces.length > 0) {
      srces.length = limit
    }
    return srces
  })
}

export default function searchGifs (onLine, ...args) {
  if (onLine) {
    return searchGifsOnLine(...args)
  } else {
    return searchGifsOffLine(...args)
  }
}
