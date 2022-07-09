<template>
  <div>
    <h1>首页页面</h1>
    <!-- 传参1：{{ $route.query.title }} -->
    <hr />
    <ul>
      <li><router-link to="home1">home1</router-link>&nbsp;</li>
      <li><router-link to="home2">home2</router-link>&nbsp;</li>
      <li><router-link to="home3">home3</router-link>&nbsp;</li>
    </ul>
    <br />
    <button @click="btn">随机</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      const index = Math.floor(Math.random() * 3);
      const lis=document.querySelectorAll('li a')
      lis[index].click()
    },
  },
};
</script>

<style></style>
