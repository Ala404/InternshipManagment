<template>
  <div class="h-full">
    <!-- <StudentView/> -->
    <!-- <AdminView/> -->
    <!-- <SupervisorView/> -->
    <!-- <LoginForm /> -->
    <!-- <SignUpForm /> -->
    <!-- <LandingPageView /> -->
    <router-view >

    </router-view>
  </div>
</template>

<script>
import StudentView from "./views/studentViews/StudentView.vue";
import AdminView from "./views/adminViews/AdminView.vue";
import SupervisorView from "./views/supervisorViews/SupervisorView.vue";
import LoginForm from "./components/login-signup/LoginForm.vue";
import SignUpForm from "./components/login-signup/SignUpForm.vue";
import LandingPageView from "./views/LandingPageView.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    LandingPageView,
    StudentView,
    AdminView,
    SupervisorView,
    LoginForm,
    SignUpForm
  },
  created() {
    // this.$store.dispatch("getNotifications");
    //clearing local storage if route is "/"
    // if (this.$route.path === "/landing") {
    //   localStorage.clear();
    // }
   
  },
};
</script>
