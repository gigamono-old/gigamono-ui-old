import Router from "vue-router";
import Vue from "vue";
import ContentAreaWorkflow from "../views/ContentArea/Workflow/Workflow.vue";
import ContentAreaDashboard from "../views/ContentArea/Dashboard/Dashboard.vue";
import SidebarWorkflow from "../views/Sidebar/Workflow.vue";
import SidebarDashboard from "../views/Sidebar/Dashboard.vue";

// Use Router.
Vue.use(Router);

// Create store.
export default new Router({
  routes: [
    {
      path: "/workflows",
      name: "Workflows",
      components: {
        ContentArea: ContentAreaWorkflow,
        Sidebar: SidebarWorkflow
      }
    },
    {
      path: "/dashboard",
      name: "Dashboards",
      components: {
        ContentArea: ContentAreaDashboard,
        Sidebar: SidebarDashboard
      }
    }
  ]
});
