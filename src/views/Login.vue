<template>
    <div class="login-page">
        <h1>用户登陆</h1>
        <div class="login-content">
            <account-login :rule-form="ruleForm"
                           :rules="rules"
                           @submit="submit"
                           @errorhandle="errorhandle"
            ></account-login>
        </div>

        <!--        <h1>短信登陆组件</h1>-->
        <!--        <div class="login-content">-->
        <!--            <phone-login :rule-form="phoneForm"-->
        <!--                         :rules="rules"-->
        <!--                         :count-down="30"-->
        <!--                         @submit="submit"-->
        <!--                         @send="send"-->
        <!--                         @errorhandle="errorhandle"-->
        <!--            ></phone-login>-->
        <!--        </div>-->

    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'Login',
        props: {},
        methods: {
            ...mapActions(['login']),
            submit() {
                // this.$message.success('提交成功');
                this.login({
                    account: this.ruleForm.userName,
                    password: this.ruleForm.password
                });
            },
            errorhandle() {
                this.$message.error('表单填写有误，请检查！');
            },
            send() {
                this.$message.success('验证码已发送');
            }
        },
        data() {
            return {
                ruleForm: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [{
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur'
                    }, {
                        min: 2,
                        max: 6,
                        message: '用户名长度在2-6位',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }, {
                        min: 6,
                        max: 20,
                        message: '用户名长度在6-20位',
                        trigger: 'blur'
                    }]
                },
                phoneForm: {
                    phone: '',
                    phoneCode: ''
                }
            };
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/views/Login.scss";
</style>