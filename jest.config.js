export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!chalk)'],
  setupFiles: ['./__mocks__/inquirer.js']
};