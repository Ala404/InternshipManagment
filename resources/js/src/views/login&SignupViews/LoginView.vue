<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold text-center mt-8">Login Form</h1>

    <form class="max-w-sm mx-auto mt-8" @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
          >Email:</label
        >
        <input
          type="text"
          id="email"
          v-model.trim="email"
          class="w-full px-3 py-2 border rounded"
          :class="{ 'border-red-500': triggerError }"
          placeholder="Enter your email"
        /><span
        v-if="triggerError"
        class="text-red-500 text-xs italic mb-4"
        >Invalid email or password</span>
      </div>

      <div class="mb-4">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
          >Password:</label
        >
        <input
          type="password"
          id="password"
          v-model.trim="password"
          class="w-full px-3 py-2 border rounded"
          :class="{ 'border-red-500': triggerError }"
          placeholder="Enter your password"
        />
        <span
        v-if="triggerError"
        class="text-red-500 text-xs italic mb-4"
        >Invalid email or password</span>
      </div>
      
      <button
        type="submit"
        class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-full "
      >
        login
      </button>
    </form>
  </div>
</template>
    
    <script>
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      email: "",
      password: "",
      triggerError: false,
    };
  },
  methods: {
    async submitForm() {
      // Perform login action here using the email and password values
    //  router.push("/student");
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
                      localStorage.setItem("email", response.data.user.email);
             
                      localStorage.setItem('user', response.data.user);

                      localStorage.setItem(
                        "lastName",
                        response.data.user.nom_chef
                      );
                      console.log(response.data.user.nom_chef);
                      console.log(localStorage.getItem("lastName"));
                      localStorage.setItem(
                        "firstName",
                        response.data.user.prenom_chef
                      );
                  router.push(`/admin`);
                } else if (response.data.user_type === "supervisor") {
                  localStorage.setItem("id", response.data.user.id_responsable);
                      localStorage.setItem("email", response.data.user.email);
                      localStorage.setItem(
                        "lastName",
                        response.data.user.nom_responsable
                      );
                      localStorage.setItem(
                        "firstName",
                        response.data.user.prenom_responsable
                      );
                      router.push(`/supervisor`);
                }
                else if (response.data.user_type === "student") {
                  localStorage.setItem("id", response.data.user.id_etudiant);
                localStorage.setItem("email", response.data.user.email);
                localStorage.setItem("lastName", response.data.user.nom_etudiant);
                localStorage.setItem(
                  "firstName",
                  response.data.user.prenom_etudiant
                );
                  router.push(`/student`);
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
    