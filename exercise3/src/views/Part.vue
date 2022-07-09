<template>
  <div>

    <ul>
      <li>
        <router-link to="/part/test">All contacts</router-link>
      </li>
      <li>
        <router-link to="/part/test2">Alice</router-link>
      </li>
      <li>
        <router-link to="/part/test3">Bob</router-link>
      </li>
    </ul>
    <button @click="changeFn">随机显示</button>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['/part/test3', '/part/test2', '/part/test']
    }
  },
  methods: {
    changeFn() {
      const random = Math.floor(Math.random() * this.list.length)
      this.$router.push({
        path: this.list[random]
      })
    }
  }
}
</script>

<style scoped>
a {
  margin: 0 20px;
}
</style>