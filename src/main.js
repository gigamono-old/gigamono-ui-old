import { createApp } from "vue"
import store from "@/store"
import router from "@/router"
import App from "@/App.vue"
import mitt from "mitt"

const app = createApp(App)
app.config.globalProperties.emitter = mitt()
app.use(store)
app.use(router)
app.mount("#app")
