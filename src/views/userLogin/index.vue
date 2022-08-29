<template>
  <div class="userlogin-container">
    <div class="center-box">
      <div class="login-form">
        <div class="form">
          <div class="login-title">{{ title }}</div>
          <a-tabs default-active-key="1" @change="callback">
            <a-tab-pane key="1" tab="账号密码登录">
              <a-form-model ref="ruleLogin" layout="horizontal" :rules="rules" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
                <a-form-model-item prop="user">
                  <a-input v-model="formInline.user" size="small" placeholder="账户：admin">
                    <a-icon slot="prefix" type="user" style="color: #40a9ff" />
                  </a-input>
                </a-form-model-item>
                <a-form-model-item prop="password">
                  <a-input v-model="formInline.password" type="password" size="small" placeholder="密码：******">
                    <a-icon slot="prefix" type="lock" style="color: #40a9ff" />
                  </a-input>
                </a-form-model-item>
                <a-form-model-item prop="code">
                  <a-input class="code-1" v-model="formInline.code" type="text " size="small" placeholder="验证码" @keyup.enter.native="login('ruleLogin')"> </a-input>
                  <span class="code-image" @click="obtainCode"><img ref="image" :src="`${currentUrl}/blue/code`" alt=""/></span>
                </a-form-model-item>
              </a-form-model>
            </a-tab-pane>
          </a-tabs>

          <div class="check-box">
            <a-checkbox @change="onChange"> 自动登录 </a-checkbox>
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
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/apis/user';
import settings from '@/settings';
import {rules} from './config';
export default {
  data() {
    return {
      currentUrl: process.env.VUE_APP_BASE_API,
      iconLoading: false,
      errorMsg: [],
      serviceCode: '',
      title: settings.userLoginTitle,
      codeImage: '',
      formInline: {
        user: '',
        password: '',
        code: ''
      },
      fromPhone: {
        numberPhone: '',
        code: ''
      },
    };
  },
  mounted() {
    this.obtianCode();
  },
  methods: {
    obtainCode() {
      this.$refs.image.src = `${this.currentUrl}/blue/code?ts=${new Date().getTime()}`;
    },
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
      this.$refs[ruleLogin].validate((valid) => {
        if (!valid) {
          this.iconLoading = !this.iconLoading;
          return;
        }
        userLogin({
          userName: this.formInline.user,
          password: this.formInline.password,
          code: this.formInline.code
        })
          .then((res) => {
            if (res.status === 200) {
              this.iconLoading = !this.iconLoading;
              const params = {
                userId: res.data.userId,
                userName: res.data.userName,
                token: res.data.token,
                headPortrait: res.data.userImage,
                userStatus: res.data.userStatus,
                userDescribe: res.data.userDescribe
              };
              sessionStorage.setItem('userForm', JSON.stringify(params));
              sessionStorage.setItem('token', res.data.token);
              this.$store.dispatch('user/setUserInfo', params);
              Message.loading('正在登录中...', 1).then(() => {
                this.$router.push('/');
                setTimeout(() => {
                  location.reload();
                }, 300);
                Notification['success']({
                  message: `Welcome ${res.data.userName}`,
                  description: `Hey, my friend`
                });
              });
            } else {
              this.iconLoading = !this.iconLoading;
              console.log(res);
            }
          })
          .catch((err) => {
            this.obtainCode();
            this.iconLoading = !this.iconLoading;
          });
      });
    },
    obtianCode() {}
  }
};
</script>

<style lang="scss" scoped>
/*Reset ang desing  */
.userlogin-container {
  .ant-tabs-bar {
    border: none;
  }

  .ant-form-item {
    margin-bottom: 5px;
  }

  .ant-form-item-control {
    input {
      height: 30px;
      border-radius: 0;
      border-radius: 5px;
    }

    .code {
      width: 240px;
      padding-right: 8px;
    }

    .code-image {
      display: inline-block;
      margin-left: 20px;
    }

    .code-1 {
      width: 180px;
      padding-right: 8px;
    }

    .code-from-mid {
      margin-left: 10px;
      position: relative;
      top: 5px;
    }

    .code + button {
      width: 135px;
      border-radius: 1px;
      padding-left: 8px;
    }
  }

  .ant-checkbox + span {
    padding-left: 1px;
  }
}</style
><style lang="scss" scoped>
.userlogin-container {
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-image: url('../../assets/image/background.png');
  background-repeat: repeat-y;
  background-size: cover;
  padding: 110px 0 144px;
  overflow: hidden;
  position: relative;

  .center-box {
    width: 1200px;
    height: 735px;
    background-image: url('../../assets/image/backgroundimage.png');
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    .login-form {
      position: absolute;
      width: 300px;
      max-width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(11%, -50%);
      overflow: hidden;
      z-index: 9999;
    }

    .login-title {
      margin-top: 12px;
      margin-bottom: 10px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      text-align: center;
    }

    .center-box {
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
      width: 100%;

      a {
        float: right;
      }
    }
  }

  // .center-image {
  //     width: 1200px;
  //     height: 735px;
  //     position: fixed;
  //     background-image: url("../../assets/image/backgroundimage.png");
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     z-index: -1;

  //     }
}

.ant-tabs-nav-scroll {
  border: none;
}

.login-image {
  width: 102px;
  height: 47px;
  padding-left: 30%;
}
</style>
