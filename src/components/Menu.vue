<template>
    <el-menu class="el-menu-vertical"
             :default-active="$router.path"
             background-color="#0f52ba"
             text-color="#fff"
             active-text-color="#ffd04b"
             router>
        <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>学习一</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/a"> 跳转A页面</el-menu-item>
                <el-menu-item index="/b">跳转B页面</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: 'Menu',
        methods: {

        }
    };
</script>

<style scoped>
    .el-menu, .el-submenu, .el-menu-item {
        width: 200px;
        box-sizing: border-box;
        text-align: left;
    }

</style>