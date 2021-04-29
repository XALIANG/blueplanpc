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
                            <a-input v-model="formInline.password" type="password" placeholder="密码：....">
                                <a-icon slot="prefix" type="lock" theme="twoTone" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                        </a-form-model-item>
                    </a-form-model>
                </a-tab-pane>
                <a-tab-pane key="2" tab="手机号登录" force-render>
                    待开发
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                user: '',
                password: '',
            },
        };

    },
    methods: {
        callback(key) {
            console.log(key);
        },
        handleSubmit(e) {
            console.log(this.formInline);
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
    }
}
</style>




<style lang="scss" scoped>
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
            overflow: hidden;
        }
    }
}

.ant-tabs-nav-scroll {
    border: none;
}
</style>
