import Vue from "vue";
import App from "./App.vue";
import { Avatar, Icon, List, Layout, Menu } from "ant-design-vue/lib";
import "ant-design-vue/dist/antd.css";

import router from "./router/index";

Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.component(List.Item.Meta.name, List.Item.Meta);
Vue.component(Avatar.name, Avatar);
Vue.component(Icon.name, Icon);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Menu.name, Menu);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
