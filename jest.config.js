module.exports = {
  "coverageReporters": [
    "json-summary"
  ],
  "collectCoverage": true,
  "setupFilesAfterEnv": ["jest-extended", "jest-chain"],
  "roots": [
    "<rootDir>/dist"
  ],
}
