const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  notify: true,
  notifyMode: "failure",
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules'],
  roots: [
    "<rootDir>/src/components",
    "<rootDir>/src/helpers",
    "<rootDir>/src/hooks",
    "<rootDir>/src/store",
    "<rootDir>/src/pages"
  ],
  moduleNameMapper: {
    '@components': '<rootDir>/src/components',
    '@helpers': '<rootDir>/src/helpers',
    "@hooks": '<rootDir>/src/hooks',
    "@store": '<rootDir>/src/store'
  }
}

module.exports = createJestConfig(customJestConfig)
