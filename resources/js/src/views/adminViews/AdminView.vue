<template>
    <div class="flex">
      <AdminSidebar></AdminSidebar>
      <section class=" w-screen h-screen z-20">
      <AdminNavBar></AdminNavBar>
      <MainViewSection class=""/>


      <Footer></Footer>
      </section>
      
  
  
      
    </div>
  </template>
  
    <script>
    import AdminNavBar from "../../components/admin-components/AdminNavBar.vue";
    import AdminSidebar from '../../components/admin-components/AdminSidebar.vue';
    import MainViewSection from "../../components/public/MainViewSection.vue";
    import Footer from "../../components/public/Footer.vue";
    
  
    export default {
      components: {
        AdminNavBar,
        AdminSidebar,
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