import Vue from "vue";
import {
  Avatar,
  Icon,
  List,
  Layout,
  Menu,
  Button,
  Input,
} from "ant-design-vue/lib";
import mavonEditor from "mavon-editor";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import router from "./router/index";
import "mavon-editor/dist/css/index.css";

Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.component(List.Item.Meta.name, List.Item.Meta);
Vue.component(Avatar.name, Avatar);
Vue.component(Icon.name, Icon);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.use(Menu);
Vue.use(Button);
Vue.use(Input);

Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
