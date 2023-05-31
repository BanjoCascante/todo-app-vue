import './assets/main.css'

import { createApp } from 'vue'
import TaskList from './components/TaskList.vue'
import ListItem from './components/ListItem.vue'
import App from './App.vue'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash)
library.add(faCheck)

const app = createApp(App)
app.component("task-list", TaskList)
app.component("list-item", ListItem)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
