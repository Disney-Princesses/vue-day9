<template>
  <div>
    <router-link to="/home">首页</router-link> &nbsp;
    <router-link to="/my">我得</router-link> &nbsp;
    <router-link to="/tag">分类</router-link> &nbsp;
    <router-link to="/order">我得订单</router-link> &nbsp;

    <!-- 用原生的方法 -->
    <!-- <span @click="btn('/home', 'Home')">首页</span> &nbsp;
    <span @click="btn('/my', 'My')">我得</span> &nbsp;
    <span @click="btn('/order', 'Order')">订单</span> &nbsp;
    <span @click="btn('/tag', 'Tag')">分类</span> &nbsp; -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // methods: {
  //   btn(pathVal, nameVal) {
  //     this.$router.push({
  //       // path: pathVal,
  //       name: nameVal,
  // // 传参
  // query:{
  //   title:'我是jqury原生跳转传参'
  // },
  // 原链接显示
  // params: {
  //   title: "我是params原生跳转传参",
  // },
  // 链接上不显示
    //     });
    //   },
    // },
};
</script>

<style></style>
