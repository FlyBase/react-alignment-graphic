module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactAlignmentGraphic',
      externals: {
        react: 'React'
      }
    }
  }
}
