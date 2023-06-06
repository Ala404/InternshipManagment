<template>
  <div>
    <!-- creating a form to update the profile -->
    <form
      class="flex flex-col w-full mx-auto px-20 max-md:text-center"
      @submit.prevent=""
    >
      <div class="flex flex-wrap justify-center mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="first-name">First Name</label>
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
            >{{ v$.profileData[0].prenom_responsable.$errors[0].$message }}
          </span>
        </div>

      </div>
      
      <div class="flex flex-wrap justify-center mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="last-name">Last Name</label>
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
            >{{ v$.profileData[0].nom_responsable.$errors[0].$message }}
          </span>
        </div>
      </div>
      <div class="flex flex-wrap justify-center mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="email">Email</label>
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
            >{{ v$.profileData[0].email.$errors[0].$message }}
          </span>
        </div>
        </div>

        <!--company info-->
     <div class="flex flex-wrap justify-center mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="university">Company Name</label>
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
            >{{ v$.profileData[0].nom_entreprise.$errors[0].$message }}
          </span>
        </div>
        
     </div>
     <div class="flex flex-wrap justify-center mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="phone">Company Phone</label>
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
            >{{ v$.profileData[0].tel_entreprise.$errors[0].$message }}
          </span>
        </div>
      </div>

    
      <!--department and speciality-->
      <div class="flex flex-wrap justify-center mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 my-6 md:mb-0">
          <label for="address">Company Address</label>
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
            >{{ v$.profileData[0].addresse_entreprise.$errors[0].$message }}
          </span>
        </div>
       
      </div>
      <!--birthday and birth address-->
      
      <div class="flex flex-wrap justify-center mb-6">
        <!--profile picture-->
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="profile-picture">Profile Picture</label>
          <input
            type="file"
            id="profile-picture"
            placeholder="Profile Picture"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-on:change="onFileChange"
          />
        </div>
      </div>

      <!--password and confirm password-->


     
      <div class="flex flex-wrap justify-center mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="new-password">New Password</label>
          <input
          @mouseenter="checkNewPassword"
            v-model="this.newPassword"
            type="text"
            id="new-password"
            placeholder="New Password"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full justify-end"

          />
        </div>
      </div>
  

     


      <!--update and cancel-->
      <div class="flex flex-wrap w-1/2 mx-auto my-6 max-md:w-full">
        <div class="flex flex-col w-1/2  px-3 mb-6 max-md:mx-0 max-md:w-full">
          <button
            type="submit"
            class="bg-primary text-white px-4 py-2 rounded font-medium w-full"
           @click="this.showPasswordDialogFunc" 
          >
            Update
          </button>
        </div>

        <router-link
          to="/supervisor-notifications"
          class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0"
        >
          <button
            type="button"
            class="bg-red-500 text-white px-4 py-2 rounded font-medium w-full"
          >
            Cancel
          </button>
        </router-link>
      </div>
    </form>
    <transition name="scale-up">
      <div v-if="showPasswordDialog" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="pass-popup bg-white w-1/3 p-4 rounded shadow">
          <h2 class="text-lg font-medium mb-4">Confirm Password</h2>
          <label for="password">Password:</label>
          <div class="password-input">
            <input  :type="passwordVisible ? 'text' : 'password'" id="password" v-model="profileData[0].password" class="relative border border-gray-300 rounded mb-4 p-2 w-full">
            <span @click="togglePasswordVisibility"  class="password-toggle absolute -mx-8 mt-2 text-gray-500 cursor-pointer">
              <i v-if="passwordVisible" class="fas fa-eye-slash"></i>
              <i v-else class="fas fa-eye"></i>
            </span>
          </div>
          <span class="text-red-500 text-xs italic" v-if="passWrong">wrong password !</span>
          <!--pass error-->
      
          <div class="flex justify-end">
            <button class="bg-red-500 text-white px-4 py-2 rounded font-medium mr-2" @click="showPasswordDialog = false">Cancel</button>
            <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="submitProfileData">Confirm</button>
          </div>
        </div>
      </div>
    </transition>
  
<!-- success dialog -->
<transition class="scale-up">
  <div v-if="showSuccessDialog" class="success-popup fixed inset-0 flex items-center text-center justify-center z-50 bg-black bg-opacity-50">
        <div class="bg-white w-1/3 p-4 rounded shadow">
        
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
export default {
  name: "ProfileForm",
  data() {
    return {
      passWrong: false,
      showPasswordDialog: false,
      showSuccessDialog: false,
      v$: useVuelidate(),
      departments: [{ name: "ifa" }, { name: "tlsi" }],
      profileData: [
        {
          id_responsable: "",
          nom_responsable: "",
          prenom_responsable: "",
          email: "",
          nom_entreprise: "",
          addresse_entreprise: "",
          tel_entreprise: "",
          photo_responsable: "",
          nom_departement: "",
          // id_departement: "",
        },
      ],
      newPassword: "",
      confirmPassword: "",
      newPasswordError: "",
      passwordVisible: false,
    };
  },
  validations() {
    return {
      profileData: [
        {
          nom_responsable: { required },
          prenom_responsable: { required },
          email: { required, email },
          nom_entreprise: { required },
          addresse_entreprise: { required },
          tel_entreprise: { required, numeric },
          
          // password: { required },
        },
      ],
    };
  },

  methods: {


    showPasswordDialogFunc() {
    
    if (!this.v$.$error ) {
    this.showPasswordDialog = true;

    }

},

    checkNewPassword() {
      if (
        this.newPassword !== "" &&
        this.confirmPassword !== "" &&
        this.newPassword !== this.confirmPassword
      ) {
        this.newPasswordError = "Passwords do not match";
        console.log(this.newPasswordError);
      } else {
        this.newPasswordError = "";
        this.profileData[0].password = this.newPassword;
      }
    },
    submitProfileData() {
      // console.log('submitting form')
      this.v$.$validate();
      console.log(this.v$.$errors);
      if (!this.v$.$error && this.newPasswordError === "" && this.passWrong === false) {
        console.log("form is valid");
        console.log(this.profileData);
        console.log(this.newPassword);
        console.log(Array.isArray(this.profileData));
        this.submitForm();
      }
    },
    submitForm() {
      console.log(this.profileData);
        console.log(this.profileData[0].nom_responsable);
      axios
        .post(
          "http://localhost:8000/api/changeInfoResp",

          {
            id: localStorage.getItem("id"),
            firstName: this.profileData[0].prenom_responsable,
            lastName: this.profileData[0].nom_responsable,
            currentPassword: this.profileData[0].password,
            nameEntr: this.profileData[0].nom_entreprise,
            addresse: this.profileData[0].addresse_entreprise,
            tel : this.profileData[0].tel_entreprise,
            email: this.profileData[0].email,
            newPassword : this.newPassword,
            img: this.profileData[0].photo_responsable,
            
          }
          
        )
        .then((response) => {
          console.log("before");
          console.log(response.data.msg);
          if (response.data.msg === "wrong password") {
            this.passWrong = true;
            
          } else  {
            console.log("success");
            this.passWrong = false;
            this.showPasswordDialog = false;
            this.showSuccessDialog = true;
                setTimeout(() => {
                    this.showSuccessDialog = false;
              window.location.reload();
            }, 1000);
          }
          console.log("after");
        })
        .catch(function (error) {
          console.log(error);
          console.log(this.profileData);
        console.log(this.profileData[0].nom_responsable);
        });
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },

  onFileChange(e) {
    const file = e.target.files[0];
    this.$emit("file-changed", file);
  },

  created() {
    //send data to the server using axios

    axios
      .post("http://localhost:8000/api/InfoResp", {
        id: localStorage.getItem("id"),
      })
      .then((response) => {
        console.log(response);
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
  }
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
  
  
  