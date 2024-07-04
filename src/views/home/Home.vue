<script setup lang="ts">
import { ref } from 'vue';

const useImg = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png');
const tableData = ref([]);
const tableLable = ref({
   name: '课程',
   todayBuy: '今日购买',
   monthBuy: '本月购买',
   totalBuy: '总购买',
});
const orderData = ref([
   {
      name: '今日支付订单',
      value: 1234,
      icon: 'success',
      color: '#2ac7c9',
   },
   {
      name: '今日收藏订单',
      value: 1234,
      icon: 'star-on',
      color: '#2ac7c9',
   },
   {
      name: '今日未支付订单',
      value: 1234,
      icon: 's-goods',
      color: '#2ac7c9',
   },
   {
      name: '本月支付订单',
      value: 1234,
      icon: 'success',
      color: '#2ac7c9',
   },
   {
      name: '本月收藏订单',
      value: 1234,
      icon: 'star-on',
      color: '#2ac7c9',
   },
   {
      name: '本月未支付订单',
      value: 1234,
      icon: 's-goods',
      color: '#2ac7c9',
   },
]);
</script>

<template>
   <div class="home">
      <el-row :gutter="24">
         <el-col :span="10">
            <el-card class="box-card">
               <div class="user-info">
                  <img :src="useImg" />
                  <div class="user-name" style="margin-left: 20px">
                     <p>Admin</p>
                     <p>超级管理员</p>
                  </div>
               </div>
               <div class="login-info">
                  <p>上次登陆时间：<span>2024-3-25</span></p>
                  <p>上次登录地点：<span>重庆</span></p>
               </div>
            </el-card>
            <el-card class="buy-info" style="margin-top: 20px">
               <el-table :data="tableData" size="mini">
                  <el-table-column
                     v-for="(val, key) in tableLable"
                     :key="key"
                     :prop="key"
                     :label="val"
                  >
                  </el-table-column>
               </el-table>
            </el-card>
         </el-col>
         <el-col :span="14">
            <div class="order-info">
               <el-card
                  v-for="item in orderData"
                  :key="item.name"
                  :body-style="{ display: 'flex', padding: 0 }"
               >
                  <i
                     class="icon"
                     :class="`el-icon-${item.icon}`"
                     :style="{ background: item.color }"
                  ></i>
                  <div class="detail">
                     <p class="num">￥{{ item.value }}</p>
                     <p class="txt">{{ item.name }}</p>
                  </div>
               </el-card>
            </div>
            <el-card style="height: 200px">
               <div style="height: 200px" ref="echarts"></div>
            </el-card>
            <div class="graph">
               <el-card style="height: 180px">
                  <div style="height: 160px" ref="userEcharts"></div>
               </el-card>
               <el-card style="height: 180px">
                  <div style="height: 160px" ref="vidoEcharts"></div>
               </el-card>
            </div>
         </el-col>
      </el-row>
   </div>
</template>

<style lang="scss" scoped>
.home {
   height: 100%;
}
.user-info {
   display: flex;
   align-items: center;
   padding-bottom: 20px;
   border-bottom: 1px solid #cccccc;
   img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
   }
}
.login-info {
   text-align: left;
   margin-top: 20px;
}
.box-card p {
   line-height: 1;
   padding-bottom: 10px;
}
.order-info {
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   .el-card {
      display: grid;
      grid-template-columns: 200px;
      grid-template-rows: auto auto;
      margin-bottom: 10px;
      .icon {
         width: 25%;
         padding-top: 20px;
      }
      .detail {
         width: 75%;
         padding: 10px;
         align-items: center;
         p {
            text-align: left;
         }
      }
   }
}
.graph {
   display: flex;
   .el-card {
      width: 50%;
   }
}
</style>
