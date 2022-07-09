<template>
  <div>
    <!-- <p>喜剧分类</p>
    <p>动漫分类</p> -->
    <div class="nav_main">
      <router-link to="/type/recommend">国内的体育</router-link>
      <router-link to="/type/ranking">体育的主页</router-link>
      <router-link to="/type/songlist">国外的体育</router-link>
      <!-- {{$route.query.id}} -->
      <!-- {{$route.params}}
      {{$route.params.id}} -->
    </div>
    <div style="1px solid red">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a{
    margin-right:10px;
}
</style>