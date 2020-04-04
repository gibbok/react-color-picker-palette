module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFiles: ['<rootDir>./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.{stories.tsx}', '!**/*.d.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/cypress/'],
  coverageDirectory: '<rootDir>/coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  testPathIgnorePatterns: [`node_modules`, `.cache`, `.lib`, `.+support.test.ts`, `/cypress/`],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 79.31,
      lines: 100,
      functions: 100
    }
  }
};
