const tailWindPlugin = require('tailwindcss');
const autoprefixerPlugin = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailWindPlugin,
        autoprefixerPlugin,
      ],
    },
  },
};
