import { readFile, writeFile, unlink } from './fs-promise'

const app = require('electron').remote.app
const path = require('path')
const url = require('url')

const appDataPath = app.getPath('appData')
const appName = app.getName()
const cacheDirectory = path.join(appDataPath, appName)

function pathFor (gif) {
  if (gif) {
    return path.join(cacheDirectory, `${gif.id}.gif`)
  }
}

const isHttp = gifUrl => {
  const protocol = url.parse(gifUrl).protocol
  return protocol && protocol.indexOf('http') >= 0
}

function readUrl (gifUrl) {
  return window.fetch(gifUrl).then(response => {
    return response.arrayBuffer()
  }).then(arrayBuffer => new Buffer(arrayBuffer))
}

function read (gifUrl) {
  if (isHttp(gifUrl)) {
    return readUrl(gifUrl)
  } else {
    return readFile(gifUrl)
  }
}

function save (gif) {
  return read(gif.url).then(buffer => {
    const gifPath = pathFor(gif)
    return writeFile(gifPath, buffer)
  })
}

const LOCAL_STORAGE_KEY = 'cached-gif-metadata'

const unlinkIfPathExists = path => {
  if (path) {
    return unlink(path)
  } else {
    return Promise.resolve(null)
  }
}

export default {
  get path () {
    return pathFor(this.get())
  },
  get _cachedGifMetadata () {
    const stringified = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    return JSON.parse(stringified)
  },
  set _cachedGifMetadata (metadata) {
    const stringified = JSON.stringify(metadata)
    window.localStorage.setItem(LOCAL_STORAGE_KEY, stringified)
  },
  set (gif) {
    return save(gif).then(localGifPath => {
      return unlinkIfPathExists(this.path).then(() => localGifPath)
    }).then(localGifPath => {
      this._cachedGifMetadata = {
        id: gif.id,
        url: localGifPath
      }
      return localGifPath
    })
  },
  get () {
    return this._cachedGifMetadata
  }
}
