import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引入组件
import Login from '@/views/Login.vue'
import Layout from '@/views/Layout/Layout.vue'

// 路由配置
const routes=[
    {
        path:"/login",
        component:Login,
    },
    // 后端大布局
    //首页
    {
        path:'/',
        component:Layout,
        redirect: '/home',
        children:[
            {
                path:'/home',
                component:()=>import('@/views/Home.vue')
            },
        ]
    },
    //报表
    {
        path:'/statement',
        component:Layout,
        children:[
            {
                path:'/statement/synthesize',
                component:()=>import('@/views/statement/Synthesize.vue')
            },
            {
                path:'/statement/user',
                component:()=>import('@/views/statement/User.vue')
            },
        ]
    },
    //应用广告
    {
        path:'/advertising',
        component:Layout,
        children:[
            {
                path:'/advertising',
                component:()=>import('@/views/Advertising.vue')
            },
        ]
    },
    //中介
    {
        path:'/agent',
        component:Layout,
        children:[
            {
                path:'/agent',
                component:()=>import('@/views/Agent.vue')
            },
        ]
    },
    //广告网络
    {
        path:'/network',
        component:Layout,
        children:[
            {
                path:'/network',
                component:()=>import('@/views/Network.vue')
            },
        ]
    },
    //账号
    {
        path:'/account',
        component:Layout,
        children:[
            {
                path:'/account',
                component:()=>import('@/views/Account.vue')
            },
        ]
    },
];

const router=new VueRouter({
    routes,
});
export default router;

