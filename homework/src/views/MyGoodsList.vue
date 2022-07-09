<template>
  <div>
    <MyTable :glist="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.goods_name}}</td>
        <td>{{scope.row.goods_price}}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            v-if="scope.row.inputShow"
            @blur="scope.row.inputShow=false"
            v-model="scope.row.inputValue"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue=''"
          />
          <button class="btn btn-primary btn-sm add-tag" @click="scope.row.inputShow=true">+Tag</button>
          <span
            class="badge badge-warning"
            v-for="(item,index) in scope.row.tags"
            :key="index"
            style="margin-right:10px"
          >{{item}}</span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)" v-isShow="show">删除</button>
          <button class="btn btn-success btn-sm"  @click='editFn'>修改权限</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
export default {
  data() {
    return {
      list: [],
      // personArr:['admin','test'],
      show:''
    };
  },
  components: {
    MyTable
  },
  created() {
    this.renderFn()
  },
  methods: {
     renderFn() {
      this.$axios({
        url: "/api/goods"
      }).then(res => {
        res.data.data.forEach(ele => {
          ele.inputShow = false;
        });
        this.list = res.data.data;
      });
    },
    del(id) {
      const index = this.list.findIndex(ele => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      // console.log(obj.inputValue, "===", obj.tags);
      if (obj.inputValue.trim() == "") {
        return "please enter message";
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = "";
    },
    editFn() {
      const yourname = prompt("请输入名字：");
      if (yourname == "admin") {
        this.show = 1;
      } else {
        this.show = 0;
      }
    },
  },
  directives:{
     isShow: {
      inserted(el, bind, vnode) {
        if (vnode.context[bind.expression] == 1) {
          // console.log(1);
          el.disabled = false;
        } else if (vnode.context[bind.expression] == 0) {
          // console.log(0);
          el.disabled = true;
        }
      },
      update(el, bind, vnode) {
        if (vnode.context[bind.expression] == 1) {
          // console.log(1);
          el.disabled = false;
        } else if (vnode.context[bind.expression] == 0) {
          // console.log(0);
          el.disabled = true;
        }
      },
    }
  }
};
</script>

<style>
</style>