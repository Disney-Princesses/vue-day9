<template>
  <div>
    <p>体育-改变人生</p>
    <router-link to="/part/test">体育的主页</router-link>
    <router-link to="/part/test2">国内的体育</router-link>
    <router-link to="/part/test3">国外的体育</router-link>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  margin: 0 20px;
}
</style>