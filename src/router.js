import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

// 路由懒加载
function loadView(view) {
    return () => import(`@/views/${view}.vue`)
}

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: loadView("Home")
        },
    ]
})