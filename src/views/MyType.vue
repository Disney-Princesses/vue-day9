<template>
  <div>
    <!-- <p>喜剧分类</p>
    <p>动漫分类</p> -->
    <div class="nav_main">
      <router-link to="/type/recommend" class='click'>国内的体育</router-link>
      <router-link to="/type/ranking"   class='click'>体育的主页</router-link>
      <router-link to="/type/songlist"  class='click'>国外的体育</router-link>
      <button @click='btn'>随机显示</button>
      <!-- {{$route.query.id}} -->
      <!-- {{$route.params}}
      {{$route.params.id}} -->
    </div>
    <div style="1px solid red">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        btn(){
            let index=Math.floor(Math.random()*3);
            const arr=document.querySelectorAll('.nav_main a');
            arr[index].click();
        }
    }
};
</script>

<style scoped>
a {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 30px;
}
</style>