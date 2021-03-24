import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "default",
    component: null,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: null,
  },
  {
    path: "/design",
    name: "design",
    component: null,
  },
  {
    path: "/documents",
    name: "documents",
    component: null,
  },
  {
    path: "/documents",
    name: "documents",
    component: null,
  },
  {
    path: "/extensions",
    name: "extensions",
    component: null,
  },
  {
    path: "/developers",
    name: "developers",
    component: null,
  },
  {
    path: "/settings",
    name: "settings",
    component: null,
  },
  {
    path: "/spaces",
    name: "spaces",
    component: null,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
