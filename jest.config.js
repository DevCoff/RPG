export default {
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest',
  // },
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/(?!chalk)'],
  // setupFiles: ['./__mocks__/inquirer.js']
};