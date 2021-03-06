const { src, dest } = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('sass')
const autoprefixer = require('gulp-autoprefixer')
const combineMq = require('gulp-group-css-media-queries')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const toaster = require('./toaster')
const flatten = require('gulp-flatten')
const gulpif = require('gulp-if')

const isDevelopment = process.env.NODE_ENV !== 'production'

function buildStyles (cb) {
  return src(['src/styles/*.+(sass|scss)', 'src/pages/*/*.+(sass|scss)'])
    .pipe(toaster('Sass', cb))
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer('last 4 version', '>= ie 11'))
    .pipe(gulpif(!isDevelopment, combineMq()))
    .pipe(gulpif(!isDevelopment, cleanCSS({ level: 2, rebase: false })))
    .pipe(gulpif(isDevelopment, sourcemaps.write('./')))
    .pipe(flatten())
    .pipe(dest('dist/css'))
}

module.exports = { buildStyles }
