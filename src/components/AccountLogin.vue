<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="userName">
                <el-input aria-placeholder="请输入用户名" v-model="ruleForm.userName">
                    <el-icon slot="prefix" class="el-icon-user"></el-icon>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input aria-placeholder="请输入密码" v-model="ruleForm.password" show-password>
                    <el-icon slot="prefix" class="el-icon-lock"></el-icon>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-button" type="primary" @click="buttonClick">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'AccountLogin',
        props: {
            ruleForm: {
                type: Object,
                required: true
            },
            rules: {
                type: Object,
                required: true
            }
        },
        methods: {
            buttonClick() {
                this.$refs.ruleForm.validate(valid => {
                    this.$emit(valid ? 'submit' : 'errorHandle');
                });
            }
        }
    };
</script>

<style scoped>
    .login-button {
        width: 100%;
    }
</style>