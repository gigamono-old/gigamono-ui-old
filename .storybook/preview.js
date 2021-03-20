import "!style-loader!css-loader!sass-loader!../src/assets/styles/reset.scss"
import "!style-loader!css-loader!sass-loader!../src/assets/styles/styles.scss"
import "!style-loader!css-loader!sass-loader!../src/assets/styles/animations.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
