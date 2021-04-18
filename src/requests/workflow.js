import axios from "axios"
import { clean } from "@/utils/string"

// Gets the current user integrations.
export const getWorkflow = async () => {
  const query = `
  query getWorkflow {
    getWorkflow() {
    }
  }
  `

  return axios.get("graphql?query=" + clean(query))
}
