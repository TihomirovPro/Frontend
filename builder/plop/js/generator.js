const isntEmptyName = require('../utils/isnt_empty')

module.exports = function () {
  return {
    description: 'Create a new js module',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Js module\'s name',
      validate: isntEmptyName
    }],

    actions: function () {
      const actions = []

      // js
      actions.push({
        type: 'add',
        path: '../../src/js/modules//{{name}}.js',
        templateFile: './js/js.js'
      })

      return actions
    }
  }
}
