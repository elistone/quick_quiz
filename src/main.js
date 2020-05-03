// include custom styles
import './assets/scss/custom.scss';

import Toasted from 'vue-toasted';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import PreventDoubleTap from './plugins/preventDoubleTap';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// prevent double tap & pinch zoom from being used
Vue.use(PreventDoubleTap);
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
