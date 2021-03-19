// DATE: December 02, 2020
// This is one of those "code you shouldn't delete" moment.
// Was having problems setting up vue and jest correctly. Jest kept screaming "SyntaxError: Unexpected token import".
// I tried a lot of the solutions mentioned here (https://github.com/vuejs/vue-cli/issues/1584#issuecomment-537150505).
// I cannot point to which solution worked because I tried a bunch of them.
// - I used "npx jest --clearCache" multiple times.
// - I landed on this babel configuration that works.
// - I installed the following packages "yarn add --dev @vue/babel-preset-app @babel/core @babel/preset-env babel-core@7.0.0-bridge.0"
// This is excluding a hundred other things I tried like restarting my PC a couple times.
// Funny thing is, if I remove all these packages my code still works fine. Weird.

module.exports = {
  presets: [
    "@vue/app",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
}
