<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a>-->
      <router-link to="find">发现音乐</router-link>
      <router-link to="my">我的音乐</router-link>
      <!-- <router-link to='part?name=大可爱'>朋友</router-link> -->
      <router-link to='part/小天使/77'>朋友</router-link>
      <!-- <span @click="oneBtn">朋友-小传</span>
      <span @click="twoBtn">朋友-小智</span> -->

      <!-- <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="btn('/part', 'Part')">朋友</span>-->
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(targetPath, targetName) {
      this.$router.push({
        // path:targetPath
        name: targetName
      });
    },
    oneBtn() {
      this.$router.push({
        name: "Part",
        query: {
          username: "小传"
        }
      });
    },
    twoBtn() {
      this.$router.push({
        name: "Part",
        params: {
          username: "小传"
        }
      });
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
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>