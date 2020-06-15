<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100vh">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click="jumpTo('/admin/writing')">
          <a-icon type="user" />
          <span>写作</span>
        </a-menu-item>
        <a-menu-item key="2" @click="jumpTo('/admin/article')">
          <a-icon type="book" />
          <span>博文管理</span>
        </a-menu-item>
        <a-menu-item key="3" @click="jumpTo('/admin/page-manage')">
          <a-icon type="appstore" />
          <span>综合管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    jumpTo(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
