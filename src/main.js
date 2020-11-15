// include custom styles
import Toasted from 'vue-toasted';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import browserDetect from 'vue-browser-detect-plugin';
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
// enable toasted
Vue.use(Toasted, { position: 'top-center', duration: 3500 });

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
