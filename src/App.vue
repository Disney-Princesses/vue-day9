<template>
  <div>
    <!-- 模拟hash路由实现 -->
    <!-- <HashRouter></HashRouter> -->
    <!-- 附加练习_1.切换页面 -->
    <!-- <SwitchPage></SwitchPage> -->
    <!-- 附加练习_2.二级路由嵌套 -->
    <NestRouter></NestRouter>
  </div>
</template>

<script>
import HashRouter from '@/HashRouter.vue'
import SwitchPage from '@/SwitchPage.vue'
import NestRouter from '@/NestRouter.vue'
export default {
  components: {
    HashRouter,
    SwitchPage,
    NestRouter
  }
}
</script>

<style>

</style>