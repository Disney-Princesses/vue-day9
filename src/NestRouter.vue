<template>
    <div>
        <h3>嵌套路由</h3>
        <router-link to="/home">主页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/music">音乐</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>