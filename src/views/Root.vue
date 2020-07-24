<template>
    <div class="root">
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
        name: 'Root',
        components: {Menu},
        methods: {}
    };
</script>

<style scoped lang="scss">
    @import "../assets/views/Root.scss";
</style>
