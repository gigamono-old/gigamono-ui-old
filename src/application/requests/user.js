import axios from "axios"
import { clean } from "@/application/utils/string"

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
      session {
        integrations {
          integrations {
            id
            name
            description
            avatar32URL
          }
          builtins {
            id
            name
            description
            avatar32URL
          }
        }
        layoutPreferences {
          activityBarMainShortcuts {
            iconName
            route
          }
          activityBarOtherShortcuts {
            iconName
            route
          }
        }
        focusWorkspaceIndex
        workspaces {
          id
          name
          focusProjectIndex
          projects {
            focusWorkflowIndex
            focusDocumentIndex
            documents {
              id
              name
            }
            workflows {
              id
              name
            }
          }
        }
      }
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
