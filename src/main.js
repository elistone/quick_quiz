// include custom styles
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import browserDetect from 'vue-browser-detect-plugin';
import Clipboard from 'v-clipboard';
import VueCrypt from 'vue-crypt';
import Vue from 'vue';
import PreventDoubleTap from './plugins/preventDoubleTap';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// prevent double tap & pinch zoom from being used
Vue.use(PreventDoubleTap);
// enable browser detection
Vue.use(browserDetect);
// enable clipboard
Vue.use(Clipboard);
// view crypt
Vue.use(VueCrypt);

new Vue({
  router,
  store,
  // beforeCreate: () => store.commit('initialiseStore'),
  render: (h) => h(App),
}).$mount('#app');

// set the store data into localstorage
// store.subscribe((mutation, state) => {
//   localStorage.setItem('store', JSON.stringify(state));
// });
