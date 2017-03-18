const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

export function unlink (filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export function writeFile (filePath, data, encoding = null) {
  return new Promise((resolve, reject) => {
    // make sure directory exists
    const dir = path.parse(filePath).dir
    mkdirp(dir, mkdirpError => {
      if (mkdirpError) {
        reject(mkdirpError)
        return
      }
      fs.writeFile(filePath, data, encoding, writeFileError => {
        if (writeFileError) {
          reject(writeFileError)
          return
        }
        resolve(filePath)
      })
    })
  })
}

export function readFile (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
