import { getCurrentInstance } from "vue"

const getEmitter = () => {
  return getCurrentInstance().appContext.config.globalProperties.emitter
}

export { getEmitter }
