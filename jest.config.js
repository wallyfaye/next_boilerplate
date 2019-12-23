module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./utils/setupTests.ts'],
  testEnvironment: 'enzyme'
};