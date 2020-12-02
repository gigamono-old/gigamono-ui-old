module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/*.{js,vue}"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
