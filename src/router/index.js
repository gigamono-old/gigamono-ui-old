import { createRouter, createWebHistory } from "vue-router"

import SidebarAutomations from "@/components/layout/SidebarAutomations"
import SidebarDecks from "@/components/layout/SidebarDecks"
import SidebarBases from "@/components/layout/SidebarBases"
import SidebarExtensions from "@/components/layout/SidebarExtensions"
import SidebarSettings from "@/components/layout/SidebarSettings"
import SidebarDevelopers from "@/components/layout/SidebarDevelopers"

import MainAreaAutomations from "@/components/layout/MainAreaAutomations/MainAreaAutomations"
import MainAreaDecks from "@/components/layout/MainAreaDecks"
import MainAreaBases from "@/components/layout/MainAreaBases"
import MainAreaExtensions from "@/components/layout/MainAreaExtensions"
import MainAreaSettings from "@/components/layout/MainAreaSettings"
import MainAreaDevelopers from "@/components/layout/MainAreaDevelopers"

import TabTopPaneAutomations from "@/components/layout/TabTopPaneAutomations"
import TabTopPaneBases from "@/components/layout/TabTopPaneBases"

import TabBottomPaneAutomations from "@/components/layout/TabBottomPaneAutomations"
import TabBottomPaneBases from "@/components/layout/TabBottomPaneBases"

const routes = [
  {
    path: "/",
    name: "default",
    components: {
      sidebar: SidebarDecks,
      mainArea: MainAreaDecks,
    },
  },
  {
    path: "/decks",
    name: "decks",
    components: {
      sidebar: SidebarDecks,
      mainArea: MainAreaDecks,
    },
  },
  {
    path: "/automations",
    name: "automations",
    components: {
      sidebar: SidebarAutomations,
      mainArea: MainAreaAutomations,
      tabTopPane: TabTopPaneAutomations,
      tabBottomPane: TabBottomPaneAutomations,
    },
  },
  {
    path: "/bases",
    name: "bases",
    components: {
      sidebar: SidebarBases,
      mainArea: MainAreaBases,
      tabTopPane: TabTopPaneBases,
      tabBottomPane: TabBottomPaneBases,
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
    path: "/developers",
    name: "developers",
    components: {
      sidebar: SidebarDevelopers,
      mainArea: MainAreaDevelopers,
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
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
