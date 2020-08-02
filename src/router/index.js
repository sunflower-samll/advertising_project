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
        meta:{title:"首页"},
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
        redirect: "/statement/synthesize",
        meta:{title:'报表'},
        children:[
            {
                path:'/statement/synthesize',
                component:()=>import('@/views/statement/Synthesize.vue'),
                meta:{title:"综合报表"}
            },
            {
                path:'/statement/user',
                component:()=>import('@/views/statement/User.vue'),
                meta:{title:"用户活跃"}
            },
        ]
    },
    //应用广告
    {
        path:'/advertising',
        component:Layout,
        meta:{title:'应用/广告位'},
        children:[
            {
                path:'',
                component:()=>import('@/views/advertising/Advertising.vue'),
            },
        ]
    },
    //中介
    {
        path:'/agent',
        component:Layout,
        meta:{title:'中介'},
        children:[
            {
                path:'',
                component:()=>import('@/views/Agent.vue'),
            },
        ]
    },
    //广告网络
    {
        path:'/network',
        component:Layout,
        meta:{title:'广告网络'},
        children:[
            {
                path:'',
                component:()=>import('@/views/Network.vue'),
            },
        ]
    },
    //账号
    {
        path:'/account',
        component:Layout,
        meta:{title:'账号'},
        children:[
            {
                path:'',
                component:()=>import('@/views/Account.vue'),
            },
        ]
    },
];

const router=new VueRouter({
    routes,
});
export default router;

