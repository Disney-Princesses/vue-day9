<template>
  <div id="app">
    <h1>模拟hash路由实现</h1>
    <div>
      <a href="#/home">首页</a>&nbsp; 
      <a href="#/movie">电影</a>&nbsp;
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
  name: "App",
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
  created () {
    window.onhashchange = (val) => {
      console.log(val);
      console.log(location.hash);
      switch (location.hash){
        case '#/home':
          this.comName = 'MyHome'
          break
        case '#/about':
          this.comName = 'MyAbout'
          break
        case '#/movie':
          this.comName = 'MyMovie'
          break
      }
    }
  }
};
</script>
