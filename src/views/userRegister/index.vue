<template>
<div class="userRegister-container">
    <div class="register-form">
        <!-- <div class="register-image">图片</div> -->
        <div class="register-title">{{title}}</div>
        <div class="center-box">
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="注册">
                    <a-form-model ref="register" :rules="rules" layout="horizontal" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
                        <a-form-model-item prop="emailAndUserName">
                            <a-input v-model="formInline.emailAndUserName" placeholder="邮箱 | 用户名">
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item prop="password">
                            <a-input v-model="formInline.password" type="password" placeholder="至少6位密码，区分大小写">
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item prop="passwords">
                            <a-input v-model="formInline.passwords" type="password" placeholder="确认密码">
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item prop="code">
                            <a-input style="margin-right: 10px" class="code" v-model="formInline.code" placeholder="验证码" @keyup.enter.native="register('register')">
                            </a-input>
                            <span @click="obtainCode"><img ref="image" src="http://localhost:9999/conviction/blue/code" alt="" /></span>
                        </a-form-model-item>
                    </a-form-model>
                </a-tab-pane>
            </a-tabs>
        </div>
        <div class="submit-register">
            <a-button type="primary" size="large" :loading="iconLoading" @click="register('register')">
                注册
            </a-button>
        </div>
        <div class="user-register">
            <router-link to="/login">已有账户登录</router-link>
        </div>
    </div>
</div>
</template>

<script>
import {
    userRegister,
} from "@/apis/user.js";

import settings from "@/settings";

export default {
    data() {
        const validateUserName = (rule, value, callback) => {
            if (this.formInline.emailAndUserName === "") {
                callback(new Error("注册名为空"));
                this.$refs.ruleLogin.validateField();
            }
            callback();
        };

        const validatePassword = (rule, value, callback) => {
            if (this.formInline.password === "") {
                callback(new Error("密码不得为空"));
                this.$refs.ruleLogin.validateField();
            }
            callback();
        };

        const validatePasswords = (rule, value, callback) => {
            if (this.formInline.passwords === "") {
                callback(new Error("确认密码不得为空"));
                this.$refs.ruleLogin.validateField();
            }
            if (this.formInline.password !== this.formInline.passwords) {
                callback(new Error("俩次密码不一致"));
                this.$refs.ruleLogin.validateField();
            }
            callback();
        };
        const validateCode = (rule, value, callback) => {
            if (this.formInline.code === "") {
                callback(new Error("验证码为空"));
                this.$refs.ruleLogin.validateField();
            }
            callback();
        };
        return {
            iconLoading: false,
            title: settings.userLoginTitle,
            codeImage: "",
            formInline: {
                emailAndUserName: "",
                password: "",
                passwords: "",
                code: "",
            },
            errorMsg: [],
            rules: {
                emailAndUserName: [{
                    required: true,
                    validator: validateUserName,
                    trigger: "change",
                }, ],
                password: [{
                    required: true,
                    validator: validatePassword,
                    trigger: "change",
                }, ],
                passwords: [{
                    required: true,
                    validator: validatePasswords,
                    trigger: "change",
                }, ],

                code: [{
                    required: true,
                    validator: validateCode,
                    trigger: "change",
                }, ],
            },

        };
    },
    created() {},
    mounted() {},
    methods: {
        //验证码
        obtainCode() {
            this.$refs.image.src = `http://localhost:9999/conviction/blue/code?ts=${new Date().getTime()}`
        },
        callback(key) {
            console.log(key);
        },
        handleSubmit(e) {
            console.log(this.formInline);
        },
        onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        },
        register(formName) {
            this.iconLoading = true;
            this.iconLoading = !this.iconLoading;

            this.$refs[formName].validate((valid) => {
                if (!valid) return;
                userRegister({
                    userName: this.formInline.emailAndUserName,
                    password: this.formInline.passwords,
                    code: this.formInline.code
                }).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        Message.loading(res.msg, 0.5).then(() => {
                            this.$router.push("/login");
                        });
                    } else {
                        Message.warning(res.msg);
                    }
                });
            });
        },
    },
};
</script>

<style lang="scss">
/*Reset ang desing  */
.userRegister-container {
    .ant-tabs-bar {
        border: none;
    }

    .ant-form-item-control {
        input {
            height: 40px;
            border-radius: 0;
        }

        .code {
            width: 240px;
            padding-right: 8px;
        }

        .code+button {
            width: 135px;
            border-radius: 1px;
            padding-left: 8px;
        }
    }

    .ant-checkbox+span {
        padding-left: 1px;
    }
}
</style><style lang="scss" scoped>
.userRegister-container {
    min-height: 100%;
    height: 100%;
    background: linear-gradient(-45deg, rgba(46, 176, 236, 0.83) 0%, rgba(161, 167, 168, 0.82) 100%);
    padding: 110px 0 144px;
    overflow: hidden;

    .register-form {
        position: relative;
        width: 375px;
        max-width: 100%;
        margin: auto;
        overflow: hidden;

        .register-title {
            margin-top: 12px;
            margin-bottom: 40px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
            text-align: center;
        }

        .center-box {
            // height: 200px;
            overflow: hidden;
        }

        .check-box {
            display: flex;
            justify-content: space-between;
        }

        .submit-register {
            max-width: 100%;
            margin: 13px 0 13px;

            button {
                width: 100%;
                border-radius: 1px;
            }
        }

        .user-register {
            a {
                float: right;
            }
        }
    }
}

.ant-tabs-nav-scroll {
    border: none;
}
</style>
