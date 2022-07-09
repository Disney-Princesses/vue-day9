<template>
  <div>
    <div>
      <h1>App组件</h1>
      <a href="#/home">首页</a>&nbsp; <a href="#/movie">电影</a>&nbsp;
      <a href="#/about">关于</a>&nbsp;
    </div>
    <div>
      <component :is="comName"></component>
    </div>
  </div>
</template>

<script>
import MyHome from "@/components/MyHome.vue";
import MyMovie from "@/components/MyMovie.vue";
import MyAbout from "@/components/MyAbout.vue";
export default {
  data() {
    return {
      comName: "MyHome",
    };
  },
  components: {
    MyHome,
    MyMovie,
    MyAbout,
  },
  // 原理：在可以获取数据的时候就监听全局的hash
  // onhashchange事件一旦hash值有变化就会触发该事件
  // 判断hash值的不同设置要渲染的动态组件
  created() {
    window.onhashchange = () => {
      switch (location.hash) {
        case "#/home":
          this.comName = "MyHome";
          break;
        case "#/movie":
          this.comName = "MyMovie";
          break;
        case "#/about":
          this.comName = "MyAbout";
          break;
      }
    };
  },
};
</script>