<template>
  <div>
    <div class="footer_wrap">
      <a href="#/home">首页</a>
      <a href="#/type">分类</a>
      <a href="#/make">订单</a>
      <a href="#/mine">我的</a>
    </div>
    <p id='p'>显示路由切换的页面</p>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
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
  padding-top: 0px;
}
#p{
  margin-top:65px;
  margin-bottom: 10px;
}
</style>