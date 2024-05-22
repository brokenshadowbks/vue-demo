import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";
import Layout from "@/views/Layout.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/layout',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: HomeView
            },
            {
                path: '/view',
                name: 'view',
                component: AboutView
            }

        ]
    }

]

const router = new VueRouter({
    mode:'history',
    routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         next();
//     }
//     const user = localStorage.getItem("user");
//     if (!user && to.path !== '/login') {
//         return next("/login");
//     }
//     next();
// })

export default router
