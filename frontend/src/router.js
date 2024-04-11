import { createRouter, createWebHistory } from "vue-router";
// import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

import HomePage from "./pages/HomePage.vue";
import TsalinHuls from "./pages/TsalinHuls.vue";
import BaraaMaterial from "./pages/BaraaMaterial.vue";
import undsenHurungu from "./pages/undsenHurungu.vue";
import SheetA from "./pages/SheetA.vue";
import JournalA from "./pages/JournalA.vue";
import GuilbalA from "./pages/GuilbalA.vue";
import Ct_1 from "./pages/Ct_1.vue";
import Hynalt from "./pages/HynaltHu.vue";

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
    {
      path: "/undsenHurungu",
      name: "undsenHurungu",
      component: undsenHurungu,
      meta: { title: "Үндсэн хөрөнгө" },
    },
    {
      path: "/sheet",
      name: "SheetA",
      component: SheetA,
      meta: { title: "Sheet1" },
    },
    {
      path: "/journal",
      name: "Yrunhiijurnal",
      component: JournalA,
      meta: { title: "jurnal" },
    },
    {
      path: "/guilbal",
      name: "Guilbal",
      component: GuilbalA,
      meta: { title: "guilbal" },
    },
    {
      path: "/ct_1",
      name: "Ct_1",
      component: Ct_1,
      meta: { title: "ct_1" },
    },
    {
      path: "/hynalt",
      name: "Hynalt",
      component: Hynalt,
      meta: { title: "hynalt" },
    },
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
