import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import { VueScreenSizeMixin } from 'vue-screen-size'
// import 'mdb-vue-ui-kit/css/mdb.min.css';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'

import './assets/tailwind.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'


// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.config.productionTip = false
// Vue.mixin(VueScreenSizeMixin);


export const  bus = new Vue();

// export const mdb = new MDB();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
