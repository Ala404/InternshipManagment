<template>
    <div class="flex">
      <Sidebar></Sidebar>
      <section class=" w-screen h-screen z-20">
      <NavBar></NavBar>
      <MainViewSection class=""/>


      <Footer></Footer>
      </section>
      
  
  
      
    </div>
  </template>
  
    <script>
    import NavBar from "../../components/public/NavBar.vue";
    import Sidebar from '../../components/student_components/StudentSidebar.vue';
    import MainViewSection from "../../components/public/MainViewSection.vue";
    import Footer from "../../components/public/Footer.vue";
    
  
    export default {
      components: {
        NavBar,
        Sidebar,
        MainViewSection,
        Footer
      },
      data() {
        return {
          applied: true,
        
        };
      },
      methods: {
        toggelApply() {
          this.applied = !this.applied;
        },
      },
    };
    </script>