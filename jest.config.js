module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
  // setupFiles: [
  //   '<rootDir>/testsConfig/setup.tsx'
  // ]
}