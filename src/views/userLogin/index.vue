<template>
<div class="userRegister-container">
    <div class="register-form">
        <div class="register-image">图片</div>
        <div class="register-title">Blue plan is a love</div>
        <div class="center-box">
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="账号密码登录">
                    <a-form-model layout="horizontal" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
                        <a-form-model-item>
                            <a-input v-model="formInline.user" placeholder="账户：admin">
                                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="formInline.password" type="password" placeholder="密码：******">
                                <a-icon slot="prefix" type="lock" theme="twoTone" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                        </a-form-model-item>
                    </a-form-model>
                </a-tab-pane>
                <a-tab-pane key="2" tab="手机号登录" force-render>
                    <a-form-model layout="horizontal" :model="fromPhone" @submit="handleSubmit" @submit.native.prevent>
                        <a-form-model-item>
                            <a-input v-model="fromPhone.numberPhone" placeholder="手机号">
                                <a-icon slot="prefix" type="mobile" theme="twoTone" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input class="code" v-model="fromPhone.code" type="password" placeholder="验证码">
                                <a-icon slot="prefix" type="mail" theme="twoTone" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                            <a-button size="large">获取验证码</a-button>
                        </a-form-model-item>
                        <a-form-model-item>
                        </a-form-model-item>
                    </a-form-model>
                </a-tab-pane>
            </a-tabs>
        </div>
        <div class="check-box">
            <a-checkbox @change="onChange">
                自动登录
            </a-checkbox>
            <a href="">忘记密码</a>
        </div>
        <div class="submit-register">
            <a-button type="primary" size="large" :loading="iconLoading" @click="register">
                确定
            </a-button>
        </div>
        <div class="user-register">
            <a href="">注册用户</a>
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
                user: '',
                password: '',
            },
            fromPhone: {
                numberPhone: '',
                code: ''

            }
        };

    },
    mounted() {
        console.log(Message)
    },
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
            this.iconLoading = true;
            this.iconLoading = !this.iconLoading;
            Message.loading('正在登录中...', 1).then(() => {
                this.$router.push('/');
                Notification['success']({
                    message:'Welcome',
                    description:`Hey, my friend`
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
            height: 200px;
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
