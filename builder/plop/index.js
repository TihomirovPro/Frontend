module.exports = function (plop) {
  plop.setGenerator('Block', require('./block/generator.js')())
  plop.setGenerator('Page', require('./page/generator.js')())
  plop.setGenerator('Section', require('./section/generator.js')())
  plop.setGenerator('Js', require('./js/generator.js')())
}
