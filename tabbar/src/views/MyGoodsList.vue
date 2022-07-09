<template>
    <div>
        <MyTable :arr="list">
            <template v-slot:thead>
                <th>序号</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <template v-slot:tbody="scope">
                <td>{{ scope.row.id }}</td>
                <td>{{ scope.row.goods_name }}</td>
                <td>{{ scope.row.goods_price }}</td>
                <td>
                    <input type="text" class="tag-input form-control" style="width: 100px" v-focus
                        @blur="scope.row.inputVisible = false" v-if="scope.row.inputVisible"
                        v-model="scope.row.inputValue" @keydown.enter="enterFn(scope.row)"
                        @keydown.esc="scope.row.inputValue = ''" />
                    <button class="btn btn-primary btn-sm add-tag" v-else
                        @click="scope.row.inputVisible = true">+Tag</button>
                    <span style="margin-right:8px" class="badge badge-warning" v-for="(item, index) in scope.row.tags"
                        :key="index">{{ item }}</span>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="delList(scope.row.id)" v-isShow="dome">删除</button>
                    <button class=" setData  btn-sm">编辑</button>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
    data() {
        return {
            list: [],
            newList: ['admin', 'test', 'developer'],
            // 根据dome的值显示删除按钮
            dome: 'admin'
        }
    },
    components: {
        MyTable,
    },
    created() {
        this.getDate()
    },
    methods: {
        getDate() {
            this.$axios({
                url: '/api/goods'
            }).then(res => {
                this.list = res.data.data
            })
        },
        delList(id) {
            const index = this.list.findIndex(item => item.id == id)
            this.list.splice(index, 1)
        },
        enterFn(obj) {
            if (obj.inputValue.trim() == '') return alert('enter message')
            obj.tags.push(obj.inputValue)
            obj.inputValue = ''
        }
    }
}
</script>

<style scoped>
.badge-warning {
    color: #fff;
    background-color: pink;
}

.setData {
    margin-left: 10px;
    color: #fff;
    background-color: skyblue;
    border: 0;

}
</style>