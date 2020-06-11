<template>
  <div class="blog-header">
    <ul>
      <li>首页</li>
      <li>资源</li>
      <li>留言板</li>
    </ul>
    <div class="search-bar">
      <input
        type="text"
        class="blog-header-input"
        placeholder="请输入搜索内容"
      />
      <img src="../../../public/search.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.blog-header {
  height: 60px;
  background: #fff;
  padding: 0 0 0 50px;
  .search-bar {
    display: inline-block;
    input {
      height: 20px;
      width: 100px;
      padding: 4px 4px 4px 7px;
      border: 0;
      border-bottom: 1px solid #aaa;
      border-radius: 0;
    }
    input:hover {
      animation: onInput 1s;
      width: 200px;
    }
    input:focus {
      animation: onInput 1s;
      width: 200px;
    }
    img {
      width: 25px;
      line-height: 60px;
      cursor: pointer;
      position: absolute;
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
    margin: 0 10px;
    padding: 0 30px 0 30px;
    cursor: pointer;
    a {
      color: #42b983;
    }
  }
  li:hover {
    background: #b3ee3a;
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
}
</style>
