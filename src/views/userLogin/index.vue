<template>
<div class="userlogin-container">
    <div class="login-form">
        <div class="login-image">图片</div>
        <div class="login-title">Blue plan is a love</div>
        <div class="center-box">
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="账号密码登录">
                    <a-form-model ref="ruleLogin" layout="horizontal" :rules="rules" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
                        <a-form-model-item prop="user">
                            <a-input v-model="formInline.user" placeholder="账户：admin" v-decorator="[
                                 formInline.user, { rules: [{ required: true, message: 'Please input your username!' }] }, ]">
                                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item prop="password">
                            <a-input v-model="formInline.password" type="password" placeholder="密码：******">
                                <a-icon slot="prefix" type="lock" theme="twoTone" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item prop="code">
                            <a-input class="code-1" v-model="formInline.code" type="text " placeholder="验证码" @keyup.enter.native="login">
                            </a-input>
                            <span class="code-from-mid" @click="obtianCode" v-html="svg"></span>
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
        <div class="submit-login">
            <a-button type="primary" size="large" :loading="iconLoading" @click="login('ruleLogin')">
                确定
            </a-button>
        </div>
        <div class="user-login">
            <router-link to="/register">注册用户</router-link>
        </div>
    </div>
</div>
</template>

<script>
import {
    VerificationCode
} from '@/apis/h1';

export default {
    data() {
        let validatePass = (rule, value, callback) => {
            if (this.formInline.user === '') {
                callback(new Error('登录名为空'));
                this.$refs.formInline.validateField('checkPass');
            }
            callback();
        };
        let validatePass2 = (rule, value, callback) => {

            if (this.formInline.user === '') {
                callback(new Error('密码不得为空'));
                this.$refs.formInline.validateField('checkPass');
            }
            callback();
        };
        let validatePass3 = (rule, value, callback) => {
            if (this.formInline.code === '') {
                callback(new Error('验证码为空'));
                this.$refs.formInline.validateField('checkPass');
            }
            callback();
        };
        return {
            svg: '',
            iconLoading: false,
            errorMsg: [],
            serviceCode: '',
            formInline: {
                user: '',
                password: '',
                code: ''
            },
            fromPhone: {
                numberPhone: '',
                code: ''

            },
            rules: {
                user: [{
                    required: true,
                    validator: validatePass,
                    trigger: 'change'
                }],
                password: [{
                    required: true,
                    validator: validatePass2,
                    trigger: 'change'
                }],
                code: [{
                    required: true,
                    validator: validatePass3,
                    trigger: 'change'
                }],
            }
        };

    },
    mounted() {
        this.obtianCode();
    },
    methods: {
        callback(key) {
            console.log(key);
        },
        handleSubmit(e) {
            console.log(e);
        },
        onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        },
        login(ruleLogin) {
            this.iconLoading = true;
            this.$refs[ruleLogin].validate(valid => {
                if (!valid) {
                    this.iconLoading = !this.iconLoading;
                    
                    return;
                }
                this.checkForm();
                if (this.serviceCode != this.formInline['code']) {
                    Notification['warning']({
                        message: '验证码错误'
                    })
                    this.iconLoading = !this.iconLoading;
                    this.formInline['code'] = '';
                    return;
                }
                Message.loading('正在登录中...', 1).then(() => {
                    this.iconLoading = !this.iconLoading;
                    this.$router.push('/');
                    Notification['success']({
                        message: 'Welcome',
                        description: `Hey, my friend`
                    });
                });
            })

        },
        obtianCode() {
            VerificationCode().then(res => {
                if (res.code == 200) {
                    this.svg = res.data.data;
                    this.serviceCode = res.data.text.toLowerCase();
                    console.log(this.serviceCode)
                }
                console.log(res)
            })
        },
        //类型检查 
        checkForm() {
            this.errorMsg = [];
            if (!this.formInline['user']) {
                this.errorMsg.push('登录名为空')
            }
            if (!this.formInline['password']) {
                this.errorMsg.push('密码不得为空')

            }
            if (!this.formInline['code']) {
                this.errorMsg.push('验证码为空')
            }

            console.log(this.errorMsg)
        }
    }
}
</script>

<style lang="scss">
/*Reset ang desing  */
.userlogin-container {
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

        .code-1 {
            width: 200px;
            padding-right: 8px;
        }

        .code-from-mid {
            margin-left: 10px;
            position: relative;
            top: 5px;
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
.userlogin-container {
    min-height: 100%;
    height: 100%;
    background-color: #fdfafa;
    padding: 110px 0 144px;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 375px;
        max-width: 100%;
        margin: auto;
        overflow: hidden;

        .login-title {
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

        .submit-login {
            max-width: 100%;
            margin: 13px 0 13px;

            button {
                width: 100%;
                border-radius: 1px;
            }
        }

        .user-login {
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
