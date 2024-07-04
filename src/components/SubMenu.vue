<template>
   <div>
      <template v-for="(item, index) in menuList" :key="item.path">
         <el-menu-item @click="spickPath(item)" :index="item.path" v-if="!item.children">
            <el-icon :class="item.icon"></el-icon>
            <span>{{ item.lable }}</span>
         </el-menu-item>
         <el-sub-menu :index="item.path" v-else>
            <template #title>
               <el-icon :class="item.icon"></el-icon>
               <span>{{ item.lable }}</span>
            </template>
            <subMenu :menuList="item.children"></subMenu>
         </el-sub-menu>
      </template>
   </div>
</template>
<script>
export default {
   name: 'subMenu', //给组件命名
};
</script>
<script setup>
import { ref, reactive, defineProps, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTabStore } from '@/store/tag';
import { flatten } from '@/utils/publicMethods';
import Menu from '@/utils/aside';

const menu = ref(Menu);
const router = useRouter();
const useTab = useTabStore();

const props = defineProps({
   menuList: {
      type: Array,
   },
});

function spickPath(item) {
   let indexArr = item.url.split('/');
   let activeChildren = [];
   useTab.aisdeTag(item);
   if (indexArr.length) {
      indexArr.forEach((item) => {
         let obj = flatten(menu.value).filter((_) => _.name == item);
         activeChildren = [...activeChildren, ...obj];
      });
   }
   useTab.aisdeHeader(activeChildren);

   router.push(item.path);
}
onMounted(() => {});
</script>
<style lang="scss" scoped></style>
