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
          placeholder="Enter your email"
        />
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
          placeholder="Enter your password"
        />
      </div>

  
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>

    </form>
  </div>
</template>
  
  <script>
import axios from 'axios';
import router from '@/router';
export default {
  data() {
    return {
      email: "",
      password: "",
      id:1
    };
  },
  methods: {
      submitForm() {
 
      // Perform login action here using the email and password values
      // router.push('/student');
            //  axios
            // .post("http://localhost:8000/api/login", {
            //   email: this.email,
            //   password: this.password,
            // }).then((response) => {
            //       console.log(response.data);
            //   // Do something with the response
           
            //     localStorage.setItem("token", response.data.token);
            //     //push to the dashboard
            //     router.push(`/supervisor/${response.data.id}`);
            // }).catch((error) => {
            //   console.log(error);
            // });
                

            
            
            
    },
  },
};
</script>
  