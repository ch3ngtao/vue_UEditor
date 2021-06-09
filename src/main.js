import Vue from 'vue'
import App from './App.vue'
// import VueUeditorWrap from 'vue-ueditor-wrap'

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
import '../static/UE/themes/default/css/ueditor.css'

// Vue.component('vue-ueditor-wrap', VueUeditorWrap)

new Vue({
  render: h => h(App),
}).$mount('#app')
