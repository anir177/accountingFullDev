<template>
    <p class="flex flex-col items-center gap-6 text-xl font-medium text-white">
      Follow me on
      <span class="space-x-4">
        <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.link"
          target="_blank"
          :class="{
            'bg-gray-800 text-gray-300 hover:bg-gray-400 hover:text-gray-800':
              link.name === 'Github',
            'bg-blue-300 text-blue-800 hover:bg-blue-800 hover:text-blue-300':
              link.name === 'Linkedin',
            'bg-black text-white hover:bg-white hover:text-black':
              link.name === 'Medium',
          }"
          class="py-2 px-4 rounded transition-all duration-100"
          ><i :class="`fa fa-${link.icon}`"></i
        ></a>
      </span>
    </p>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    props: ["links"],
  };
  </script>