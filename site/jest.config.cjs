/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json'
    }]
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@langchain|formdata-node)/.*)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/modules/exp/pipeline/__tests__/setup.ts'
  ]
};