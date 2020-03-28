require('loki/configure-react')
/**
 * ES6 imports are not used because of sotryshots tests and jest not being able to load them.
 * It might be just a case of not good enough jest configuration.
 */
const { addParameters } = require('@storybook/react')
const { create } = require('@storybook/theming/create')

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'react-color-picker-palette',
    }),
  },
})
