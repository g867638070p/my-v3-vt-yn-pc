export const menuList = [
   {
      path: '/login',
      name: 'login',
      lable: '登录', //菜单标题
      component: () => import('@/views/login/Login.vue'),
      meta: {
         hidden: true, //是否隐藏：true隐藏，false不隐藏
         icon: '', //iconfont 名称
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/',
      name: 'Main',
      component: () => import('@/views/Main.vue'),
      children: [
         {
            path: '/',
            name: 'home',
            lable: '首页',
            icon: '&#xe619',
            component: () => import('@/views/home/Home.vue'),
            meta: {
               hidden: false, //是否隐藏：true隐藏，false不隐藏
               icon: '&#xe619', //iconfont 名称
               requiresAuth: true, //是否需要登录
            },
         },
         {
            path: '/user',
            name: 'user',
            //  component: () => import('@/layout/index.vue'),
            lable: '用户管理', //菜单标题
            meta: {
               // hidden: true, //是否隐藏：true隐藏，false不隐藏
               icon: '&#xe618;', //iconfont 名称
               requiresAuth: false, //是否需要登录
            },
            children: [
               {
                  path: '/user1',
                  name: 'user1',
                  lable: '角色管理', //菜单标题
                  component: () => import('@/views/user/user1.vue'),
                  meta: {
                     // hidden: true, //是否隐藏：true隐藏，false不隐藏
                     icon: '',
                     requiresAuth: false, //是否需要登录
                  },
               },
               {
                  path: '/user3',
                  name: 'user3',
                  lable: '权限管理', //菜单标题
                  component: () => import('@/views/user/user3.vue'),
                  meta: {
                     // hidden: true, //是否隐藏：true隐藏，false不隐藏
                     icon: '',
                     requiresAuth: false, //是否需要登录
                  },
               },
            ],
         },
         {
            path: '/react',
            name: 'react',
            lable: 'react模块', //菜单标题
            component: () => import('@/views/react/index.vue'),
            meta: {
               icon: '&#xe69f;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/vue3',
            name: 'vue3',
            lable: 'vue3模块', //菜单标题
            component: () => import('@/views/vue3/index.vue'),
            meta: {
               icon: '&#xe656;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/gitnorm',
            name: 'gitnorm',
            lable: 'git规范文档', //菜单标题
            component: () => import('@/views/gitnorm/index.vue'),
            meta: {
               icon: '&#xe677;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/three3D',
            name: 'three3D',
            lable: 'three3D模块', //菜单标题
            component: () => import('@/views/three3D/index.vue'),
            meta: {
               icon: '&#xe61c;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/chartModule',
            name: 'chartModule',
            lable: '图表模块', //菜单标题
            component: () => import('@/views/chartModule/index.vue'),
            meta: {
               icon: '&#xe78e;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/jsModule',
            name: 'jsModule',
            lable: 'js模块', //菜单标题
            component: () => import('@/views/jsModule/index.vue'),
            meta: {
               icon: '&#xe802;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/lowCode',
            name: 'lowCode',
            lable: '低代码模块', //菜单标题
            component: () => import('@/views/lowCode/index.vue'),
            meta: {
               icon: '&#xe682;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/hotUpdateModule',
            name: 'hotUpdateModule',
            lable: '热更新模块', //菜单标题
            component: () => import('@/views/hotUpdateModule/index.vue'),
            meta: {
               icon: '&#xe6a4;',
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/video',
            name: 'video',
            icon: 'el-aside-shishishipin', //iconfont 名称

            lable: '实时播放', //菜单标题
            component: () => import('@/views/videojs/index.vue'),
            meta: {
               requiresAuth: false, //是否需要登录
            },
         },
      ],
   },

   {
      path: '/404',
      name: '404',
      lable: '404', //菜单标题
      component: () => import('@/views/404/index.vue'),
      meta: {
         hidden: true, //是否隐藏：true隐藏，false不隐藏
         requiresAuth: false, //是否需要登录
      },
   },
];
