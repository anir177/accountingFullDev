<template>
    <!-- <TheHeader v-if="showTodoNav" /> -->
  
    <!-- <ContactNavbar v-show="showHeaderFooter" />
    <WebNavbar v-show="showHeaderFooter" /> -->
  
    <RouterView />
  
    <!-- <WebFooter v-show="showHeaderFooter" /> -->
  
    <!-- <BackToTopButton /> -->
  </template>
  
  <script>
//   import { ref, watch } from "vue";
//   import { useRoute } from "vue-router";
//   import Cookies from "js-cookie";

  export default {
  name: "App",
  components: {  

  },
  setup() {
    // const route = useRoute();
  }
}
</script>