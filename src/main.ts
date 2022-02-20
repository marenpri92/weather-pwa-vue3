import { createApp } from 'vue';
import App from './App.vue';

if (typeof window !== 'undefined') {
    import('./sw-register')
  }

createApp(App).mount('#app');
