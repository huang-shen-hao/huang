// 配置路由
import Vue from "vue"
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)



// 配置路由
let router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect:'/home'
        },
        {
            path: "/home",
            name: 'home',
            component: () => import("../src/view/MyHome.vue"),
        },
        {
            path: "/own",
            name: 'own',
            component: () => import("../src/view/MySelf.vue"),
        },
        {
            path: "/message",
            name: 'message',
            component: () => import("../src/view/MyMessage.vue"),
        },
        {
            path: "/public",
            name: 'public',
            component: () => import("../src/view/PublicWelfare.vue"),
        },
        {
            path: "/page",
            name: 'page',
            component: () => import("../src/view/MyPage.vue"),
        },



    ],

});

export default router