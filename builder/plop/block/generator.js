var isntEmptyName = require('../utils/isnt_empty')

module.exports = function () {
  return {
    description: 'Create a new block',
    prompts: [{
      type: 'input',
      name: 'input block name',
      message: 'Block\'s name',
      validate: isntEmptyName
    }],

    actions: function () {
      var actions = []

      // pug
      actions.push({
        type: 'add',
        path: '../../src/blocks/{{dashCase name}}/{{dashCase name}}.pug',
        templateFile: './block/block.pug'
      })

      // styl
      actions.push({
        type: 'add',
        path: '../../src/blocks/{{dashCase name}}/{{dashCase name}}.sass',
        templateFile: './block/block.sass'
      })

      return actions
    }
  }
}
