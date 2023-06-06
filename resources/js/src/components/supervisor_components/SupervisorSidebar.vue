

<template>
<div class="relative h-screen font-sans font-medium">
  <!--Menu button-->

  <span class="absolute -right-3 z-30 ">
    <i class="fas fa-bars w-4 h-4 text-primary before:bg-white before:p-1 before:rounded-sm text-2xl  pl-1 mt-16 cursor-pointer" @click="toggleSidebar"

    ></i>
  </span>

  <!-- Sidebar -->
    <aside  class=" box-border flex flex-col  font-sans  transition-all "
    :class="{'w-0 max-lg:w-60 ': !showSidebar, 'w-60 max-lg:w-0': showSidebar}"
    >
  
     
  
  
      <!-- Navigation Links -->
      <nav class="flex-grow p-4 bg-white w-60 h-screen ">
        
        <ul class="flex flex-col ">
              <!-- Logo -->
          <li class="flex items-center justify-self-start w-32 h-24 mb-5 ">
        <a href="/"><img src="../../../public/img/LogoSample_ByTailorBrands.jpg" alt="Logo" class="w-32 h-28 mr-4 ml-10"></a>
        
        </li>
  
        
          <li >
            <router-link to="/supervisor-internships"  class="flex items-center text-gray-600 
             hover:text-white hover:bg-slate-300 ease-in m-0 rounded-md p-2   "
             active-class="bg-primary text-white"
             :class="{ 'bg-primary text-white': $route.path === '/supervisor-internships' }">
              <i class="fas fa-briefcase mr-8"></i>
              <span :class="{ 'text-white': $route.path === '/supervisor-internships'}">Internships</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/supervisor-applications" class="flex items-center text-gray-600
             hover:text-white hover:bg-slate-300 ease-in m-0 rounded-md p-2"
             :class="{ 'bg-primary text-white': $route.path === '/supervisor-applications' }">
             <i class="fa-solid fa-feather mr-8"></i>
              <span :class="{ 'text-white': $route.path === '/supervisor-applications'}">Students Applications</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/interns" class="flex items-center text-gray-600
             hover:text-white hover:bg-slate-300 ease-in m-0 rounded-md p-2 "
             :class="{ 'bg-primary text-white': $route.path === '/interns' }">
             <i class="fa-solid fa-address-card mr-8"></i>
              <span :class="{ 'text-white': $route.path === '/interns'}">Interns</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/certificated-students" class="flex items-center text-gray-600
             hover:text-white hover:bg-slate-300 ease-in m-0 rounded-md p-2"
             :class="{ 'bg-primary text-white': $route.path === '/certificated-students' }">
             <i class="fa-solid fa-user mr-8"></i>
            <span :class="{ 'text-white': $route.path === '/certificated-students'}">Certificates</span>
            </router-link>
          </li>
          <li class="">
            <router-link  to="/supervisor-notifications" class="flex items-center text-gray-600
             hover:text-white hover:bg-slate-300 ease-in m-0 rounded-md p-2 " 
            :class="{ 'bg-primary text-white': $route.path === '/supervisor-notifications' }">
              <i class="fas fa-home mr-8  "  :class="{ 'text-white': $route.path === '/supervisor-notifications'}"></i>
              <span :class="{ 'text-white': $route.path === '/supervisor-notifications'}">Notifications</span>
            </router-link>
          </li>
        </ul>
      </nav>
     
    </aside>
</div>
  
</template>

<script>

export default {
  name: "Sidebar",
  data() {
    return {
      logoPath: "../../../public/img/LogoSample_ByTailorBrands.jpg",
      showSidebar: true
    }
  },
  components: {
    
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
  // add necessary data, methods or lifecycle hooks here
};
</script>


