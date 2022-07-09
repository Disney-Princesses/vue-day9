<template>
  <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/class">分类</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/my">我的</router-link>
      <h1>显示路由切换的页面↓</h1>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.router-link-active {
  background-color: #000;
  color: #fff;
}
</style>