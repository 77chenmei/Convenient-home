// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//验证插件
import '@/../static/js/val/jquery.validate.js';
import '@/../static/js/val/localization/messages_zh.js';

//验证插件
import VeeValidate from 'vee-validate'; 
Vue.use(VeeValidate); //验证插件

//生成图片验证码
// import SIdentify from '@/components/common/identify.vue'
// Vue.use(SIdentify)

//Vue.prototype.jquery = require('jquery');

Vue.prototype.apiUl = 'http://127.0.0.1';
//Vue.prototype.apiUl = 'http://192.168.34.36';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// router.push('/') //页面初始化