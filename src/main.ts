import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import routes from './core/routes';


const router = createRouter({
  // Using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
})

if (typeof window !== 'undefined') {
  import('./sw-register')
}

createApp(App)
.use(router)
.mount('#app');
