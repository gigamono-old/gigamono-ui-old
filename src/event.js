import { getCurrentInstance } from "vue"

export const getEmitter = () => {
  return getCurrentInstance().appContext.config.globalProperties.emitter
}
