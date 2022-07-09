<template>
  <div>
    <h2>显示路由切换的页面</h2>
    <div>
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->
      <router-link to="find">主页</router-link>
      <router-link to="my">新闻</router-link>
      <router-link to="part">体育</router-link>

    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
a {
  margin: 0 20px
}
</style>