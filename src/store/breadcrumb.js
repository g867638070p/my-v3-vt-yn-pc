import { defineStore } from 'pinia';

export const breadcrumbStore = defineStore('breadcrumb', {
   state: () => ({
      breadcrumb: [],
   }),
   getters: {
      getBreadcrumb: (state) => {
         return state.breadcrumb;
      },
   },
   actions: {
      setBreadcrumb(value) {
         this.breadcrumb.push(value);
         console.log(this.breadcrumb);
      },
      removeBreadcrumb(value) {
         let index = this.breadcrumb.findIndex((item) => item.path == value);
         this.breadcrumb.splice(index, 1);
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
