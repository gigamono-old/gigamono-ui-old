import axios from "axios"
import { clean } from "@/utils/string"

// Gets the current user basic data.
export const getSessionUser = async () => {
  const query = `
  query getSessionUser {
    getSessionUser{
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
        id
        name
        avatar32URL
      }
      workspaceIndex
      workspaceProjects {
        id
        name
      }
      workspaceProjectIndex
      workspaceProjectWorkflows {
        id
        name
      }
      workspaceProjectWorkflowIndex
      workspaceProjectDocuments {
        id
        name
      }
      workspaceProjectDocumentIndex
      workspaceIntegrations {
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
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
