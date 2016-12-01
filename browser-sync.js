// Create a Browsersync instance
const bs = require('browser-sync').create()
const stringify = require('json-stringify-safe')
const port = 3000

module.exports = function startBrowserSync () {
  return new Promise((resolve, reject) => {
    // Listen to change events on HTML and reload
    bs.watch('js/**/*.js').on('change', bs.reload)
    bs.watch('index.html').on('change', bs.reload)
    bs.watch('styles/**/*.css').on('change', bs.reload)

    // Now init the BrowserSync server
    bs.init({ server: './', port }, (a, b) => {
      resolve(`http://localhost:${port}`)
    })
  })
}
