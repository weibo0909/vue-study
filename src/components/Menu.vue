<template>
    <el-menu :default-openeds="['1','3']"
             default-active="2"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             background-color="#004771"
             text-color="#fff"
             active-text-color="#ffd04b"
             router>
        <el-menu-item index="/login">
            <i class="el-icon-user"></i>
            <span>用户登录</span>
        </el-menu-item>
        <el-submenu index="/">
            <template slot="title">
                <i class="el-icon-location"></i>
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
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

<style scoped>
    .el-menu {
        width: 200px;
        box-sizing: border-box;
    }

    .el-submenu {
        width: 200px;
        box-sizing: border-box;
    }
</style>