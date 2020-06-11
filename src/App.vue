<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/header/index";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
  background: #f6f6f6;
}
input {
  border-radius: 5px;
  outline: none;
}
</style>
