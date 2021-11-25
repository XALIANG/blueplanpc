const configList = [
    {
        type: 'layout',
        componentType: 'flex',
        name: '栅格',
        gutter: 10,
        drag: [
            {
                span: 8,
                order: 4,
                list: []
            },
            {
                order: 3,
                span: 8,
                list: []
            },
            {
                order: 4,
                span: 8,
                list: []
            }
        ]
    },
    {
        type: 'input',
        name: '输入框',
        size: 'default',
        width: '200px',
        defaultValue: '',
        disabled: false,
        labelWidth: '80px',
        placeholder: '请输入'
    }, {
        type: 'textarea',
        name: '文本域',
        size: 'mini',

        width: '200px',
        defaultValue: '',
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
        dateType: "date",
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

import encoder from "../encoder";
class FormConmponents {
    constructor(list = [], baseMap = {}) {
        this.formList = configList;
        if (list.length >= 0) {
            list.forEach(config => this.put(config));
        }
        this._encoder = new encoder(baseMap);
    }
    put(config) {
        const index = this.__fn_search__(config.type)
        if (index < 0) {
            this.formList.push(config)
        } else {
            this.formList.splice(index, 1, config)
        }
    }

    del(...types) {
        types.forEach(type => {
            const index = this.__fn_search__(type)
            if (index >= 0) {
                this.formList.splice(index, 1)
            }
        })
    }

    build(data) {
        return this.__encoder__.build(data)
    }
    // 去重操作
    __fn_search__(type) {
        return !type ? -1 : this.formList.findIndex(config => {
            return type === config.type
        })
    }

    get list() {
        return this.formList
    }
}


export default FormConmponents;
