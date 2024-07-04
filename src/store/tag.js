import { defineStore } from 'pinia';

// 使用defineStore创建一个新的store
export const useTabStore = defineStore('tab', {
   state: () => ({
      isCollapse: false,
      headerTitle: [
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
      ],
      isActive: {
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
      tagActive: [{ path: '/', name: 'home', lable: '首页', icon: 'el-aside-shouye', url: 'home' }],
   }),
   actions: {
      collapseMenu() {
         this.isCollapse = !this.isCollapse;
      },
      aisdeTag(str) {
         if (str.name !== this.isActive.name) this.isActive = str;
         if (str.name !== 'home') {
            let index = this.headerTitle.findIndex((item) => item.name === str.name);
            if (index === -1) {
               this.headerTitle.push(str);
            }
         }
      },
      aisdeHeader(val) {
         this.tagActive = val;
      },
      closeTags(val) {
         let index = this.headerTitle.findIndex((item) => item.name === val.name);
         this.headerTitle.splice(index, 1);
         if (val.name === this.isActive.name) this.isActive = this.headerTitle[index - 1];
      },
   },
   persist: {
      enabled: true,
      // strategies: [
      //    {
      //       // 自定义存储的 key，默认是 defineStore 的第一个参数，即 store.id
      //       key: 'local',
      //       // 可以指定任何 extends Storage 的实例，默认是 sessionStorage
      //       storage: localStorage,
      //       // state 中的字段名，按组打包储存
      //       paths: ['breadcrumb'],
      //    },
      // ],
   },
});
