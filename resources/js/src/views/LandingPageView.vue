<template>
  <div class="scroll-smooth">
    <!-- Navbar -->
    <nav class="bg-gradient-to-r from-primary from-10% via-white via-100% px-4 sm:px-32 py-2 font-semibold ">
      <div class="container mx-auto flex justify-between items-center my-4">
        <!-- Logo -->
        <a href="#" class="text-white font-bold text-3xl">Internify</a>

        <!-- Navigation Links -->
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white hover:text-tertiary">Home</a></li>
          <li>
            <a href="#about" class="text-white hover:text-tertiary">About Us</a>
          </li>
          <li>
            <a href="#services" class="text-white hover:text-tertiary">Services</a>
          </li>

          <li>
            <a href="#contact-us" class="text-white hover:text-tertiary">Contact Us</a>
          </li>
        </ul>

        <!-- Login and Sign Up Buttons -->
        <div>
          <router-link to="">
              <button @click="openLoginForm" class="bg-white text-tertiary px-4 py-2 rounded-md mr-4 border-2 border-tertiary transition-all">
                Login
              </button>
          </router-link>
          <router-link to="/signup">
            <button class="bg-secondary hover:bg-orange-700 text-white px-4 py-2 rounded-md">
              Register
            </button>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container w-full">
      <!-- landing -->
      <div class=" flex flex-col-reverse md:flex-row justify-between items-center bg-gradient-to-r from-primary from-10% via-white via-100% py-28">
        <!-- Left -->
        <div class="w-full md:w-1/2 mx-4 sm:mx-32 my-8 md:my-32">
          <p class="mb-4 text-white font-bold text-4xl md:text-6xl leading-10">
            Welcome To <span class="text-tertiary underline px-2 hover:bg-gradient-to-r from-secondary from-10% via-white via-100%">Internify</span> 
            Where you can 
            exceed your experience 
          </p>

          <div class="flex flex-col sm:flex-row justify-between w-64 font-bold">
           <router-link to="/signup">
              <button class="bg-secondary hover:bg-orange-700 text-white px-4 py-2 rounded-md mt-4 sm:mt-12">
                Get Started
              </button>
           </router-link>

         <a href="#about">
                <button class="bg-white text-tertiary hover:bg-cyan-700 hover:text-white  border-2 border-tertiary px-4 py-2 rounded-md mt-4 sm:mt-12">
                  Learn More
                </button>
         </a>
          </div>
        </div>

          <!-- Right -->
          <div class="w-full md:w-1/2">
            <img src="../../public/img/undraw_working_re_ddwy.svg" alt="landing" />
          </div>
        </div>
      </div>

     <!-- Login Form Modal -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 shadow-2xl">
      <div class="flex bg-white w-1/2 p-16 rounded-lg shadow-md ">
      <!-- SVG -->
      <div class="w-1/2  mr-12">
        <img src="..\..\public\img\undraw_login_re_4vu2.svg" alt="login" class="object-cover h-60" />
      </div>
      <!-- Login form code here... -->
    
       <form class="flex flex-col justify-center w-1/2 gap-4" @submit.prevent="validateForm">
    
        <h1 class="text-3xl font-bold text-center text-primary">Login</h1>
  
        <div class="flex flex-col space-y-2">
          <label for="email" class="text-sm font-bold" :class="{ 'border-red-500': triggerError }">Email</label>
          <input type="email" id="email" class="border border-gray-300 px-2 py-1 rounded-md" v-model="this.email" />
          <span v-if="triggerError" class="text-red-500 text-xs italic mb-4">Invalid email or password</span>
        </div>
  
        <div class="flex flex-col space-y-2">
          <label for="password" class="text-sm font-bold" :class="{ 'border-red-500': triggerError }">Password</label>
          <input :type="passwordVisible ? 'text' : 'password'" id="password" class=" border border-gray-300 px-2 py-1 rounded-md" v-model="this.password" />
          <!-- eye icon -->
          <i
            @click="togglePasswordVisibility"
            :class="
              passwordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
            "
            class="absolute top-1/2  left-2/3  transform -translate-y-2/3 text-gray-500 cursor-pointer"
  ></i>
          <span v-if="triggerError" class="text-red-500 text-xs italic mb-4">Invalid email or password</span>
        </div>
  
        <div class="flex justify-between items-center mt-4 w-1/3 gap-12">
          <button @click="closeLoginForm" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Cancel
          </button>
          <button @click="submitForm" class="bg-cyan-700 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      
      </form>
      
    </div>
    
  </div>
  
    <!-- About Us Section -->
    <section class=" flex p-16 bg-white" id="about">
      <img src="../../public/img/undraw_team_spirit_re_yl1v.svg" alt="about" class="  object-cover h-60">
      <div class=" container mx-auto px-4 sm:px-32">
        <h2 class="text-4xl font-bold text-secondary mb-8">About Us</h2>
        <p class="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla sed mauris maximus hendrerit.
          Vestibulum ac felis metus. Curabitur tristique euismod quam, sit amet rhoncus neque eleifend a. Nullam
          vestibulum volutpat mi, vitae fermentum metus tincidunt vitae. Quisque in posuere arcu. Mauris semper
          ullamcorper turpis, in sagittis lectus fermentum id. Nullam non libero cursus, sodales lectus sed, mattis
          lectus. Ut feugiat nulla et sem sagittis, vitae eleifend nulla scelerisque. Donec lacinia orci id lorem
          consectetur tristique. Sed scelerisque, nunc vel venenatis tempor, odio leo semper sem, a venenatis neque
          elit et mi. In efficitur tincidunt ligula eget bibendum. Aliquam erat volutpat. Suspendisse sed tortor
          malesuada, rutrum justo at, fermentum ex.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="flex p-16 bg-gray-100" id="services">
      <div class="container mx-auto px-4 sm:px-32">
        <h2 class="text-4xl font-bold text-secondary mb-8">Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold mb-4">Service 1</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla sed mauris maximus hendrerit.
              Vestibulum ac felis metus.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold mb-4">Service 2</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla sed mauris maximus hendrerit.
              Vestibulum ac felis metus.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold mb-4">Service 3</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla sed mauris maximus hendrerit.
              Vestibulum ac felis metus.
            </p>
          </div>
        </div>
      </div>
      <img src="../../public/img/undraw_job_offers_re_634p.svg" alt="about" class="mt-12 object-cover h-60">
    </section>

   

    <!-- Contact Us Section -->
    <section class="py-16 bg-white" id="contact-us">
      <div class="container mx-auto px-4 sm:px-32">
        <h2 class="text-4xl font-bold text-secondary mb-8 text-center">Contact Us</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul class="mt-4">
              <li class="flex items-center space-x-4">
                <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M22 9l-9-4-9 4-4 9 4 9 9 4 9-4 4-9-4-9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.5 6.5L18.5 5.5" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18.5 18.5L19.5 17.5" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.5 18.5L4.5 17.5" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6.5 6.5L5.5 5.5" />
                </svg>
                <span>123 Main Street, City</span>
              </li>
              <li class="flex items-center space-x-4 mt-2">
                <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 22s8-4 8-10V6c0-6-8-2-8-2s-8-4-8 2v6c0 6 8 10 8 10z" />
                </svg>
                <span>contact@example.com</span>
              </li>
              <li class="flex items-center space-x-4 mt-2">
                <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 2C6.48 2 2 6.48 2 12c0 3.85 2.35 7.17 5.75 8.6.26.1.54.15.82.15.29 0 .58-.05.84-.15C19.65 19.17 22 15.85 22 12c0-5.52-4.48-10-10-10zm0 18c-3.22 0-6.02-1.77-7.54-4.4-.23-.47-.36-.99-.36-1.6 0-1.54.7-2.91 1.79-3.85L11 7.21c.3-.19.7-.19 1 0l4.11 2.54C18.3 8.49 19 9.86 19 11.4c0 .61-.13 1.13-.36 1.6C18.02 18.23 15.22 20 12 20zm0-16c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 7c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
                </svg>
                <span>+1234567890</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-100 p-8 rounded-md">
            <h3 class="text-xl font-semibold mb-4 ">Send us a Message</h3>
            <form @submit.prevent="submitMessage" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="name" class="text-sm font-bold">Name</label><br>
                  <input type="text" id="name" class="border border-gray-300 px-2 py-1 rounded-md" />
                </div>
                <div>
                  <label for="email" class="text-sm font-bold">Email</label><br>
                  <input type="email" id="email" class="border border-gray-300 px-2 py-1 rounded-md" />
                </div>
                <div class="col-span-2">
                  <label for="message" class="text-sm font-bold">Message</label><br>
                  <textarea id="message" rows="4" class="border border-gray-300 px-2 py-1 rounded-md w-full"></textarea>
                </div>
              </div>
              <button type="submit"
                class="bg-cyan-700 text-white px-4 py-2 rounded-md mt-4">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  
</div>
</template>

<script>
import axios from 'axios';
import router from '../router/index';
//vuevalidate
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
  numeric,
  minValue,
  maxValue,
  between,
  alpha,
  alphaNum,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

//custom validation for email so that only emails with the domain @univ-constantine2.dz can login
const emailCustom = helpers.regex("email", /^[\w-\.]+@univ-constantine2\.dz$/);



export default {
  name: "LandingPage",
  data() {
    return {
      v$: useVuelidate(), 
      showModal: false,
      email: "",
      password: "",
      triggerError: false,
      passwordVisible: false,
    };
  },
  validations: {
    email: { required, email,emailCustom },
    password: { required },
  },
  
  methods: {

    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

    openLoginForm() {
      this.showModal = true;
    },
    closeLoginForm() {
      this.showModal = false;
    },

    validateForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.submitForm();
      }
    },

    async submitForm() {
      // Perform login action here using the email and password values
   console.log(this.email, this.password);
      await axios
        .post("http://localhost:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "Authentication failed for all user types") {
            this.triggerError = true;
            return;
              } else {
                // Do something with the response
                //save data in local storage
              
                localStorage.setItem("token", response.data.authorisation.token);
                //push to the dashboard
                if (response.data.user_type === "admin") {
                  localStorage.setItem("id", response.data.user.id_chef);
                  localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                      );
                      localStorage.setItem("email", response.data.user.email);
                      localStorage.setItem(
                        "lastName",
                        response.data.user.nom_chef
                      );
                      localStorage.setItem(
                        "firstName",
                        response.data.user.prenom_chef
                      );
                  router.push(`/admin-notifications`);
                } else if (response.data.user_type === "supervisor") {
                  localStorage.setItem("id", response.data.user.id_responsable);
                  localStorage.setItem("email", response.data.user.email);
                      //store user object as string
                      localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                      );
                      localStorage.setItem(
                        "lastName",
                        response.data.user.nom_responsable
                      );
                      localStorage.setItem(
                        "firstName",
                        response.data.user.prenom_responsable
                      );
                      router.push(`/supervisor-notifications`);
                }
                else if (response.data.user_type === "student") {
                  localStorage.setItem("id", response.data.user.id_etudiant);
                localStorage.setItem("email", response.data.user.email);
                localStorage.setItem("lastName", response.data.user.nom_etudiant);
                localStorage.setItem(
                  "firstName",
                  response.data.user.prenom_etudiant
                );
                  router.push(`/notifications`);
                }
                
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* Primary color */
.primary {
  color: #3a96b4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}


input{
  /*no border */
  border: none;
  border-bottom: 1px solid #3a96b4;
  outline: none;
  transition: all 0.2s ease-in-out;
  
}
</style>
