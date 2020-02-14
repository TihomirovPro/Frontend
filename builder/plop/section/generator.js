var isntEmptyName = require('../utils/isnt_empty')

module.exports = function () {
  return {
    description: 'Create a new page section',
    prompts: [
      {
        type: 'input',
        name: 'input page name',
        message: 'page\'s name',
        validate: isntEmptyName
      },
      {
        type: 'input',
        name: 'input section name',
        message: 'Section\'s name',
        validate: isntEmptyName
      }
    ],

    actions: function () {
      var actions = []

      // pug
      actions.push({
        type: 'add',
        path: '../../src/pages/{{dashCase page}}/{{dashCase name}}/{{dashCase name}}.pug',
        templateFile: './section/section.pug'
      })

      // sass
      actions.push({
        type: 'add',
        path: '../../src/pages/{{dashCase page}}/{{dashCase name}}/{{dashCase name}}.sass',
        templateFile: './section/section.sass'
      })

      return actions
    }
  }
}
