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