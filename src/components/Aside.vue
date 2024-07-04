<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue';
import Menu from '../utils/aside';
import subMenu from '@/components/SubMenu.vue';
import { useTabStore } from '@/store/tag';

const useTab = useTabStore();

let menu = reactive(Menu);

function handleOpen(key, keyPath) {
   console.log(key, keyPath);
}

function handleClose(key, keyPath) {
   console.log('close', key, keyPath);
}
onMounted(() => {
   nextTick(() => {});
});
</script>

<template>
   <div style="line-height: 60px; text-align: center">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
   </div>
   <el-menu
      class="el-menu-vertical-demo"
      text-color="#333"
      active-text-color="#409eff"
      :collapse="useTab.isCollapse"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
      :default-active="useTab.isActive.path"
   >
      <subMenu :menuList="menu"></subMenu>
   </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
   width: 200px;
   // height: 100vh;
}
</style>
