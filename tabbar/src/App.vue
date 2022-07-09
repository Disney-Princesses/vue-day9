<template>
  <div>
    <MyHeader title="tabber"></MyHeader>
    <div style="margin-top:45px">

      <!-- <component :is="comName"></component> -->
      <router-view></router-view>
      <!-- <router-link to="mylist"></router-link>
        <router-link to="mysearch"></router-link>
        <router-link to="myinfo"></router-link> -->

    </div>

    <MyTabBar :list="tabList" @changeTab="changeTabFn"></MyTabBar>

  </div>
</template>

<script>
import MyTabBar from './components/MyTabBar.vue'
import MyHeader from './components/MyHeader.vue'
/* 
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue' */
export default {
  data() {
    return {
      comName: "MyGoodsList",
      tabList: [ // 底部导航的数据
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    }
  },
  components: {
    MyTabBar,
    MyHeader,
    /*  
     MyGoodsList,
     MyGoodsSearch,
     MyUserInfo */
  },
  methods: {
    changeTabFn(val) {
      // console.log(val);
      this.comName = val
    }
  }
}
</script>

<style>
</style>