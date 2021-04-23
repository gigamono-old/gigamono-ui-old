import { createRouter, createWebHistory } from "vue-router"

import SidebarWorkflows from "@/components/layout/SidebarWorkflows"
import SidebarDashboard from "@/components/layout/SidebarDashboard"
import SidebarDesign from "@/components/layout/SidebarDesign"
import SidebarDocuments from "@/components/layout/SidebarDocuments"
import SidebarExtensions from "@/components/layout/SidebarExtensions"
import SidebarSettings from "@/components/layout/SidebarSettings"
import SidebarDeveloper from "@/components/layout/SidebarDeveloper"

import MainAreaWorkflows from "@/components/layout/MainAreaWorkflows/MainAreaWorkflows"
import MainAreaDashboard from "@/components/layout/MainAreaDashboard"
import MainAreaDesign from "@/components/layout/MainAreaDesign"
import MainAreaDocuments from "@/components/layout/MainAreaDocuments"
import MainAreaExtensions from "@/components/layout/MainAreaExtensions"
import MainAreaSettings from "@/components/layout/MainAreaSettings"
import MainAreaDeveloper from "@/components/layout/MainAreaDeveloper"

import TabTopPaneWorkflows from "@/components/layout/TabTopPaneWorkflows"

import TabBottomPaneWorkflows from "@/components/layout/TabBottomPaneWorkflows"

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
