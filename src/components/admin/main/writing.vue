<template>
  <div>
    <div style="display:flex; justify-content:center;margin: 0 0 5px 0;">
      <a-input ref="userNameInput" placeholder="请输入标题" style="width:200px;">
        <a-icon slot="prefix" type="edit" />
      </a-input>
    </div>
    <mavon-editor v-model="value" style="height:500px" />
    <div style="margin-top:10px;float: right;">
      <a-button>保存</a-button>
      <a-button type="primary">发布</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Writing",
  data() {
    return {
      value: ""
    };
  },
  components: {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
