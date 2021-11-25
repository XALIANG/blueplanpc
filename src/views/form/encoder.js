const map = {}, pre = 'data.'

/**
 * 递归方法
 */
function fnBuild(data, bind, fn_bind, fn_build) {
    if (Array.isArray(data)) {
        let html = ''
        data.forEach(item => {
            html += fnBuild(item, bind, fn_bind, fn_build)
        })
        return html
    } else {
        if (map[data.type]) {
            return map[data.type](data, bind, fn_bind, fn_build)
        }
        else {
            return ''
        }
    }
}

/**
 * 数据绑定
 */
function fnBind(data, bind, _fn_) {
    if (data.value && data.value.trim().length > 0) {
        if (data.value.indexOf('.') > 0) {
            const split = data.value.split('.')
            let len = split.length, d = binds
            split.forEach((it, index) => {
                if (index + 1 !== len) {
                    d[it] = {}
                    d = d[it]
                } else {
                    d[it] = data.type === 'checkbox' ? [] : (_fn_ ? _fn_() : '')
                }
            })
        } else {
            bind[data.value] = data.type === 'checkbox' ? [] : (_fn_ ? _fn_() : '')
        }
        return true
    } else return false
}

/**
 * 布局组件生成代码
 */
function layout(data, _bind_) {
    const item = function (list) {
        let html = ''
        list.forEach((item, index) => {
            html += `<a-col id='${data.key}_${index}' :span='${item.span}'>${fnBuild(item.list, _bind_, fnBind, fnBuild)}</a-col>`
        })
        return html
    }
    return `<a-row id='${data.key}' :gutter='${data.gutter}'>${item(data.drag)}</a-row>`
}
map.layout = layout


/**
 * 输入框生成代码
 */
function input(data, _bind_) {
    let bind = fnBind(data, _bind_)
    return `<a-form-model-item size='${data.size}' label='${data.name}'><a-input ${bind ? 'v-model="' + pre + data.value + '"' : ''} style='width: ${data.width}' id='${data.key}' ${data.disabled ? 'disabled' : ''} placeholder='${data.placeholder}'/></a-form-model-item>`
}
map.input = input

/**
 * 选择框生成代码
 */
function select(data, _bind_) {
    const item = function (list) {
        let html = ''
        list.forEach(item => {
            html += `<a-select-option label='${item.label}' ${item.disabled ? 'disabled' : ''} value='${item.value}'/>`
        })
        return html
    }
    let bind = fnBind(data, _bind_)
    return `<a-form-model-item size='${data.size}' label='${data.name}'><a-select ${bind ? 'v-model="' + pre + data.value + '"' : ''} style='width: ${data.width}' id='${data.key}' ${data.disabled ? 'disabled' : ''} placeholder='${data.placeholder}' value=''>${item(data.option)}</a-select></a-form-model-item>`
}
map.select = select

/**
 * 日期框生成代码
 */
function date(data, _bind_) {
    let bind = fnBind(data, _bind_)
    return `<a-form-model-item size='${data.size}' label='${data.name}'><a-date-picker ${bind ? 'v-model="' + pre + data.value + '"' : ''} style='width: ${data.width}' id='${data.key}' ${data.disabled ? 'disabled' : ''} type="date" placeholder='${data.placeholder}'/></a-form-model-item>`
}
map.date = date


/**
 * 开关框生成代码
 */
function _switch(data, _bind_) {
    let bind = fnBind(data, _bind_)
    return `<a-form-model-item  size='${data.size}' label='${data.name}'><a-switch id='${data.key}' ${bind ? 'v-model="' + pre + data.value + '"' : ''} ${data.disabled ? 'disabled' : ''}/></a-form-model-item>`
}
map.switch = _switch


/**
 * 多选框生成代码
 */
function checkbox(data, _bind_) {
    const item = function (list) {
        let html = ''
        list.forEach((item, index) => {
            html += `<a-checkbox id='${data.key}_${index}' ${data.disabled ? 'disabled' : ''} label='${item.value}'>${item.label}</a-checkbox>`
        })
        return html
    }
    let bind = fnBind(data, _bind_)
    return `<a-form-model-item  size='${data.size}' label='${data.name}'><a-checkbox-group id='${data.key}' ${bind ? 'v-model="' + pre + data.value + '"' : ''}>${item(data.option)}</a-checkbox-group></a-form-model-item>`
}
map.checkbox = checkbox


/**
 * 单选框生成代码
 */
function radio(data, _bind_) {
    const item = function (list) {
        let html = ''
        list.forEach((item, index) => {
            html += `<a-radio id='${data.key}_${index}' ${data.disabled ? 'disabled' : ''} label='${item.value}'>${item.label}</a-radio>`
        })
        return html
    }
    let bind = fnBind(data, _bind_)
    return `<a-form-model-item  size='${data.size}' label='${data.name}'><a-radio-group id='${data.key}' ${bind ? 'v-model="' + pre + data.value + '"' : ''}>${item(data.option)}</a-radio-group></a-form-model-item>`
}
map.radio = radio


/**
 * 文本域代码生成
 */
function textarea(data, _bind_) {
    let bind = fnBind(data, _bind_)
    return `<a-form-model-item size='${data.size}' label='${data.name}'><a-input resize='none' id='${data.key}' ${bind ? 'v-model="' + pre + data.value + '"' : ''} style='width: ${data.width}' type="textarea" placeholder='${data.placeholder}'/></a-form-model-item>`
}
map.textarea = textarea



class encoder {
    constructor(map = {}) {
        this.map = map
        for (const key in map) {
            this.put(key, map[key])
        }
    }

    put(key, _Fn_) {
        this.map[key] = _Fn_
    }

    del(key) {
        delete this.map[key]
    }

    build(data) {
        if (!data || typeof data !== 'object') {
            return
        }
        const local = {}
        return {
            template: `<a-layout><a-form-model style='width: 100%' :model='${pre.substr(0, pre.length - 1)}' label-width='80px'>${fnBuild(data, local, fnBind, fnBuild)}</a-form-model></a-layout>`,
            data() {
                return {
                    data: local
                }
            }
        }
    }
}

export default encoder