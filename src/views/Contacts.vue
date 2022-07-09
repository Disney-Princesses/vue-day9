<template>
  <div>
    <ul>
        <li>
            <router-link to="/music/contacts/allcontacts">All Contacts</router-link>
        </li>
        <li>
             <router-link to="/music/contacts/alice">Alice</router-link>
        </li>
        <li>
            <router-link to="/music/contacts/bob">Bob</router-link>
        </li>
    </ul>
    <button @click="clickFn">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods: {
        clickFn(){
            let index = Math.floor(Math.random() * 3)
            let as = document.querySelectorAll('ul li a')
            as[index].click()
        }
    }
}
</script>

<style>

</style>