import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Page from '../components/page'
import AbilityAtlas from '../components/abilityAtlas'
import AbilityList from '../components/abilityList'
import projectShow from "../components/projectShow";
import expert from "../components/expert";
import expertDetail from "@/components/expertDetail";
//1 注入插件
Vue.use(VueRouter)

//2 定义路由
const routes =  [
    {
        //默认首页
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/page',
        component: Page,
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'abilityAtlas',
                component: AbilityAtlas,
                props: true
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'abilityList',
                component: AbilityList,
                props: true
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'projectShow',
                component: projectShow,
                props: true
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'expert',
                component: expert,
                props: true
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                name:'expertDetail',
                path: 'expert/expertDetail',
                component: expertDetail,
                props: true
            },
        ]
    }

]

//3 创建router实例
const router = new VueRouter({
    linkActiveClass: 'linkActive',
    routes
})

//4 导出router实例
export default router
