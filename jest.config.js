module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-configs/setup-test-env.js'],
  transform: {
    '^.+\\.(tsx?|jsx?)$': `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, `.docz`],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
};
