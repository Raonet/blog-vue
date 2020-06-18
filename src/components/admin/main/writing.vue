<template>
  <div>
    <div style="display:flex; justify-content:center;margin: 0 0 5px 0;">
      <a-input
        ref="userNameInput"
        placeholder="请输入标题"
        style="width:200px;"
        v-model="title"
      >
        <a-icon slot="prefix" type="edit" />
      </a-input>
    </div>
    <mavon-editor v-model="value" style="height:500px" />
    <div style="margin-top:10px;float: right;">
      <a-button>保存</a-button>
      <a-button type="primary" @click="submit()">发布</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Writing",
  data() {
    return {
      value: "",
      title: "",
    };
  },
  components: {},
  methods: {
    submit() {
      if (this.value === "") {
        alert("内容不能为空!");
        return;
      }
      if (this.title === "") {
        alert("标题不能为空!");
        return;
      }
      this.axios
        .post("api/article/add", {
          title: this.title,
          content: this.value,
          createTime: new Date(),
        })
        .then((res) => {
          if (res.data === "success") {
            alert("发布成功！");
            this.value = "";
            this.title = "";
          } else {
            alert("发布失败，请重试！");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped></style>
