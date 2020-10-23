const { series, parallel, watch } = require('gulp')
const { runServer, reloadServer } = require('./server')
const { cleanDistFolder } = require('./clean')
const { copyStaticFiles } = require('./static')
const { buildMarkup } = require('./markup')
const { buildStyles } = require('./styles')
const { optimizeImages } = require('./images')
const { upload, uploadMin } = require('./upload')

// watchers
function runWatchers (cb) {
  // pug
  watch([
    'src/pages/**/*.pug',
    'src/layout/**/*.pug',
    'src/blocks/**/*.pug',
    'src/sections/**/*.pug'
  ], series(buildMarkup, reloadServer))

  // styles
  watch([
    'src/blocks/**/*.+(sass|scss)',
    'src/styles/**/*.+(sass|scss)',
    'src/pages/**/*.+(sass|scss)',
    'src/sections/**/*.+(sass|scss)'
  ], series(buildStyles, reloadServer))

  // static
  watch([
    'static/**/*'
  ], series(copyStaticFiles, reloadServer))

  // images
  watch([
    'images/**/*.+(jpg|png|gif|svg)',
    'src/pages/**/*.+(jpg|png|gif|svg)'
  ], series(optimizeImages, reloadServer))
  cb()
}

// development task
exports.default = series(
  cleanDistFolder,
  parallel(copyStaticFiles),
  parallel(buildStyles, buildMarkup, runServer, optimizeImages),
  runWatchers
)

// build task
exports.build = series(
  cleanDistFolder,
  parallel(copyStaticFiles),
  parallel(buildStyles, buildMarkup, optimizeImages)
)

// upload task
exports.upload = upload
exports.uploadMin = uploadMin

// clean task
exports.clean = cleanDistFolder
