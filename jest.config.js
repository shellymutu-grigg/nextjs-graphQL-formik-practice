module.exports = {
  displayName: 'practice',
  globals: {
    'ts-jest': {
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/isolatedModules/#performance
      isolatedModules: true,
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  clearMocks: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        reportTestSuiteErrors: true,
        suiteName: 'practice',
        suiteNameTemplate: '{filename}',
        outputDirectory: './test-reports/junit',
        outputName: 'practice-unit.xml',
      },
    ],
  ],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(test).[jt]s?(x)', '**/__tests__/**/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  setupFiles: ['dotenv/config'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@interfaces(.*)$': '<rootDir>/src/interfaces$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@theme(.*)$': '<rootDir>/src/theme$1',
    '^.+\\.(css)$': '<rootDir>/CSSStub.js',
  },
  automock: false,
};
