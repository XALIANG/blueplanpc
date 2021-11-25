export default {
    /* 左侧拖拽按钮配置信息 */
    button: [
        {
            type: 'text',
            name: '文字',
            value: '',
            disabled: false,
            data: ''
        },
        {
            type: 'table',
            name: '表格',
            size: 'small',
            width: '100%',
            height: '',
            value: '',
            column: [
                {
                    fixed: '',
                    label: '名称',
                    width: '100px',
                    prop: ''
                },
                {
                    fixed: '',
                    label: '日期',
                    width: '100px',
                    prop: ''
                }
            ]
        }
    ],


    /* 视图模板 */
    viewer: {
        text: {
            template: '<a-link type="primary">{{item.name}}</a-link>',
            props: ['item']
        },
        table: {
            template: '<a-table :ref="item.key" :size="item.size" border :style="{width: (item.width === \'100%\' ? \'calc(\' + item.width + \' - 6px)\':item.width), margin: \'3px\'}"> \
                            <a-table-column v-for="(col, index) in item.column" :fixed="col.fixed" :title="col.label" :width="col.width" :key="index" :data-index="index" /> \
                       </a-table>',
            props: ['item'],
            created() {
                // console.log("simple table!")
            }
        }
    },



    /**
     * 生成代码模板
     * function 有四个参数：
     *  data: 构建数据
     *  bind: 数据绑定
     *  _fn_bind_: 数据绑定工具(function)
     *  _fn_build_： 模板构建工具(function)
     */
    build: {
        text: function (data, bind, _fn_bind_, _fn_build_) {
            console.log(data, bind, _fn_bind_, _fn_build_)
            return `<el-link type="primary">${data.name}</el-link>`
        },
        table: function (data, _bind_, _fn_bind_) {
            const item = function (list) {
                let html = ''
                list.forEach(item => {
                    html += `<a-table-column ${item.prop ? ":prop='" + item.prop + "'" : ""} fixed="${item.fixed}" label="${item.label}" width="${item.width}" />`
                })
                return html
            }
            let bind = _fn_bind_(data, _bind_, () => [])
            return `<a-table size="${data.size}" border ${bind ? ':data="data.' + data.value + '"' : ''} style="width: ${data.width}">${item(data.column)}</a-table>`
        }
    }
}