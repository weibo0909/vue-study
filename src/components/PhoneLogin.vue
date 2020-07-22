<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="phoneForm">
            <el-form-item prop="phone">
                <el-input aria-placeholder="请输入手机号" v-model="ruleForm.phone">
                    <el-icon slot="prefix" class="el-icon-phone"></el-icon>
                </el-input>
            </el-form-item>
            <el-form-item prop="phoneCode">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-input aria-placeholder="请输入验证码" v-model="ruleForm.phoneCode">
                            <el-icon slot="prefix" class="el-icon-tickets"></el-icon>
                        </el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button @click="sendCode" :disabled="disabled">{{btnText}}</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button class="login-button" type="primary" @click="buttonClick">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'phoneLogin',
        data() {
            let checkPhone = (rule, value, callback) => {
                // console.log(value, rule, callback);
                if (!value) {
                    return callback(new Error('手机号不能为空'));
                } else {
                    let reg = /^1[3456789]\d{9}$/;
                    if (reg.test(value)) {
                        callback();
                    } else {
                        return callback(new Error('请输入正确的手机号'));
                    }
                }
            };
            return {
                rules: {
                    phone: {
                        validator: checkPhone,
                        trigger: 'blur'
                    },
                    phoneCode: {
                        required: true,
                        message: '短信验证码不能为空',
                        trigger: 'blur'
                    }
                },
                disabled: false,
                btnText: '发送验证码',
                time: 0
            };
        },
        props: {
            ruleForm: {
                type: Object,
                required: true
            },
            countDown: {
                type: Number,
                default: 60
            }
        },
        methods: {
            sendCode() {
                this.$refs.phoneForm.validateField('phone', errorMessage => {
                    if (errorMessage) {
                        this.$message.error(errorMessage);
                    } else {
                        let timer = setInterval(() => {
                            this.time--;
                            this.btnText = `${this.time}s后重新发送`;
                            this.disabled = true;
                            if (this.time === 0) {
                                clearInterval(timer);
                                this.time = this.countDown;
                                this.disabled = false;
                                this.btnText = '重新发送';
                            }
                        }, 1000);
                        this.$emit('send');
                    }
                });

            },
            buttonClick() {
                this.$refs.phoneForm.validate(valid => {
                    this.$emit(valid ? 'submit' : 'errorHandle');
                });
            }
        },
        mounted() {
            this.time = this.countDown;
        }
    };
</script>

<style scoped>
    .login-button {
        width: 100%;
    }
</style>