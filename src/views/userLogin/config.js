function validatePass(rule, value, callback) {
    if (this.formInline.user === '') {
        callback(new Error('登录名为空'));
        this.$refs.formInline.validateField('checkPass');
    }
    callback();
};
function validatePass2(rule, value, callback) {
    if (this.formInline.password === '') {
        callback(new Error('密码不得为空'));
        this.$refs.formInline.validateField('checkPass');
    }
    callback();
};
function validatePass3(rule, value, callback) {
    if (this.formInline.code === '') {
        callback(new Error('验证码为空'));
        this.$refs.formInline.validateField('checkPass');
    }
    callback();
};


export const rules = {
    user: [
        {
            required: true,
            validator: validatePass,
            trigger: 'change'
        }
    ],
    password: [
        {
            required: true,
            validator: validatePass2,
            trigger: 'change'
        }
    ],
    code: [
        {
            required: true,
            validator: validatePass3,
            trigger: 'change'
        }
    ]
}