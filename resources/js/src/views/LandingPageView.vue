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
      <transition name="scale-up">
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
               
                class="eye-drop"
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
      </transition>

    <!-- About Us Section -->
    <section class=" flex p-16 bg-white" id="about">
      <img src="../../public/img/undraw_team_spirit_re_yl1v.svg" alt="about" class="  object-cover h-60">
      <div class=" container mx-auto px-4 sm:px-32">
        <h2 class="text-4xl font-bold text-secondary mb-8">About Us</h2>
        <p class="text-lg text-gray-700">
            My "Internify" website is a platform that aims to simplify student applications to different internships offered by various organizations,
            including universities and internship supervisors. It provides a seamless and efficient application process, allowing students to create and apply directly to existing internships. Furthermore,
            students can track their attendance and final marks in the skill matrix, enabling them to monitor their progress. Upon completing their internship,
            students receive a certificate recognizing their accomplishments and the skills they have acquired.

        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="flex p-16 bg-gray-100" id="services">
      <div class="container mx-auto px-4 sm:px-32">
        <h2 class="text-4xl font-bold text-secondary mb-8">Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="rounded-lg p-6 shadow-md bg-gradient-to-r from-primary from-50% via-white via-100% text-white hover:text-secondary hover:bg-white cursor-pointer transition-all">
    <h3 class="text-xl font-semibold mb-4 text-center">Streamlined Internship Applications</h3>
  </div>
  <div class="rounded-lg p-6 shadow-md bg-gradient-to-r from-primary from-50% via-white via-100% text-white hover:text-secondary hover:bg-white cursor-pointer transition-all">
    <h3 class="text-xl font-semibold mb-4 text-center">Attendance and Performance Tracking</h3>
  </div>
  <div class="rounded-lg p-4 pt-10 shadow-md bg-gradient-to-r from-primary from-50% via-white via-100% text-white hover:text-secondary hover:bg-white cursor-pointer transition-all">
    <h3 class="text-xl font-semibold mb-4 text-center">Certification of Completion</h3>
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
            <p class="text-gray-700"> If you have any questions or concerns, please do not hesitate to contact us. We will get back to you as soon as possible.</p>
            <ul class="mt-4">
              <li class="flex items-center space-x-4">
              <i class="fas fa-map-marker-alt text-primary"></i>
                <span>Nouvelle ville Ali Mendjeli BP : 67A, Constantine</span>
              </li>
              <li class="flex items-center space-x-4 mt-2">
                <i class="fas fa-phone-alt text-primary"></i>
                <span>departement.ifa@univ-constantine2.dz</span>
              </li>
              <li class="flex items-center space-x-4 mt-2">
                <i class="fas fa-envelope text-primary"></i>
                <span> +213 (0) 31-78-31-65</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-100 p-8 rounded-md">
            <h3 class="text-xl font-semibold mb-4 ">Send us a Message</h3>
            <form @submit.prevent="openEmailClient" class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="name" class="text-sm font-bold">Name</label><br>
        <input type="text" id="name" v-model="EName" class="border border-gray-300 px-2 py-1 rounded-md" required />
      </div>
      <div>
        <label for="email" class="text-sm font-bold">Email</label><br>
        <input type="email" id="email" v-model="uniEmail" class="border border-gray-300 px-2 py-1 rounded-md" required />
      </div>
      <div class="col-span-2">
        <label for="message" class="text-sm font-bold">Message</label><br>
        <textarea id="message" rows="4" v-model="EMessage" class="border border-gray-300 px-2 py-1 rounded-md w-full" required></textarea>
      </div>
    </div>
    <button type="submit" class="bg-secondary text-white px-4 py-2 rounded-md mt-4 hover:bg-white hover:text-secondary hover:border-secondary hover:border">
      Send
    </button>
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
        EName: "",
        uniEmail: "",
        EMessage: "",
    };
  },
  validations: {
    email: { required, email,emailCustom },
    password: { required },
  },

    methods: {

        openEmailClient() {
            const recipientEmail = 'alaeddine.kezzouz@univ-constantine2.dz';
            const subject = 'Contact Form Submission';
            const body = `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`;

            const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        },

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
                  router.push(`/admin-internships`);
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
                      router.push(`/supervisor-internships`);
                }
                else if (response.data.user_type === "student") {
                  localStorage.setItem("id", response.data.user.id_etudiant);
                localStorage.setItem("email", response.data.user.email);
                localStorage.setItem("lastName", response.data.user.nom_etudiant);
                localStorage.setItem(
                  "firstName",
                  response.data.user.prenom_etudiant
                );
                  router.push(`/internships`);
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

.eye-drop {
    position: absolute;
    top: 54.8%;
    right: 500px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
</style>
