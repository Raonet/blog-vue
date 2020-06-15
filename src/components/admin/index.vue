<template>
  <div>
    <Login v-if="isShow" @func="getLoginStatus" />
    <Main v-if="!isShow" />
  </div>
</template>

<script>
import Login from "./login";
import Main from "./main/index";
export default {
  name: "Admin",
  data() {
    return {
      isShow: true
    };
  },
  components: {
    Login,
    Main
  },
  methods: {
    getLoginStatus(data) {
      this.isShow = data;
      if (data === false) {
        this.$router.push("admin/writing");
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
