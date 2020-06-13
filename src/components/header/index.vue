<template>
  <div class="blog-header">
    <ul>
      <router-link to="/homepage">
        <li>首页</li>
      </router-link>
      <router-link to="/resource">
        <li>资源</li>
      </router-link>
      <router-link to="/msgboard">
        <li>留言板</li>
      </router-link>
    </ul>
    <!-- <span class="search-bar">
      <input type="text" class="blog-header-input" placeholder="请输入搜索内容" />
    </span>-->
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {}
};
</script>

<style lang="less" scoped>
.blog-header {
  height: 60px;
  background: #fff;
  padding: 0;
  .router-link-active {
    li {
      animation: onTitle 1s;
      background: rgb(87, 110, 117);
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
  .search-bar {
    input {
      position: absolute;
      height: 20px;
      width: 100px;
      padding: 4px 4px 4px 7px;
      border: 0;
      border-bottom: 1px solid #aaa;
      border-radius: 0;
      margin: 15px 0 0 0;
    }
    input:hover {
      animation: onInput 1s;
      width: 200px;
    }
    input:focus {
      animation: onInput 1s;
      width: 200px;
    }
  }
}
ul {
  list-style-type: none;
  height: 100%;
  width: 600px;
  display: inline-block;
  padding: 0;
  margin: 0;
  line-height: 60px;
  li {
    display: inline-block;
    margin: 0;
    padding: 0 30px 0 30px;
    width: 110px;
    cursor: pointer;
    color: #333;
    text-decoration: none;
  }
  li:hover {
    animation: onTitle 1s;
    background: rgb(87, 110, 117);
    color: #fff;
  }
  @keyframes onInput {
    from {
      width: 100px;
    }
    to {
      width: 200px;
    }
  }
  @keyframes onTitle {
    from {
      background: #fff;
    }
    to {
      background: rgb(87, 110, 117);
    }
  }
}
</style>
