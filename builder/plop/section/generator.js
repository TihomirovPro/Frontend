const isntEmptyName = require('../utils/isnt_empty')

module.exports = function () {
  return {
    description: 'Create a new page section',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Section\'s name',
      validate: isntEmptyName
    }],

    actions: function () {
      const actions = []

      // pug
      actions.push({
        type: 'add',
        path: '../../src/sections/s-{{dashCase name}}/s-{{dashCase name}}.pug',
        templateFile: './section/section.pug'
      })

      // sass
      actions.push({
        type: 'add',
        path: '../../src/sections/s-{{dashCase name}}/s-{{dashCase name}}.sass',
        templateFile: './section/section.sass'
      })

      return actions
    }
  }
}
