<template>
<div class="userRegister-container">
    <div class="register-form">
        <div class="register-image">图片</div>
        <div class="register-title">Blue plan is a love</div>
        <div class="center-box">
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="注册">
                    <a-form-model layout="horizontal" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
                        <a-form-model-item>
                            <a-input v-model="formInline.email" placeholder="邮箱">
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="formInline.password" type="password" placeholder="至少6位密码，区分大小写">
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="formInline.passwords" type="password" placeholder="至确认密码">
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input addon-before="+86" placeholder="11位手机号" />
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input class="code" v-model="fromPhone.code" type="password" placeholder="验证码">
                                <a-icon slot="prefix" type="mail" theme="twoTone" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                            <a-button size="large">获取验证码</a-button>
                        </a-form-model-item>
                    </a-form-model>
                </a-tab-pane>

            </a-tabs>
        </div>
        <div class="submit-register">
            <a-button type="primary" size="large" :loading="iconLoading" @click="register">
                注册
            </a-button>
        </div>
        <div class="user-register">
            <router-link  to="/login" >已有账户登录</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            iconLoading: false,
            formInline: {
                email: '',
                password: '',
                passwords: '',
            },
            fromPhone: {
                numberPhone: '',
                code: ''

            }
        };

    },
    mounted() {},
    methods: {
        callback(key) {
            console.log(key);
        },
        handleSubmit(e) {
            console.log(this.formInline);
        },
        onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        },
        register() {
            return;
            this.iconLoading = true;
            this.iconLoading = !this.iconLoading;
            Message.loading('正在登录中...', 1).then(() => {
                this.$router.push('/');
                Notification['success']({
                    message: 'Welcome',
                    description: `Hey, my friend`
                });
            });

        },
    }
}
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
    background-color: #fdfafa;
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
            color: rgba(0, 0, 0, .45);
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
