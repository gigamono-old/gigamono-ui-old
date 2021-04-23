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
        layout {
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
        workspaceFocusIndices {
          focusProjectIndex
          projectFocusIndices {
            focusWorkflowIndex
            focusDocumentIndex
          }
        }
      }
      workspaces {
        projects {
          id
          name
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
      integrations {
        apps {
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
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
