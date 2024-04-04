import { createRouter, createWebHistory } from "vue-router";
// import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

import HomePage from "./pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
            meta: { title: "Нүүр" },
          },
        //   {
        //     path: "/1",
        //     name: "Home",
        //     component: HomePage,
        //     meta: { title: "Нүүр" },
        //   },
        //   {
        //     path: "/2",
        //     name: "Home",
        //     component: HomePage,
        //     meta: { title: "Нүүр" },
        //   },
        //   {
        //     path: "/3",
        //     name: "Home",
        //     component: HomePage,
        //     meta: { title: "Нүүр" },
        //   },
        //   {
        //     path: "/4",
        //     name: "Home",
        //     component: HomePage,
        //     meta: { title: "Нүүр" },
        //   },
        //   {
        //     path: "/5",
        //     name: "Home",
        //     component: HomePage,
        //     meta: { title: "Нүүр" },
        //   },{
        //     path: "/6",
        //     name: "Home",
        //     component: HomePage,
        //     meta: { title: "Нүүр" },
        //   }
        ],
        scrollBehavior(to) {
          if (to.hash) {
            return {
              el: to.hash,
              behavior: "smooth",
            };
          } else {
            return { top: 0 };
          }
        },
      });

      router.beforeEach((to, from, next) => {
        next();
      });
      
      export default router;