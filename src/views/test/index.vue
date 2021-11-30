<template>
  <a-layout>
    <a-form-model style="width: 100%" :model="data" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-row id="layout_1638263531290" :gutter="10">
        <a-col id="layout_1638263531290_0" :span="8">
          <a-form-model-item size="default" label="输入框">
            <a-input style="width: 200px" id="input_1638263533605" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item size="default" label="输入框">
            <a-input style="width: 200px" id="input_1638263540852" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item size="mini" label="单选">
            <a-radio-group id="radio_1638263567249">
              <a-radio id="radio_1638263567249_0" label="1">选择一</a-radio>
              <a-radio id="radio_1638263567249_1" label="2">选择二</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col id="layout_1638263531290_1" :span="8">
          <a-form-model-item size="mini" label="文本域">
            <a-input resize="none" id="textarea_1638263544735" style="width: 200px" type="textarea" placeholder="请输入文本" />
          </a-form-model-item>
          <a-form-model-item size="mini" label="多选">
            <a-checkbox-group id="checkbox_1638263548943">
              <a-checkbox id="checkbox_1638263548943_0" label="1">选择一</a-checkbox>
              <a-checkbox id="checkbox_1638263548943_1" label="2">选择二</a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item size="mini" label="日期">
            <a-date-picker style="width: 200px" id="date_1638263546550" type="date" placeholder="请选择日期" />
          </a-form-model-item>
        </a-col>
        <a-col id="layout_1638263531290_2" :span="8">
          <a-form-model-item size="mini" label="日期">
            <a-date-picker style="width: 200px" id="date_1638263571107" type="date" placeholder="请选择日期" />
          </a-form-model-item>
          <a-form-model-item size="mini" label="开关">
            <a-switch id="switch_1638263576098" />
          </a-form-model-item>
          <a-form-model-item size="mini" label="单选">
            <a-radio-group id="radio_1638263578395">
              <a-radio id="radio_1638263578395_0" label="1">选择一</a-radio>
              <a-radio id="radio_1638263578395_1" label="2">选择二</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>
<style></style>
