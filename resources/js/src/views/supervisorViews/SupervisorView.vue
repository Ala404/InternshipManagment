<template>
  <div class="flex">
    <SupervisorSidebar></SupervisorSidebar>
    <section class="w-screen h-screen z-20">
      <SupNavBar></SupNavBar>
      <MainViewSection class="" />

      <Footer></Footer>
    </section>
  </div>
</template>
  
    <script>
import SupNavBar from "../../components/supervisor_components/SupNavBar.vue";
import SupervisorSidebar  from "../../components/supervisor_components/SupervisorSidebar.vue";
import MainViewSection from "../../components/public/MainViewSection.vue";
import Footer from "../../components/public/Footer.vue";

export default {
  components: {
    SupNavBar,
    SupervisorSidebar,
    MainViewSection,
    Footer,
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