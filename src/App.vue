<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useQiankunStore } from '@/store/qiankun'
const qiankunStore = useQiankunStore()
</script>

<template>
  <router-link to="/vue/">
    <el-button type="text">Vue应用</el-button>
  </router-link>
  <router-link to="/react/">
    <el-button type="text">React应用</el-button>
  </router-link>
  <router-link to="/h5/">
    <el-button type="text">H5应用</el-button>
  </router-link>
  <div>基座全局数据：{{qiankunStore.user}}</div>
  <div id="micro-app"></div>
  <!-- <div id="micro-app2"></div>
  <div id="micro-app3"></div> -->
  <router-view/>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
