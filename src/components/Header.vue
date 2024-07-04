<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import { Fold, Expand } from '@element-plus/icons-vue';
import { useTabStore } from '@/store/tag';
import { useRouter } from 'vue-router';
import { flatten, findPathToNode } from '@/utils/publicMethods';
import Menu from '@/utils/aside';

const menu = reactive(Menu);

const useImg = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png');
const useTab = useTabStore();
let breadcrumbPath = ref('');

function handleMenu() {
   useTab.collapseMenu();
}

function spickPath(item, index) {
   if (index == useTab.tagActive.length - 1) return;

   if (index !== useTab.tagActive.length - 1 && useTab.tagActive.length > 1) {
      // 获取当前点击的节点整条数据
      let pathData = findPathToNode(menu, item.name);
      // 获取当前点击的节点在整条数据中的索引
      let idx = pathData.findIndex((_) => _.name == item.name);

      // 获取当前点击跳转路径
      breadcrumbPath.value = handlePath(pathData[idx]).path;

      useTab.aisdeTag(handlePath(pathData[idx]));

      let indexArr = handlePath(pathData[idx]).url.split('/');
      let activeChildren = [];
      indexArr.forEach((item) => {
         let obj = flatten(menu).filter((_) => _.name == item);
         activeChildren = [...activeChildren, ...obj];
      });

      useTab.aisdeHeader(activeChildren);
   }
}
// 递归寻找父级第一个节点第一个子节点
function handlePath(data) {
   if (data.children) {
      return handlePath(data.children[0]);
   } else {
      return data;
   }
}

onMounted(() => {});
</script>

<template>
   <div class="header">
      <div class="left">
         <el-button @click="handleMenu" type="plain" style="font-size: 20px">
            <el-icon>
               <Fold v-if="useTab.isCollapse" />
               <Expand v-if="!useTab.isCollapse" />
            </el-icon>
         </el-button>
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
               v-for="(item, index) in useTab.tagActive"
               :key="item.path"
               @click="spickPath(item, index)"
               :to="{ path: breadcrumbPath }"
            >
               {{ item.lable }}
            </el-breadcrumb-item>
         </el-breadcrumb>
      </div>
      <div class="right">
         <el-dropdown trigger="click" szie="mini">
            <div class="el-dropdown-link">
               <img class="img" :src="useImg" alt="" />
               <span>Admin</span>
            </div>
            <template #dropdown>
               <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
               </el-dropdown-menu>
            </template>
         </el-dropdown>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.header {
   display: flex;
   justify-content: space-between;
   box-sizing: border-box;
   align-items: center;
}
.left {
   display: flex;
   align-items: center;
}
h3 {
   margin-left: 20px;
   line-height: 28px;
}
.el-dropdown {
   height: 50px;
   box-sizing: border-box;
   display: flex;
   align-items: center;
}
.el-dropdown-menu {
   margin: 5px 0;
}
.el-breadcrumb {
   margin-left: 20px;
}
.img {
   width: 40px;
   height: 40px;
   border-radius: 50%;
}
::deep.el-breadcrumb__inner,
.is-link {
   color: #cccccc;
}
::deep.el-breadcrumb__item:last-child .el-breadcrumb__inner {
   color: rgb(255, 208, 75);
   font-weight: blod;
}
.el-dropdown-link {
   display: flex;
   align-items: center;
}
</style>
