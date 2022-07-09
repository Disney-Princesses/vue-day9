<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <MyTabBar :arr="tabList"></MyTabBar>
    <div style="margin-top:45px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";

import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";

export default {
  name: "App",
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList"
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch"
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo"
        }
      ]
    };
  },
  created() {
    this.$axios({
      url: "/api/cart"
    }).then(res => {
      this.list = res.data.list;
      console.log(this.list);
    });
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  }
};
</script>

<style>
</style>