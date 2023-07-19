import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//tailwindcss
import './input.css'
//fontawesome icons
// import '@fortawesome/fontawesome-free/css/all.css'
//axios
import axios, { Axios } from 'axios'

//primevue
import PrimeVue from 'primevue/config';
//primevue tailwindcss theme
import 'primevue/resources/themes/tailwind-light/theme.css' //theme
// import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                //core css
import "primeicons/primeicons.css"                          //icons
//primevue components
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Dropdown from 'primevue/dropdown';
import Menu from 'primevue/menu';
import Message from 'primevue/message';
import Toast from 'primevue/toast';


const app = createApp(App)



  app.use(router)
  app.use(store)
  app.use(PrimeVue)
  app.component('Menu', Menu)
app.component('Dropdown', Dropdown)
app.component('Message', Message)
app.component('Toast', Toast)



  app.mount('#app')
