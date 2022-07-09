<template>
  <div>
    <!-- <router-link to="/type/recommend">体育的主页</router-link> -->
    <div class="nav_main">
      <router-link to="/type/ranking/love">我的喜欢</router-link>
      <router-link to="/type/ranking/part">我的部分</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 30px;
}
</style>