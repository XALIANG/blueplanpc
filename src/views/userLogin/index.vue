<template>
  <div class="userlogin-container">
    <div class="login-form">
      <div class="login-image">
        <!-- <img src="../../assets/image/logo.png" alt="" /> -->
      </div>
      <div class="login-title">{{ title }}</div>
      <!-- 居中图片 -->
      <div class="center-image"></div>.
      <div class="center-box">
        <a-tabs default-active-key="1" @change="callback">
          <a-tab-pane key="1" tab="账号密码登录">
            <a-form-model
              ref="ruleLogin"
              layout="horizontal"
              :rules="rules"
              :model="formInline"
              @submit="handleSubmit"
              @submit.native.prevent
            >
              <a-form-model-item prop="user">
                <a-input
                  v-model="formInline.user"
                  size="small"
                  placeholder="账户：admin"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-model-item>
              <a-form-model-item prop="password">
                <a-input
                  v-model="formInline.password"
                  type="password"
                  size="small"
                  placeholder="密码：******"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    theme="twoTone"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-model-item>
              <a-form-model-item prop="code">
                <a-input
                  class="code-1"
                  v-model="formInline.code"
                  type="text "
                  size="small"
                  placeholder="验证码"
                  @keyup.enter.native="login('ruleLogin')"
                >
                </a-input>
                <span
                  class="code-from-mid"
                  @click="obtianCode"
                  v-html="svg"
                ></span>
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
        </a-tabs>
      </div>

      <div class="check-box">
        <a-checkbox @change="onChange"> 自动登录 </a-checkbox>
        <a href="">忘记密码</a>
      </div>
      <div class="submit-login">
        <a-button
          type="primary"
          size="large"
          :loading="iconLoading"
          @click="login('ruleLogin')"
        >
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
import { userLogin } from "@/apis/user";

import settings from "@/settings";
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (this.formInline.user === "") {
        callback(new Error("登录名为空"));
        this.$refs.formInline.validateField("checkPass");
      }
      callback();
    };
    let validatePass2 = (rule, value, callback) => {
      if (this.formInline.password === "") {
        callback(new Error("密码不得为空"));
        this.$refs.formInline.validateField("checkPass");
      }
      callback();
    };
    let validatePass3 = (rule, value, callback) => {
      if (this.formInline.code === "") {
        callback(new Error("验证码为空"));
        this.$refs.formInline.validateField("checkPass");
      }
      callback();
    };
    return {
      svg: "",
      iconLoading: false,
      errorMsg: [],
      serviceCode: "",
      title: settings.userLoginTitle,
      codeImage: "",
      formInline: {
        user: "",
        password: "",
        code: "",
      },
      fromPhone: {
        numberPhone: "",
        code: "",
      },
      rules: {
        user: [
          {
            required: true,
            validator: validatePass,
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            validator: validatePass2,
            trigger: "change",
          },
        ],
        code: [
          {
            required: true,
            validator: validatePass3,
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {
    this.obtianCode();
    console.log(settings);
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
      this.$refs[ruleLogin].validate((valid) => {
        this.$store.state.user.userForm.token = "admin";
        console.log(valid);
        if (!valid) {
          this.iconLoading = !this.iconLoading;
          return;
        }
        userLogin({
          userName: this.formInline.user,
          password: this.formInline.password,
        }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            Message.loading("正在登录中...", 1).then(() => {
              this.iconLoading = !this.iconLoading;
              this.$router.push("/");
              Notification["success"]({
                message: "Welcome",
                description: `Hey, my friend`,
              });
            });
          } else {
            console.log(res);
          }
        });
        // if (this.serviceCode != this.formInline['code']) {
        //     Notification['warning']({
        //         message: '验证码错误'
        //     })
        //     this.iconLoading = !this.iconLoading;
        //     this.formInline['code'] = '';
        //     return;
        // }
      });
    },
    obtianCode() {},
  },
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

    .code-1 {
      width: 200px;
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
}
</style><style lang="scss" scoped>
.userlogin-container {
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-image: url("../../assets/image/background.png");
  background-repeat: repeat-y;
  background-size: cover;
  padding: 110px 0 144px;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 300px;
    max-width: 100%;
    top: 26%;
    left: 51%;
    overflow: hidden;
    z-index: 999;

    .login-title {
      margin-top: 12px;
      margin-bottom: 10px;
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
}

.ant-tabs-nav-scroll {
  border: none;
}

.login-image {
  width: 102px;
  height: 47px;
  padding-left: 30%;
}

.center-image {
  width: 1200px;
  height: 735px;
  background-image: url("../../assets/image/backgroundimage.png");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.center-image {
  position: fixed;
}
</style>
