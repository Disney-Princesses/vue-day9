<template>
  <div>
    <h1>路由 - 工作原理手写</h1>
    <a href="#/my">我得</a>&nbsp; <a href="#/order">订单</a>&nbsp;
    <a href="#/tag">分类</a>&nbsp;
    <component :is="comName"></component>
  </div>
</template>

<script>
import MyVue from "@/views/my.vue";
import OrderVue from "@/views/order.vue";
import TagVue from "@/views/tag.vue";
export default {
  data() {
    return {
      comName: "MyVue",
    };
  },
  components: {
    MyVue,
    OrderVue,
    TagVue,
  },
  created() {
    // 监视window的hash变化
    window.onhashchange = () => {
      switch (location.hash) {
        case "#/my":
          this.comName = "MyVue";
          break;
        case "#/order":
          this.comName = "OrderVue";
          break;
        case "#/tag":
          this.comName = "TagVue";
          break;
      }
    };
  },
};
</script>

<style></style>
