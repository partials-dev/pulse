
const searchUrlFor = (query, limit, offset) => {
  const api = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&'
  return api + `q=${query}&limit=${limit}&offset=${offset}`
}

function parseWidthAndHeight (image) {
  image.height = parseInt(image.height)
  image.width = parseInt(image.width)
  return image
}

export default function searchGifs (query, page = 0, limit = 25) {
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
    if (srces.length > 0) {
      srces.length = 10
    }
    return srces
  })
}
