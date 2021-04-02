import axios from "axios"
import { clean } from "./util"

// getCurrentUser gets the current user.
export const getCurrentUser = async () => {
  const query = `
  query getCurrentUser {
    getCurrentUser{
      id
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
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
