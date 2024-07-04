const Menu = [
   {
      path: '/',
      name: 'home',
      lable: '首页',
      icon: 'el-aside-shouye',
      url: 'home',
      component: () => import('@/views/home/Home.vue'),
      meta: {
         hidden: false, //是否隐藏：true隐藏，false不隐藏
         requiresAuth: true, //是否需要登录
      },
   },
   {
      path: '/user',
      name: 'user',
      icon: 'el-aside-yonghu', //iconfont 名称
      url: 'user',
      //  component: () => import('@/layout/index.vue'),
      lable: '用户管理', //菜单标题
      meta: {
         // hidden: true, //是否隐藏：true隐藏，false不隐藏
         requiresAuth: false, //是否需要登录
      },
      children: [
         {
            path: '/user1',
            name: 'user1',
            icon: 'el-aside-navicon-jsgl', //iconfont 名称
            url: 'user/user1',
            lable: '角色管理', //菜单标题
            component: () => import('@/views/user/user1.vue'),
            meta: {
               // hidden: true, //是否隐藏：true隐藏，false不隐藏
               requiresAuth: false, //是否需要登录
            },
         },
         {
            path: '/user3',
            name: 'user3',
            icon: 'el-aside-quanxianguanli', //iconfont 名称
            url: 'user/user3',
            lable: '权限管理', //菜单标题
            component: () => import('@/views/user/user3.vue'),
            meta: {
               // hidden: true, //是否隐藏：true隐藏，false不隐藏
               requiresAuth: false, //是否需要登录
            },
         },
      ],
   },
   {
      path: '/react',
      name: 'react',
      icon: 'el-aside-wodebaogao', //iconfont 名称
      url: 'react',
      lable: 'react模块', //菜单标题
      component: () => import('@/views/react/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/vue3',
      name: 'vue3',
      icon: 'el-aside-vue-tubiao', //iconfont 名称
      url: 'vue3',
      lable: 'vue3模块', //菜单标题
      component: () => import('@/views/vue3/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/gitnorm',
      name: 'gitnorm',
      icon: 'el-aside-git-square', //iconfont 名称
      url: 'gitnorm',
      lable: 'git规范文档', //菜单标题
      component: () => import('@/views/gitnorm/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/three3D',
      name: 'three3D',
      icon: 'el-aside-3D', //iconfont 名称
      url: 'three3D',
      lable: 'three3D模块', //菜单标题
      component: () => import('@/views/three3D/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/chartModule',
      name: 'chartModule',
      icon: 'el-aside-tubiaozuhe_1', //iconfont 名称
      url: 'chartModule',
      lable: '图表模块', //菜单标题
      component: () => import('@/views/chartModule/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/jsModule',
      name: 'jsModule',
      icon: 'el-aside-js', //iconfont 名称
      url: 'jsModule',
      lable: 'js模块', //菜单标题
      component: () => import('@/views/jsModule/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/lowCode',
      name: 'lowCode',
      icon: 'el-aside-didaima', //iconfont 名称
      url: 'lowCode',
      lable: '低代码模块', //菜单标题
      component: () => import('@/views/lowCode/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/hotUpdateModule',
      name: 'hotUpdateModule',
      icon: 'el-aside-regengxin', //iconfont 名称
      url: 'hotUpdateModule',
      lable: '热更新模块', //菜单标题
      component: () => import('@/views/hotUpdateModule/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
   {
      path: '/video',
      name: 'video',
      icon: 'el-aside-shishishipin', //iconfont 名称
      url: 'video',
      lable: '实时播放', //菜单标题
      component: () => import('@/views/videojs/index.vue'),
      meta: {
         requiresAuth: false, //是否需要登录
      },
   },
];
export default Menu;
