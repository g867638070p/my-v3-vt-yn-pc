<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

import Aside from '@/components/Aside.vue';
import Header from '@/components/Header.vue';
import Tag from '@/components/Tag.vue';
</script>

<template>
   <el-container>
      <el-aside width="auto" class="layout-border__right">
         <Aside></Aside>
      </el-aside>
      <el-container>
         <el-header class="layout-border__bottom">
            <Header></Header>
         </el-header>
         <Tag></Tag>
         <el-main>
            <router-view></router-view>
         </el-main>
      </el-container>
   </el-container>
</template>

<style lang="scss" scoped>
.el-container {
   height: inherit;
   background: $global-background-color;
}
.el-header {
   background: $global-card-bg-color;
   color: $global-font-color;
   height: 50px;
}

.el-aside {
   background-color: #fff;
   color: $global-font-color;
   text-align: left;
   line-height: 200px;
}

.el-main {
   color: $global-font-color;
   text-align: center;
}
</style>
