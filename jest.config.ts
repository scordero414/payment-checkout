import type { Config } from 'jest';
import nextJest from 'next/jest.js';
import { pathsToModuleNameMapper } from 'ts-jest';
// import {} from 'ts-jest/'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // moduleNameMapper: pathsToModuleNameMapper(
  //   { '@/src/*': ['src/*'] },
  //   {
  //     prefix: '<rootDir>/',
  //   }
  // ),
  moduleDirectories: ['node_modules', 'src/'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  // setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  coverageReporters: [
    'json-summary', // This is important for generating coverage-summary.json
    'text',
    'lcov',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
