<template>
  <div>

    <div>
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->
      <router-link to="find">ULRouter</router-link>
      <router-link to="part">About</router-link>
      <router-link to="my">Contacts</router-link>
    </div>
    <hr>
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