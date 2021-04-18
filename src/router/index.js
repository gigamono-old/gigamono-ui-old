import { createRouter, createWebHistory } from "vue-router"

import SidebarWorkflows from "@/components/SidebarWorkflows/SidebarWorkflows"
import SidebarDashboard from "@/components/SidebarDashboard/SidebarDashboard"
import SidebarDesign from "@/components/SidebarDesign/SidebarDesign"
import SidebarDocuments from "@/components/SidebarDocuments/SidebarDocuments"
import SidebarExtensions from "@/components/SidebarExtensions/SidebarExtensions"
import SidebarSettings from "@/components/SidebarSettings/SidebarSettings"
import SidebarDeveloper from "@/components/SidebarDeveloper/SidebarDeveloper"

import MainAreaWorkflows from "@/components/MainAreaWorkflows/MainAreaWorkflows"
import MainAreaDashboard from "@/components/MainAreaDashboard/MainAreaDashboard"
import MainAreaDesign from "@/components/MainAreaDesign/MainAreaDesign"
import MainAreaDocuments from "@/components/MainAreaDocuments/MainAreaDocuments"
import MainAreaExtensions from "@/components/MainAreaExtensions/MainAreaExtensions"
import MainAreaSettings from "@/components/MainAreaSettings/MainAreaSettings"
import MainAreaDeveloper from "@/components/MainAreaDeveloper/MainAreaDeveloper"

import TabTopPaneWorkflows from "@/components/TabTopPaneWorkflows/TabTopPaneWorkflows"

import TabBottomPaneWorkflows from "@/components/TabBottomPaneWorkflows/TabBottomPaneWorkflows"

const routes = [
  {
    path: "/",
    name: "default",
    components: {
      sidebar: SidebarDashboard,
      mainArea: MainAreaDashboard,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    components: {
      sidebar: SidebarDashboard,
      mainArea: MainAreaDashboard,
    },
  },
  {
    path: "/workflows",
    name: "workflows",
    components: {
      sidebar: SidebarWorkflows,
      mainArea: MainAreaWorkflows,
      tabTopPane: TabTopPaneWorkflows,
      tabBottomPane: TabBottomPaneWorkflows,
    },
  },
  {
    path: "/design",
    name: "design",
    components: {
      sidebar: SidebarDesign,
      mainArea: MainAreaDesign,
    },
  },
  {
    path: "/documents",
    name: "documents",
    components: {
      sidebar: SidebarDocuments,
      mainArea: MainAreaDocuments,
    },
  },
  {
    path: "/extensions",
    name: "extensions",
    components: {
      sidebar: SidebarExtensions,
      mainArea: MainAreaExtensions,
    },
  },
  {
    path: "/developer",
    name: "developer",
    components: {
      sidebar: SidebarDeveloper,
      mainArea: MainAreaDeveloper,
    },
  },
  {
    path: "/settings",
    name: "settings",
    components: {
      sidebar: SidebarSettings,
      mainArea: MainAreaSettings,
    },
  },
  {
    path: "/spaces/:id",
    name: "spaces/:id",
    components: null,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
