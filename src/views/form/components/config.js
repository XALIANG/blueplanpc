const configList = [
    {
        type: 'layout',
        componentType: 'flex',
        name: '栅格',
        gutter: 10,
        drag: [
            {
                span: 8,
                list: []
            },
            {
                span: 8,
                list: []
            },
            {
                span: 8,
                list: []
            }
        ]
    },
    {
        type: 'input',
        name: '输入框',
        size: 'mini',
        width: '200px',
        defaultdefaultValue: '',
        disabled: false,
        labelWidth: '80px',
        placeholder: '请输入'
    }, {
        type: 'textarea',
        name: '文本域',
        size: 'mini',
        width: '200px',
        defaultdefaultValue: '',
        disabled: false,
        labelWidth: '80px',
        placeholder: '请输入文本'
    }, {
        type: 'select',
        name: '选择框',
        size: 'mini',
        width: '200px',
        defaultValue: '',
        disabled: false,
        labelWidth: '80px',
        placeholder: '请选择',
        option: [
            {
                label: '区域一',
                value: '1'
            }, {
                label: '区域二',
                value: '2'
            }
        ]
    }, {
        type: 'date',
        name: '日期',
        size: 'mini',
        width: '200px',
        defaultValue: '',
        disabled: false,
        labelWidth: '80px',
        placeholder: '请选择日期'
    }, {
        type: 'switch',
        name: '开关',
        size: 'mini',
        defaultValue: '',
        disabled: false,
        labelWidth: 80
    }, {
        type: 'checkbox',
        name: '多选',
        size: 'mini',
        defaultValue: '',
        disabled: false,
         labelWidth: '80px',
        option: [
            {
                label: '选择一',
                value: '1',
                disabled: false
            }, {
                label: '选择二',
                value: '2',
                disabled: false
            }
        ]
    }, {
        type: 'radio',
        name: '单选',
        size: 'mini',
        defaultValue: '',
        disabled: false,
        labelWidth: '80px',
        option: [
            {
                label: '选择一',
                value: '1',
                disabled: false
            }, {
                label: '选择二',
                value: '2',
                disabled: false
            }
        ]
    }
];

class FormConmponents {
    constructor(list = []) {
        this.formList = configList;
    }
}


export default FormConmponents;
