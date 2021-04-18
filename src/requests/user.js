import axios from "axios"
import { clean } from "@/utils/string"

// Gets the current user basic data.
export const getCurrentUser = async () => {
  const query = `
  query getCurrentUser {
    getCurrentUser{
      id
      profile {
        username
        email
        avatar32URL
      }
      layoutPreferences {
        activityBarMainShortcuts {
          iconName
          route
        }
        activityBarSpaceShortcuts {
          iconName
          route
        }
        activityBarOtherShortcuts {
          iconName
          route
        }
      }
      workspaces {
        name
        avatar32URL
      }
      selectedWorkspaceIndex
      projects {
        name
        workflows {
          name
        }
        selectedWorkflowIndex
      }
      selectedProjectIndex
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}

// Gets the current user integrations.
export const getCurrentUserIntegrations = async () => {
  const query = `
  query getCurrentUserIntegrations {
    getCurrentUserIntegrations {
      integrations {
        name
        id
        description
        avatar32URL
      }
      builtins {
        name
        id
        description
        avatar32URL
      }
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
