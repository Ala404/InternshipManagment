<template>
    <div>
      <!-- creating a form to update the profile -->
      <form class="flex flex-col w-full mx-auto px-20 max-md:text-center" @submit.prevent="">
        <div class="flex flex-wrap justify-center mb-6">
          <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="first-name">
              <i class="fas fa-user"></i> First Name
            </label>
            <input
              type="text"
              id="first"
              placeholder="First Name"
              class="border-2 border-gray-300 p-2 rounded-lg block w-full"
              v-model="this.profileData[0].prenom_responsable"
            />
            <!--error msg for prenom using vuevalidator v$.error and v$.errors -->
            <span
              class="text-red-500 text-xs italic"
              v-if="v$.profileData[0].prenom_responsable.$error"
              >{{ v$.profileData[0].prenom_responsable.$errors[0].$message }}</span>
          </div>
    </div>

    <div class="flex flex-wrap justify-center mb-6">
      <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="last-name">
          <i class="fas fa-user"></i> Last Name
        </label>
        <input
          type="text"
          id="last"
          placeholder="Last Name"
          class="border-2 border-gray-300 p-2 rounded-lg block w-full"
          v-model="this.profileData[0].nom_responsable"
        />
        <!--error msg -->
        <span
          class="text-red-500 text-xs italic"
          v-if="v$.profileData[0].nom_responsable.$error"
          >{{ v$.profileData[0].nom_responsable.$errors[0].$message }}</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center mb-6">
      <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="email">
          <i class="fas fa-envelope"></i> Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          class="border-2 border-gray-300 p-2 rounded-lg block w-full"
          v-model="this.profileData[0].email"
        />
        <span
          class="text-red-500 text-xs italic"
          v-if="v$.profileData[0].email.$error"
          >{{ v$.profileData[0].email.$errors[0].$message }}</span>
      </div>
      </div>

      <!--company info-->
   <div class="flex flex-wrap justify-center mb-6">
      <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="university">
          <i class="fas fa-building"></i> Company Name
        </label>
        <input
          type="text"
          id="university"
          placeholder="Company Name"
          class="border-2 border-gray-300 p-2 rounded-lg block w-full"
          v-model="this.profileData[0].nom_entreprise"
        />
        <span
          class="text-red-500 text-xs italic"
          v-if="v$.profileData[0].nom_entreprise.$error"
          >{{ v$.profileData[0].nom_entreprise.$errors[0].$message }}</span>
      </div>

   </div>
   <div class="flex flex-wrap justify-center mb-6">
      <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="phone">
          <i class="fas fa-phone"></i> Company Phone
        </label>
        <input
          type="text"
          id="phone"
          placeholder="Company Phone"
          class="border-2 border-gray-300 p-2 rounded-lg block w-full"
          v-model="this.profileData[0].tel_entreprise"
        />
        <span
          class="text-red-500 text-xs italic"
          v-if="v$.profileData[0].tel_entreprise.$error"
          >{{ v$.profileData[0].tel_entreprise.$errors[0].$message }}</span>
      </div>
    </div>


    <!--department and speciality-->
    <div class="flex flex-wrap justify-center mb-6">
      <div class="flex flex-col w-full md:w-1/2 px-3 my-6 md:mb-0">
        <label for="address">
          <i class="fas fa-address-card"></i> Company Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="Company Address"
          class="border-2 border-gray-300 p-2 rounded-lg block w-full"
          v-model="this.profileData[0].addresse_entreprise"
        />
        <span
          class="text-red-500 text-xs italic"
          v-if="v$.profileData[0].addresse_entreprise.$error"
          >{{ v$.profileData[0].addresse_entreprise.$errors[0].$message }}</span>
      </div>

    </div>



    <!--birthday and birth address-->



    <!--update and cancel-->
    <div class="flex flex-wrap justify-center  w-1/2 mb-6 mx-auto">
      <div class="flex flex-col w-1/2  max-md:w-full px-3 mb-6 md:mb-0">
        <button
          type="submit"
          class="bg-primary text-white px-4 py-2 rounded font-medium w-full"
          @click="this.showshowConfirmationDialogFunc"
        >
          Update
        </button>
      </div>

      <!--delete account-->
      <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <button
          type="button"
          class="bg-red-500 text-white px-4 py-2 rounded font-medium w-full"
          @click="this.showDeleteConfirmationDialogFunc"
        >
          Delete
        </button>
      </div>

      <router-link
        to="/admin-supervisor-profiles"
        class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0"
      >
        <button
          type="button"
          class="bg-orange-500 text-white px-4 py-2 rounded font-medium w-full my-2"
        >
          Cancel
        </button>
      </router-link>
    </div>

  </form>
  <transition name="scale-up">
    <div v-if="showConfirmationDialog" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="confirmation-popup bg-white w-1/3 p-4 rounded shadow">
        <h2 class="text-lg font-medium mb-4">Confirmation</h2>
        <p class="mb-4">Are you sure you want to proceed?</p>
        <div class="flex justify-end">
          <button class="bg-red-500 text-white px-4 py-2 rounded font-medium mr-2" @click="showConfirmationDialog = false">Cancel</button>
          <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="submitProfileData">Confirm</button>
        </div>
      </div>
    </div>
  </transition>
  <!-- success dialog -->
  <transition class="scale-up">
    <div v-if="showSuccessDialog" class="success-popup fixed inset-0 flex items-center text-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white w-1/3 p-4 rounded shadow">
  php
  Copy code
    <div>
      <i class="fa-solid fa-check text-green-500 text-6xl fa-bounce rounded-full border-2 border-green-500"></i>
    </div>

    <h2 class="text-lg font-medium mb-4">Success</h2>
    <p class="mb-4">Profile updated successfully</p>

    <div class="flex justify-end">
      <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="showSuccessDialog = false">OK</button>
    </div>
  </div>
    </div>
  </transition>
  <!-- delete confirmation dialog -->
  <transition name="scale-up">
    <div v-if="showDeleteConfirmationDialog" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="confirmation-popup bg-white w-1/3 p-4 rounded shadow">
        <h2 class="text-lg font-medium mb-4">Confirmation</h2>
        <p class="mb-4">Are you sure you want to delete this account?</p>
        <div class="flex justify-end">
          <button class="bg-red-500 text-white px-4 py-2 rounded font-medium mr-2" @click="showDeleteConfirmationDialog = false">Cancel</button>
          <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="deleteAccount">Confirm</button>
        </div>
      </div>
    </div>
  </transition>
    </div>
  </template>


    <script>
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

//custom validation
// const alphaNumWithSpace = helpers.regex("alphaNumWithSpace", /^[a-zA-Z0-9 ]+$/);
// const alphaWithSpace = helpers.regex("alphaWithSpace", /^[a-zA-Z ]+$/);

import axios from "axios";
import router from '../../../router';
export default {
  name: "ProfileForm",
  data() {
    return {
      showDeleteConfirmationDialog: false,
      showConfirmationDialog: false,
      showSuccessDialog: false,
      v$: useVuelidate(),
      departments: [{ name: "ifa" }, { name: "tlsi" }],
      profileData: [
        {
          id_responsable: "",
          nom_responsable: "",
          prenom_responsable: "",
          nom_entreprise: "",
          tel_entreprise: "",
          addresse_entreprise: "",
          email: "",

        },
      ],
      passwordVisible: false,
    };
  },
  validations() {
    return {

      profileData: [
        {
          nom_responsable: { required },
          prenom_responsable: { required },
          nom_entreprise: { required },
          addresse_entreprise: { required },
          tel_entreprise: { required, numeric },
          email: { required, email },


        },
      ],
    };
  },

  methods: {
    showDeleteConfirmationDialogFunc() {
      this.showDeleteConfirmationDialog = true;
    },
    showshowConfirmationDialogFunc() {

    if (!this.v$.$error ) {
    this.showConfirmationDialog = true;

    }
    },

    submitProfileData() {

      this.v$.$validate();
      console.log(this.v$.$errors);
      if (!this.v$.$error) {
        console.log("form is valid");
        console.log(Array.isArray(this.profileData));
        this.submitForm();
      }
    },
    submitForm() {

      axios
        .post(
          "http://localhost:8000/api/changeResInfo",

          {
            id: this.profileData[0].id_responsable,
            firstName: this.profileData[0].prenom_responsable,
            lastName: this.profileData[0].nom_responsable,
            adrs: this.profileData[0].addresse_entreprise,
            nom: this.profileData[0].nom_entreprise,
            tel: this.profileData[0].tel_entreprise,
            email: this.profileData[0].email,

          }
        )
        .then((response) => {

            console.log("success");
            this.showConfirmationDialog = false;
            this.showSuccessDialog = true;
            setTimeout(() => {
                this.showSuccessDialog = false;
              window.location.reload();
            }, 1000);

          console.log("after");
        })
        .catch(function (error) {
          console.log(error);

        });
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

   async deleteAccount() {
             await axios
                .delete("http://localhost:8000/api/deleteRes",
                  { params: { id: this.$route.params.id } }
                )
                .then((response) => {
                  console.log("deleted");
                  router.push('/admin-supervisor-profiles');
                })
                .catch((error) => {
                  console.log(error);
                });
    }
  },

  onFileChange(e) {
    const file = e.target.files[0];
    this.$emit("file-changed", file);
  },

  created() {
    //send data to the server using axios
    console.log(this.$route.params.id);
    axios
      .post("http://localhost:8000/api/resInfo", {
        id: this.$route.params.id,
      })
      .then((response) => {
        this.profileData = response.data;
        console.log("this is profile data");
        console.log(this.profileData);
      })
      .catch((error) => {
        console.log(error);
      });


  },
  computed() {
    checkNewPassword();
  },
};
</script>

    <style lang="scss" scoped>
label {
  color: #3a96b4;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2;
  margin-left: 0.5rem;
}

input {
  focus: {
    outline: none;
  }
  outline: none;
}

Dropdown {
  :focus {
    outline: none;
  }
  outline: none;
}
</style>


