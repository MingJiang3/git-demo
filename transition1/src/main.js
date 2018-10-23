// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fullPage from '@/components/fullPage.vue'
import page1 from './page1.vue'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  data:{
    bgColor:['#c90','#c40','#c06','#c67']
  },
  components:{fullPage,page1}
})
