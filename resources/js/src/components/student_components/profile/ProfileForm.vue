<template>
  <div>
    <!-- creating a form to update the profile -->
    <form
      class="flex flex-col w-full mx-auto px-20 max-md:text-center"
      @submit.prevent=""
    >


      <div class="flex flex-wrap mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="first-name">            <i class="fas fa-user"></i> First Name</label>
          <input
            type="text"
            id="first"
            placeholder="First Name"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].prenom_etudiant"
          />
          <!--error msg for prenom using vuevalidator v$.error and v$.errors -->
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].prenom_etudiant.$error"
            >{{ v$.profileData[0].prenom_etudiant.$errors[0].$message }}
          </span>
        </div>

        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="last-name">            <i class="fas fa-user"></i> Last Name</label>
          <input
            type="text"
            id="last"
            placeholder="Last Name"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].nom_etudiant"
          />
          <!--error msg -->
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].nom_etudiant.$error"
            >{{ v$.profileData[0].nom_etudiant.$errors[0].$message }}
          </span>
        </div>
      </div>
      <div class="flex flex-wrap mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="email">            <i class="fas fa-envelope"></i> Email</label>
          <input
          disabled
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

        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="phone">            <i class="fas fa-phone"></i> Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].tel_etudiant"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].tel_etudiant.$error"
            >{{ v$.profileData[0].tel_etudiant.$errors[0].$message }}
          </span>
        </div>
      </div>

      <!--university and faculty-->
      <!-- <div class="flex flex-wrap mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="university">University</label>
          <input
            type="text"
            id="university"
            placeholder="University"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].nom_universite"
          />
        </div>
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="faculty">Faculty</label>
          <select
            v-model="this.profileData[0].selectedFaculty"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
          >
            <option
              v-for="faculty in faculties"
              :key="faculty.name"
              :value="faculty.name"
            >
              {{ faculty.name }}
            </option>
          </select>
        </div>
      </div> -->
      <!--department and speciality-->
      <div class="flex flex-wrap mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="department">           <i class="fas fa-building"></i> Department</label>
          <select
            v-model="this.profileData[0].nom_departement"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
          >
            <option
              v-for="department in departments"
              :key="department.name"
              :value="department.name"
            >
              {{ department.name.toLocaleUpperCase() }}
            </option>
          </select>
        </div>
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="speciality">          <i class="fas fa-user-graduate"></i> Speciality</label>
          <input
            type="text"
            id="speciality"
            placeholder="Speciality"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].specialite"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].specialite.$error"
            >{{ v$.profileData[0].specialite.$errors[0].$message }}
          </span>
        </div>
      </div>
      <!--birthday and birth address-->
      <div class="flex flex-wrap mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="birth">           <i class="fas fa-birthday-cake"></i> Birth Date</label>
          <input
            type="date"
            id="birth"
            placeholder="Birth Date"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].date_naissance"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].date_naissance.$error"
            >{{ v$.profileData[0].date_naissance.$errors[0].$message }}
          </span>
        </div>

        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="address">         <i class="fas fa-map-marker-alt"></i> Birth Address</label>
          <input
            type="address"
            id="address"
            placeholder="Birth Address"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].lieu_naissance"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].lieu_naissance.$error"
            >{{ v$.profileData[0].lieu_naissance.$errors[0].$message }}
          </span>
        </div>
      </div>
      <!-- registration number and birthdate -->
      <div class="flex flex-wrap mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="diploma">         <i class="fas fa-graduation-cap"></i> Diploma</label>
          <input
            type="text"
            id="diploma"
            placeholder="Diploma"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].diplome"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].diplome.$error"
            >{{ v$.profileData[0].diplome.$errors[0].$message }}
          </span>
        </div>

        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="reg">       <i class="fas fa-id-card"></i> Registration Number</label>
          <input
            type="text"
            id="reg"
            placeholder="Registration Number"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-model="this.profileData[0].num_carte"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.profileData[0].num_carte.$error"
            >{{ v$.profileData[0].num_carte.$errors[0].$message }}
          </span>
        </div>
      </div>
      <!--deploma -->
      <div class="flex flex-wrap mb-6">
        <!--profile picture-->
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="profile-picture">       <i class="fas fa-image"></i> Profile Picture</label>
          <input
            type="file"
            id="profile-picture"
            placeholder="Profile Picture"
            class="border-2 border-gray-300 p-2 rounded-lg block w-full"
            v-on:change="onFileChange"
          />
        </div>
      </div>



      <!--update and cancel-->
      <div class="flex flex-wrap mb-6">
        <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <button
            type="submit"
            class="bg-primary text-white px-4 py-2 rounded font-medium w-full"
            label="Success" severity="success" @click="this.showPasswordDialogFunc"
          >
            <i class="fas fa-check"></i> Update
          </button>
        </div>

        <router-link
          to="/notifications"
          class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0"
        >
          <button
            type="button"
            class="bg-red-500 text-white px-4 py-2 rounded font-medium w-full"

          >
            <i class="fas fa-times"></i> Cancel
          </button>
        </router-link>
      </div>
    </form>
    <transition name="scale-up">
      <div v-if="showPasswordDialog" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="pass-popup bg-white w-1/3 p-4 rounded shadow">
          <h2 class="text-lg font-medium mb-4"> <i class="fas fa-lock"></i>Confirm Password</h2>
          <label for="password">          Password</label>
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
      v$: useVuelidate(),
      departments: [{ name: "ifa" }, { name: "tlsi" }],
      profileData: [
        {
          id_etudiant: "",
          nom_etudiant: "",
          prenom_etudiant: "",
          date_naissance: "",
          lieu_naissance: "",
          email: "",
          password: "",
          tel_etudiant: "",
          num_carte: "",
          diplome: "",
          specialite: "",
          photo_etudiant: "",
          nom_departement: "",
          // id_departement: "",
        },
      ],

      showSuccessDialog: false,
      newPassword: "",
      confirmPassword: "",
      newPasswordError: "",
      passwordVisible: false,
      submited : false,
    };
  },
  validations() {
    return {
      profileData: [
        {
          nom_etudiant: { required },
          prenom_etudiant: { required },
          date_naissance: { required },
          lieu_naissance: { required },
          email: { required, email },
          tel_etudiant: {
            required,
            numeric,
            // minLength: minLength(10),
            // maxLength: maxLength(10),
          },
          num_carte: { required, numeric },
          diplome: { required },
          specialite: { required },
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
        // this.profileData[0].password = this.newPassword;
      }
    },
    submitProfileData() {
      // console.log('submitting form')
      this.v$.$validate();
      console.log(this.v$.$errors );
      if (!this.v$.$error && this.newPasswordError === "" && this.passWrong === false) {
        console.log("form is valid");

        // console.log(this.newPassword);

        this.submitForm();
        this.submited = true;
      }
    },
    async submitForm() {
      console.log(this.profileData);


      await axios
        .post(
          "http://localhost:8000/api/modifyStudentAccount",


          {
            id: localStorage.getItem("id"),
            firstName: this.profileData[0].prenom_etudiant,
            lastName: this.profileData[0].nom_etudiant,
            currentPassword: this.profileData[0].password,
            email: this.profileData[0].email,
            birthDate: this.profileData[0].date_naissance,
            birthPlace: this.profileData[0].date_naissance,
            tel: this.profileData[0].tel_etudiant,
            cardNumber: this.profileData[0].num_carte,
            diplome: this.profileData[0].diplome,
            specialite: this.profileData[0].specialite,
            depName: this.profileData[0].nom_departement,
            newPassword: this.newPassword,

          }

        )
        .then((response) => {
          console.log("wrong pass", this.passWrong);
          console.log("before");
          console.log(response.data.msg);
          if (response.data.msg === "wrong password") {
            this.passWrong = true;

          } else  {
            console.log("success");
            this.passWrong = false;
            this.showPasswordDialog = false;
         setTimeout(() => {
              window.location.reload();
            }, 1000);   this.showSuccessDialog = true;

          }
          console.log("after");
        })

        .catch(function (error) {
          console.log(error);

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

  showSuccess() {
    if (this.submited)
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 1000 });
      },

  created() {
    //send data to the server using axios
    console.log(localStorage.getItem("id"));
    axios
      .post("http://localhost:8000/api/consultStudentAccount", {
        id: localStorage.getItem("id"),
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


/* Form styles */
.form-field {
  margin-bottom: 20px;
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


