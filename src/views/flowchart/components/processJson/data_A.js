let dataA = {
  name: 'English',
  nodeList: [
    {
      id: '946qnf2ae',
      name: '开始',
      type: 'custom',
      left: '8px',
      top: '238px',
      ico: 'el-icon-shopping-cart-full',
      state: 'warning'
    },
    {
      id: 'dwof8hoyl4',
      name: '音标',
      type: 'custom',
      left: '331px',
      top: '495px',
      ico: 'el-icon-shopping-cart-full',
      state: 'success'
    },
    {
      id: '4j073fvovo',
      name: '语法框架',
      type: 'custom',
      left: '468px',
      top: '51px',
      ico: 'el-icon-shopping-cart-full',
      state: 'warning'
    },
    {
      id: 'dd8heqiro',
      name: '词汇量',
      type: 'custom',
      left: '634px',
      top: '298px',
      ico: 'el-icon-shopping-cart-full',
      state: 'success'
    },
    {
      id: 'z8qit2u6ng',
      name: '看文章拼句子',
      type: 'custom',
      left: '968px',
      top: '290px',
      ico: 'el-icon-shopping-cart-full',
      state: 'success'
    }
  ],
  lineList: [
    {
      from: '946qnf2ae',
      to: 'dwof8hoyl4'
    },
    {
      from: '946qnf2ae',
      to: 'dd8heqiro',
      label: '优先级'
    },
    {
      from: '946qnf2ae',
      to: '4j073fvovo'
    },
    {
      from: 'dwof8hoyl4',
      to: 'dd8heqiro'
    },
    {
      from: '4j073fvovo',
      to: 'dd8heqiro'
    },
    {
      from: 'dd8heqiro',
      to: 'z8qit2u6ng'
    }
  ]
};

export function getDataA() {
  return dataA;
}
