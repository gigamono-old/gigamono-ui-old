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
        }
        activityBarSpaceShortcuts {
          iconName
        }
        activityBarOtherShortcuts {
          iconName
        }
      }
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
