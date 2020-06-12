import Vue from "vue";
import Router from "vue-router";

import Home from "../components/home.vue";
import Admin from "../components/admin/index.vue";
import Homepage from "../components/homepage/index.vue";
import Msgboard from "../components/msgboard/index.vue";
import Resources from "../components/resources/index.vue";

Vue.use(Router);

Vue.component("Admin", Admin);
Vue.component("Home", Home);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/homepage",
    },
    {
      path: "",
      component: Home,
      name: "Home",
      children: [
        {
          path: "/homepage",
          component: Homepage,
          name: "Homepage",
        },
        {
          path: "/msgboard",
          component: Msgboard,
          name: "Msgboard",
        },
        {
          path: "/resource",
          component: Resources,
          name: "Resource",
        },
      ],
    },
    {
      path: "/admin",
      component: Admin,
      name: "Admin",
    },
  ],
});
