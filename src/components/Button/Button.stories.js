import Button from "./Button.vue"

export default {
  title: "Gigamono/Button",
  component: Button,
  parameters: {
    componentSubtitle: "Displays a button",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    size: { control: { type: "select", options: ["small", "medium", "large"] } },
    onClick: { action: "onClick" },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: "<Button v-bind='args'>Sageflow</Button>",
})

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: "red",
  size: "medium",
}
