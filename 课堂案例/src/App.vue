<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->
      <!-- <router-link to="find?name=ls">发现音乐</router-link>
      <router-link to="my?8683=20">我的音乐</router-link>
      <router-link to="part?23=23">朋友</router-link> -->
      <span @click="btn('find')">发现音乐</span>
      <span @click="btn('my')">我的音乐</span>
      <span @click="btn('part')">朋友</span>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(val) {
      this.$router.push({
        path: val,
        // name: val,
        query: {
          username: 123,
        },
        /* params: {
          age: 12345
        } */
      })
    }
  }
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap span:hover {
  background-color: #555;
}

.top {
  padding-top: 62px;
}
</style>