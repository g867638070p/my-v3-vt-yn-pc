import { defineStore } from 'pinia';

// 使用defineStore创建一个新的store
export const useUserStore = defineStore('user', {
   // 唯一id，用于在应用中标识此store
   state: () => ({
      isLoggedIn: false, // 用户登录状态
      userInfo: null, // 用户信息
   }),
   actions: {
      // 登录动作
      login(userInfo) {
         this.isLoggedIn = true;
         this.userInfo = userInfo;
      },
      // 登出动作
      logout() {
         this.isLoggedIn = false;
         this.userInfo = null;
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
