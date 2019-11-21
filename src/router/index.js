import Vue from 'vue'
import Router from 'vue-router'
const DashboardLayout = () =>
    import ( /* webpackChunkName: "dashboard" */
        '../components/dashboardLayout.vue')

const LoginLayout = () =>
    import ('../components/loginLayout.vue')

const SignupLayout = () =>
    import ('../components/signupLayout.vue')

function loadView(view) {
    return () =>
        import (
            /* webpackChunkName: "view-
            [request]" */
            `../components/dashboardContents/${view}.vue`)
}
const routes = [{
        path: '/dashboard',
        component: DashboardLayout,
        children: [{
            name: 'UserController',
            path: '',
            component: loadView('userController')
        }, {
            name: 'Cabang Controller',
            path: '/branch',
            component: loadView('cabangController')
        }]
    },
    {
        name: 'LoginLayout',
        path: '/',
        component: LoginLayout,
    },
    {
        name: 'SignupLayout',
        path: '/',
        component: SignupLayout,
    },
]
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: routes
})
export default router