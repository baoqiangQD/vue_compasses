'use strict'
import Vue from 'vue'
import router from './router/router'
import pluginCtrl from './launch/pluginCtrl'
import App from './App.vue'
window.Vue = Vue
pluginCtrl.init(Vue)
Vue.startApp = function () {
  const app = new Vue({
    router,
    template: '<App/>',
    components: {App}
  }).$mount('#app')
}
Vue.startApp()
