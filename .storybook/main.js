const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-docs"],
  webpackFinal: async (config) => {
    // Allowing alias.
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
    }
    // Allowing SCSS.
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    })
    // Allowing Pug.
    config.module.rules.push({
      test: /\.pug$/,
      use: ["pug-plain-loader"],
      include: path.resolve(__dirname, "../"),
    })
    return config
  },
}
