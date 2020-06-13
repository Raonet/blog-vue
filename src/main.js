import Vue from "vue";
import App from "./App.vue";
import List from "ant-design-vue/lib/list";
import Avatar from "ant-design-vue/lib/avatar";
import Icon from "ant-design-vue/lib/icon";
import "ant-design-vue/dist/antd.css";

import router from "./router/index";

Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.component(List.Item.Meta.name, List.Item.Meta);

Vue.component(Avatar.name, Avatar);
Vue.component(Icon.name, Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
