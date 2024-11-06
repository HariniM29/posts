import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import "../node_modules/bootstrap/dist/css/bootstrap.css"


const app = createApp(App)
app.use(router) //to register it as a plugin
app.mount('#app')

