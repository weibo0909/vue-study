<template>
    <div class="home">
        <el-table :data="tableData"
                  style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from 'axios';

    export default {
        name: 'Home',
        data() {
            return {
                tableData: []
            };
        },
        created() {
            axios.get('/data.json').then(res => {
                console.log(res.data);
                this.tableData = res.data;
            });
        },
        methods: {}
    };
</script>

<style scoped lang="scss">
    @import "../assets/views/Home.scss";
</style>
