<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
                <div class="logo"></div>
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <back-top>
                        <router-view></router-view>
                    </back-top>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Menu from '../components/Menu';

    export default {
        name: 'Home',
        components: {Menu},
        methods: {}
    };
</script>

<style>
    .el-header {
        background-color: #0080ff;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #0f52ba;
        color: #333;
        text-align: center;
        line-height: 260px;
        height: 100vh;
    }

    .logo {
        height: 60px;
        width: 200px;
        background-image: url("../assets/logo.png");
        background-position: center;
        background-size: 60px 40px;
        background-repeat: no-repeat;
    }

    .el-main {
        background-color: #fafafa;
        color: #333;
        text-align: center;
        line-height: 160px;
        height: calc(100vh - 60px);
        position: relative;
    }
</style>
