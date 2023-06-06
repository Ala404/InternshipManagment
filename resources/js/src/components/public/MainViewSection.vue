<template>
    <section class=" relative py-20 h-full  bg-gray-200 px-20 max-md:px-0 m-0 overflow-y-scroll flex-grow" >
      <!--adding the path of the current route on the top of the page-->
      <!-- <span class="absolute top-4 left-4 text-gray-600">{{ currentPath }}</span> -->
      
      <router-view></router-view>


      
    </section>
</template>

<script>



export default {
  name: 'MainViewSection',

  computed: {
    currentPath() {
      if (this.$route.path === "/")
        return "/home";

      return this.$route.path;

    }



  }
}
</script>

