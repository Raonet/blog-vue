<template>
  <div>
    <Login v-if="isShow" @func="getLoginStatus" />
  </div>
</template>

<script>
import Login from "./login";
export default {
  name: "Admin",
  data() {
    return {
      isShow: true
    };
  },
  components: {
    Login
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
