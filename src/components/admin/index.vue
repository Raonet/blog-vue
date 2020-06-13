<template>
  <div>
    <Login v-if="isShow" @func="getLoginStatus" />
    <Main v-if="!isShow" />
  </div>
</template>

<script>
import Login from "./login";
import Main from "./main";
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
      console.log(data);
    }
  }
};
</script>

<style lang="less" scoped></style>
