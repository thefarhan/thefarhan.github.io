import Vue from "vue"
import Router from './router/index'
import App from './App.vue'


import 'bootstrap-v4-rtl'
import 'bootstrap-v4-rtl/scss/bootstrap-rtl.scss'

import "./assets/app.scss"

new Vue({
    router: Router,
    render: h => h(App),
}).$mount('#root');
