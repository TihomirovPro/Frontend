const isntEmptyName = require('../utils/isnt_empty')

module.exports = function () {
  return {
    description: 'Create a new block',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Block\'s name',
      validate: isntEmptyName
    }],

    actions: function () {
      const actions = []

      // pug
      actions.push({
        type: 'add',
        path: '../../src/blocks/b-{{dashCase name}}/b-{{dashCase name}}.pug',
        templateFile: './block/block.pug'
      })

      // styl
      actions.push({
        type: 'add',
        path: '../../src/blocks/b-{{dashCase name}}/b-{{dashCase name}}.sass',
        templateFile: './block/block.sass'
      })

      return actions
    }
  }
}
