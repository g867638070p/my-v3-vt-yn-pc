import { useUserStore } from '@/store/user';
import { createRouter, createWebHistory } from 'vue-router';

import Main from '@/views/Main';
import Home from '@/views/home/Home';
import React from '@/views/react/index';
import Vue3 from '@/views/vue3/index';
import Gitnorm from '@/views/gitnorm/index';
import Three3D from '@/views/three3D/index';

const routes = [
   {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
         {
            path: '/',
            name: 'home',
            component: Home,
         },
         {
            path: '/react',
            name: 'react',
            component: React,
         },
         {
            path: '/vue3',
            name: 'vue3',
            component: Vue3,
         },
         {
            path: '/gitnorm',
            name: 'gitnorm',
            component: Gitnorm,
         },
         {
            path: '/three3D',
            name: 'three3D',
            component: Three3D,
         },
         // {
         //     path: '/rests',
         //     name: 'rests',
         //     component: Page1,
         //     children: [
         //         {
         //             path: '/page1',
         //             name: 'page1',
         //             component: Page1
         //         },
         //         {
         //             path: '/page2',
         //             name: 'page2',
         //             component: Page2
         //         }
         //     ]
         // },
      ],
   },
];
const router = createRouter({
   //路由方式
   history: createWebHistory(import.meta.env.BASE_URL),
   //路由列表
   routes,
});

// // 假设有一个存储用户登录状态的函数
// function isUserLoggedIn() {
//    console.log('11111', useUserStore());
//    const { isLoggedIn, userInfo } = useUserStore();
//    // 这里应该是检查用户登录状态的逻辑，例如检查token或者cookie
//    return isLoggedIn;
// }

// router.beforeEach((to, from, next) => {
//    if (to.matched.some((record) => record.meta.requiresAuth) && !isUserLoggedIn()) {
//       // 如果用户未登录，重定向到登录页面
//       next('/login');
//    } else {
//       // 如果用户已登录，或者不需要登录的页面，正常导航
//       next();
//    }
// });
// 防止路径代码冗余
const VueRouterPush = createRouter.prototype.push;
createRouter.prototype.push = function push(to) {
   return VueRouterPush.call(this, to).catch((err) => err);
};

export default router;
