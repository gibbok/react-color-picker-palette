module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFiles: ['<rootDir>./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.{stories.tsx}', '!**/*.d.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: '<rootDir>/coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  testPathIgnorePatterns: [`node_modules`, `.cache`, `.lib`, `.+support.test.ts`],
  coverageThreshold: {
    global: {
      statements: 92,
      branches: 86,
      lines: 91,
      functions: 90
    }
  }
};
