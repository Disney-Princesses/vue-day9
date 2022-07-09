<template>
  <div>
    <h1>首页页面</h1>
    传参1：{{ $route.query.title }}
    <hr />

    <router-link to="home1">home1</router-link>&nbsp;
    <router-link to="home2">home2</router-link>&nbsp;
    <router-link to="home3">home3</router-link>&nbsp;
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
