import { createRouter, createWebHistory } from "vue-router";
// import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

import HomePage from "./pages/HomePage.vue";
import TsalinHuls from "./pages/TsalinHuls.vue";
import BaraaMaterial from "./pages/BaraaMaterial.vue";
import SheetA from "./pages/SheetA.vue";
import JournalA from "./pages/JournalA.vue";
import GuilbalA from "./pages/GuilbalA.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: { title: "Нүүр" },
    },
    {
      path: "/salary",
      name: "Salary",
      component: TsalinHuls,
      meta: { title: "Цалин" },
    },
    {
      path: "/goods",
      name: "Goods",
      component: BaraaMaterial,
      meta: { title: "Бараа материал" },
    },
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
      {
        path: "/sheet",
        name: "SheetA",
        component: SheetA,
        meta: { title: "Sheet1" },
      } ,{
         path: "/journal",
         name: "Yrunhiijurnal",
         component: JournalA,
         meta: { title: "jurnal" },
       },{
        path: "/guilbal",
        name: "Guilbal",
        component: GuilbalA,
        meta: { title: "guilbal" },
      }
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
