import ActivityBar from "@/components/layout/ActivityBar"

export default {
  title: "Gigamono/Actvity Bar",
  component: ActivityBar,
  parameters: {
    componentSubtitle: "Displays the Activity Bar",
  },
  decorators: [
    () => ({
      template: `
      <div style="
        height: 95vh;
        width: inherit;
        display: grid;
        grid-template-areas: 'activity-bar content';
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr;
        > .activity-bar {
          grid-area: activity-bar;
        }"
      >
        <story />
      </div>
      `,
    }),
  ],
}

const Template = (args) => ({
  components: { ActivityBar },
  setup() {
    args.layoutPreferences = {
      activityBarMainShortcuts: [
        {
          iconName: "dashboard",
        },
        {
          iconName: "design",
        },
        {
          iconName: "workflows",
        },
        {
          iconName: "documents",
        },
        {
          iconName: "extensions",
        },
      ],
    }
    return { args }
  },
  template: "<ActivityBar v-bind='args'></ActivityBar>",
})

export const Primary = Template.bind({})
