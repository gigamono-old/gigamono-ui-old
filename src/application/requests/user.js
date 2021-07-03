import axios from "axios"
import { clean } from "@/application/utils/string"

// Gets the current user basic data.
export const getSessionUser = async () => {
  const query = `
  query {
    sessionUser{
      id
      profile {
        username
        email
        avatarURL
      }
      preferences {
        details {
          focusWorkspaceIndex
          workspaces {
            id
            layout {
              mainShortcuts {
                iconName
                entityName
                route
              }
              quickShortcuts {
                iconName
                entityName
                route
              }
              otherShortcuts {
                iconName
                entityName
                route
              }
            }
          }
        }
      }
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
