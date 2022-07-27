module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactKbiSiEn',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
      }
    }
  },
  babel: {
    react: 'automatic',
    cherryPick: [
      '@mui/material'
    ],
    presets: [],
    plugins: []
  }
}
