<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTabStore } from '@/store/tag';
import { flatten } from '@/utils/publicMethods';
import { DArrowLeft, DArrowRight, RefreshRight, Setting } from '@element-plus/icons-vue';
import Menu from '@/utils/aside';

const menu = reactive(Menu);

const router = useRouter();
const route = useRoute();
const useTab = useTabStore();

const handleClose = (item, index) => {
   let length = useTab.headerTitle.length - 1;
   useTab.closeTags(item);
   if (item.name !== route.name) return;
   if (index === length) {
      router.push({
         name: useTab.headerTitle[index - 1].name,
      });
   } else {
      router.push({
         name: useTab.headerTitle[index].name,
      });
   }
};

function spickPath(item) {
   let indexArr = item.url.split('/');
   let activeChildren = [];
   useTab.aisdeTag(item);
   if (indexArr.length) {
      indexArr.forEach((item) => {
         let obj = flatten(menu).filter((_) => _.name == item);
         activeChildren = [...activeChildren, ...obj];
      });
   }
   useTab.aisdeHeader(activeChildren);
   router.push(item.path);
}
</script>

<template>
   <div class="flex gap-2 layout-border__bottom">
      <el-button :icon="DArrowLeft" />
      <div class="flex-wrap el-tags">
         <el-tag
            v-for="(tag, index) in useTab.headerTitle"
            :key="tag"
            :type="route.name == tag.name ? 'primary' : 'info'"
            :effect="route.name == tag.name ? 'dark' : 'plain'"
            :closable="useTab.headerTitle.length > 1"
            :disable-transitions="false"
            @click="spickPath(tag)"
            @close="handleClose(tag, index)"
         >
            {{ tag.lable }}
         </el-tag>
      </div>
      <div class="flex-wrap">
         <el-button :icon="DArrowRight" />
         <el-button :icon="RefreshRight" />
         <el-button :icon="Setting" />
      </div>
   </div>
</template>

<style lang="scss" scoped>
.gap-2 {
   height: 35px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: nowrap;
   background: $global-card-bg-color;
}
.flex-wrap {
   display: flex;
   flex-wrap: nowrap;
   align-items: center;
}
.el-tags {
   flex: 1;
}
.el-tag {
   height: 27px;
   line-height: 27px;
   cursor: pointer;
   margin-left: 6px;
}
.flex-wrap,
.el-button,
.el-button + .el-button {
   height: inherit;
   border: none;
}
.el-button + .el-button {
   margin-left: 0;
}
</style>
