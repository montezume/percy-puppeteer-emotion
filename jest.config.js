module.exports = {
  preset: "jest-puppeteer",
  testRegex: "./*\\.spec\\.js$",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  globals: {
    HOST: "http://localhost:3001"
  }
};
