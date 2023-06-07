<template>
  <div class="container mx-auto py-16 flex items-center justify-around ">

    <!--svg sign up-->
    <div class="w-1/2">
      <img src="../../../public/img/undraw_sign_up_n6im.svg" alt="sign up" class="w-full bg-gradient-to-r from-gray-300 from-20% via-primary via-60% to-white rounded-2xl"/>
    </div>

  <section>
        <h1 class="text-4xl font-bold text-center mt-8 text-primary  ">Registration Form</h1>
    
        <form class="max-w-sm mx-auto mt-8" @submit.prevent="validateForm">
  <div class="flex flex-wrap -mx-2">
    <div class="mb-4 w-full md:w-1/2 px-2">
      <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
      <input type="text" id="firstName" v-model.trim="firstName" class="w-full px-3 py-2 border rounded" placeholder="Enter your first name" />
      <span class="text-red-500 text-xs italic" v-if="v$.firstName.$error">{{ v$.firstName.$errors[0].$message }}</span>
    </div>

    <div class="mb-4 w-full md:w-1/2 px-2">
      <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
      <input type="text" id="lastName" v-model.trim="lastName" class="w-full px-3 py-2 border rounded" placeholder="Enter your last name" />
      <span class="text-red-500 text-xs italic" v-if="v$.lastName.$error">{{ v$.lastName.$errors[0].$message }}</span>
    </div>

    <div class="mb-4 w-full md:w-1/2 px-2">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input type="text" id="email" v-model.trim="email" class="w-full px-3 py-2 border rounded" placeholder="Enter your email" />
      <span class="text-red-500 text-xs italic" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
      <span class="text-red-500 text-xs italic" v-if="!v$.email.$error && !isProEmail">Please enter a professional email</span>
    </div>

    <div class="mb-4 w-full md:w-1/2 px-2">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
      <input type="password" id="password" v-model.trim="pswd" class="w-full px-3 py-2 border rounded" placeholder="Enter your password" />
      <span class="text-red-500 text-xs italic" v-if="v$.pswd.$error">{{ v$.pswd.$errors[0].$message }}</span>
    </div>
  
    <!-- 
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
          </div> -->
    
          <div class="mb-4 w-full md:w-1/2 px-2">
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
            <span
                class="text-red-500 text-xs italic"
                v-if="v$. birthDate.$error"
                >{{ v$. birthDate.$errors[0].$message }}
              </span>
          </div>
    
          <div class="mb-4 w-full md:w-1/2 px-2">
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
            <span
                class="text-red-500 text-xs italic"
                v-if="v$. birthPlace.$error"
                >{{ v$. birthPlace.$errors[0].$message }}
              </span>
          </div>
    
          <div class="mb-4 w-full md:w-1/2 px-2">
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
            <span
                class="text-red-500 text-xs italic"
                v-if="v$. tel.$error"
                >{{ v$. tel.$errors[0].$message }}
              </span>
          </div>
    
          <!--department-->
          <div class="mb-4 w-full md:w-1/2 px-2">
              <label
                for="depName"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Department:</label>
              <select v-model="depName" class="w-full px-3 py-2 border rounded mb-4" id="depName">
                <option value="" disabled selected>Select your department</option>
                <option value="ifa">ifa</option>
              </select>
              <span
                class="text-red-500 text-xs italic"
                v-if="v$. depName.$error"
                >{{ v$. depName.$errors[0].$message }}
              </span>
         </div>
    
         <div class="mb-4 w-full md:w-1/2 px-2">
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
            <span
                class="text-red-500 text-xs italic"
                v-if="v$. cardNumber.$error"
                >{{ v$. cardNumber.$errors[0].$message }}
              </span>
          </div>
    
          <div class="mb-4 w-full md:w-1/2 px-2">
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
            <span
                class="text-red-500 text-xs italic"
                v-if="v$. diploma.$error"
                >{{ v$. diploma.$errors[0].$message }}
              </span>
          </div>
    
          <div class="mb-4 w-full md:w-1/2 px-2">
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
            <span
                class="text-red-500 text-xs italic"
                v-if="v$. speciality.$error"
                >{{ v$. speciality.$errors[0].$message }}
              </span>
          </div>
          </div>
    
          <button
            type="submit"
            class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mr-4"
            @click='checkEmail'
          >
            Submit
          </button>
         <router-link to="/">
            <button
    
              class="bg-white hover:text-primary border-2 border-primary font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
         </router-link>
        </form>
        <!-- success dialog -->
    <transition name="scale-up">
      <div v-if="showSuccessDialog" class="success-popup fixed inset-0 flex items-center text-center justify-center z-50 bg-black bg-opacity-50">
            <div class="bg-white w-1/3 p-4 rounded shadow">
    
                <div>
                  <i class="fa-solid fa-check text-green-500 text-6xl fa-bounce rounded-full border-2 border-green-500"></i>
                </div>
    
              <h2 class="text-lg font-medium mb-4">Success</h2>
              <p class="mb-4">Account has been created successfully</p>
    
              <div class="flex justify-end">
                <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="showSuccessDialog = false">OK</button>
              </div>
            </div>
      
  
      </div>
</transition>
</section>
  </div>
</template>

  <script>
import axios from "axios";
import router from "@/router";
// use vuevalidate
import { useVuelidate } from "@vuelidate/core";
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
// adding spesific pattern for email which us '@univ-constantine2.dz'

export default {
  data() {
          return {
        v$: useVuelidate(),
      firstName: "",
      lastName: "",
      email: "",
      pswd: "",
      img: null,
      birthDate: "",
      birthPlace: "",
      tel: "",
      cardNumber: "",
      diploma: "",
      speciality: "",
                depName: "",
                showSuccessDialog: false,
                isProEmail: true,
    };
      },

      methods: {
           
          
          
                validateForm() {
                //if email has this patten in it '@univ-constantine2' then isProEmail = true

                if (this.email.includes("@univ-constantine2.dz")) {
                  this.isProEmail = true;
                } else {
                  this.isProEmail = false;
                }
                
                console.log('validating')
                this.v$.$validate();
                console.log(this.v$.$errors)
                if (!this.v$.$error  && this.isProEmail) {
                  this.submitForm();
                }
          },
        
    async submitForm() {

     await axios
        .post("http://localhost:8000/api/createAccount", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          pswd: this.pswd,
        //   img: this.$refs.img.files[0],
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
              this.showSuccessDialog = true;
            setTimeout(() => {
                this.showSuccessDialog = false;
                router.push({ name: "landing" });
            }, 1000);
            

        })
        .catch((error) => {
          console.log(error);
        });
    },
      },
        
      validations() {
    return {
      
      
          
          firstName: { required },
          lastName:{ required },
          birthDate: { required },
          birthPlace: { required },
          email: { required, email },
          tel: {
            required,
            numeric,
            minLength: minLength(10),
            maxLength: maxLength(10),
          },
          cardNumber: { required, numeric },
          diploma: { required },
          speciality: { required },
          pswd: { required },
            depName: { required },
    
     
    };
  },
};
</script>

<style scoped>
input{
  /*no border */
  border: none;
  border-bottom: 1px solid #3a96b4;
  outline: none;
  transition: all 0.2s ease-in-out;

}


.scale-up-enter-active {
  animation: scale-up-enter 0.3s ease-out;
}

.scale-up-leave-active {
  animation: scale-up-leave 0.3s ease-out;
}

@keyframes scale-up-enter {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scale-up-leave {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

</style>

