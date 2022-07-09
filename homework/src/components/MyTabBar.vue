<template>
  <div class="my-tab-bar">
    <div class="tab-item" v-for="item in arr" :key="item.componentName">
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span ref='btn' @click="btn(`/${item.componentName}`)">{{item.text}}</span>
    </div>
    <div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    arr: {
      type: Array,
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          return true;
        }
        return false;
      }
    }
  },
  methods: {
    btn(targetPath) {
      // this.$refs.style.color='#1d7bff'
      this.$router.push({
        path: targetPath
      });
    }
  }
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>