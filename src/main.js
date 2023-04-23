import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './static/iconfont/iconfont.css'

// 引入 vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入 vue-awesome-swiper 样式
import 'swiper/dist/css/swiper.css'

// import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
