import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
import { applyPolyfills, defineCustomElements } from '@telekom/scale-components-neutral/loader';

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('scale-')

applyPolyfills().then(() => {
    defineCustomElements(window);
  });

app.use(router);

app.mount('#app');
