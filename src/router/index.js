import Vue from "vue";
import Router from "vue-router";

import Home from "../components/home.vue";
import Admin from "../components/admin/index.vue";

Vue.use(Router);

Vue.component("Admin", Admin);
Vue.component("Home", Home);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      name: "Home",
    },
    {
      path: "/admin",
      component: Admin,
      name: "Admin",
    },
  ],
});
