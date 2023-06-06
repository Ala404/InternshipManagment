<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold text-center mt-8">Sign Up Form</h1>

    <form class="max-w-sm mx-auto mt-8" @submit.prevent="submitForm">
      <div class="mb-4">
        <label
          for="firstName"
          class="block text-gray-700 text-sm font-bold mb-2"
          >First Name:</label
        >
        <input
          type="text"
          id="firstName"
          v-model.trim="firstName"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your first name"
        />
      </div>

      <div class="mb-4">
        <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2"
          >Last Name:</label
        >
        <input
          type="text"
          id="lastName"
          v-model.trim="lastName"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your last name"
        />
      </div>

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
          v-model.trim="pswd"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your password"
        />
      </div>

      <div class="mb-4">
        <label for="img" class="block text-gray-700 text-sm font-bold mb-2"
          >Image:</label
        >
        <input
          type="file"
          id="img"
          ref="img"
          accept="image/*"
          class="w-full px-3 py-2 border rounded"
        />
      </div>

      <div class="mb-4">
        <label
          for="birthDate"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Birth Date:</label
        >
        <input
          type="date"
          id="birthDate"
          v-model="birthDate"
          class="w-full px-3 py-2 border rounded"
        />
      </div>

      <div class="mb-4">
        <label
          for="birthPlace"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Birth Place:</label
        >
        <input
          type="text"
          id="birthPlace"
          v-model.trim="birthPlace"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your birth place"
        />
      </div>

      <div class="mb-4">
        <label for="tel" class="block text-gray-700 text-sm font-bold mb-2"
          >Phone Number:</label
        >
        <input
          type="text"
          id="tel"
          v-model.trim="tel"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your phone number"
        />
      </div>

      <!--department-->
      <select
        v-model="depName"
        class="w-full px-3 py-2 border rounded mb-4"
        >
        <option value="" disabled selected>Select your department</option>
        <option value="ifa">ifa</option>
      </select>

      <div class="mb-4">
        <label
          for="cardNumber"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Card Number:</label
        >
        <input
          type="text"
          id="cardNumber"
          v-model.trim="cardNumber"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your card number"
        />
      </div>

      <div class="mb-4">
        <label for="diploma" class="block text-gray-700 text-sm font-bold mb-2"
          >Diploma:</label
        >
        <input
          type="text"
          id="diploma"
          v-model.trim="diploma"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your diploma"
        />
      </div>

      <div class="mb-4">
        <label
          for="speciality"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Speciality:</label
        >
        <input
          type="text"
          id="speciality"
          v-model.trim="speciality"
          class="w-full px-3 py-2 border rounded"
          placeholder="Enter your speciality"
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
      firstName: "",
      lastName: "",
      email: "",
      passwordpswd: "",
      img: null,
      birthDate: "",
      birthPlace: "",
      tel: "",
      cardNumber: "",
      diploma: "",
        speciality: "",
        depName: "",
    };
  },
  methods: {
    submitForm() {
      // Create a new student account using the form data
    //   const formData = new FormData();
    //   formData.append("firstName", this.firstName);
    //   formData.append("lastName", this.lastName);
    //   formData.append("email", this.email);
    //   formData.append("password", this.password);
    //   formData.append("img", this.$refs.img.files[0]);
    //   formData.append("birthDate", this.birthDate);
    //   formData.append("birthPlace", this.birthPlace);
    //   formData.append("tel", this.tel);
    //   formData.append("cardNumber", this.cardNumber);
    //   formData.append("diploma", this.diploma);
    //   formData.append("speciality", this.speciality);

      // Perform API call or further processing with the form data
          axios
            .post("http://localhost:8000/api/createAccount", {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              pswd: this.password,
              img: this.$refs.img.files[0],
              birthDate: this.birthDate,
              birthPlace: this.birthPlace,
              tel: this.tel,
              cardNumber: this.cardNumber,
              diplome: this.diploma,
                specialite: this.speciality,
                depName: this.depName,
            })
            .then((response) => {
                console.log(response);
                router.push({ name: "Login" });
            })
            .catch((error) => {
              console.log(error);
            });
    
    },
  },
};
</script>

  