<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./header/index";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>

<style></style>
