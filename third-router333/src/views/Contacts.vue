<template>
  <div>
    <ul>
      <li>
        <a href="#/contacts/all_contacts">All Contacts</a>
      </li>
      <li>
        <a href="#/contacts/alice">Alice</a>
      </li>
      <li>
        <a href="#/contacts/bob">Bob</a>
      </li>
    </ul>
    <button @click="btn(`/contacts/${target}`)">随机显示</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["all_contacts", "alice", "bob"],
      target: "all_contacts"
    };
  },
  methods: {
    btn(targetPath) {
      const index = Math.floor(Math.random() * this.arr.length);
      this.target = this.arr[index];
      this.$router.push({
        path: targetPath
      });
    }
  },
  // conputed:{
  //   index(){
  //     const index = Math.floor(Math.random() * this.arr.length);
  //     this.target = this.arr[index];
  //   }
  // }
};
</script>

<style>
</style>