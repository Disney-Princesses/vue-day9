<template>
  <div>
    <!-- 模拟hash路由实现 -->
    <!-- <HashRouter></HashRouter> -->
    <!-- 附加练习_1.切换页面 -->
    <SwitchPage></SwitchPage>
  </div>
</template>

<script>
import HashRouter from '@/HashRouter.vue'
import SwitchPage from '@/SwitchPage.vue'
export default {
  components: {
    HashRouter,
    SwitchPage
  }
}
</script>

<style>

</style>