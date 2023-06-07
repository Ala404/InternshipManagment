<template>
    <div>
      <!-- creating a form to update the profile -->
      <form
        class="flex flex-col w-full mx-auto px-20 max-md:text-center"
        @submit.prevent=""
      >
        <div class="flex flex-wrap mb-6">
          <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="first-name">
              <i class="fas fa-user"></i> First Name
            </label>
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
            <label for="last-name">
              <i class="fas fa-user"></i> Last Name
            </label>
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
            <label for="email">
              <i class="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              class="border-2 border-gray-300 p-2 rounded-lg block w-full"
              v-model="this.profileData[0].email"
              disabled
            />
            <span
              class="text-red-500 text-xs italic"
              v-if="v$.profileData[0].email.$error"
              >{{ v$.profileData[0].email.$errors[0].$message }}
            </span>
          </div>

          <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="phone">
              <i class="fas fa-phone"></i> Phone
            </label>
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

        <div class="flex flex-wrap mb-6">
          <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="reg">
              <i class="fas fa-id-card"></i> Registration Number
            </label>
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

          <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="speciality">
              <i class="fas fa-graduation-cap"></i> Speciality
            </label>
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
            <label for="birth">
              <i class="fas fa-calendar-alt"></i> Birth Date
            </label>
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
            <label for="address">
              <i class="fas fa-map-marker-alt"></i> Birth Address
            </label>
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

        <!--update and cancel-->
        <div class="flex flex-wrap mb-6">
          <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <button
              type="submit"
              class="bg-primary text-white px-4 py-2 rounded font-medium w-full"
              @click="this.showConfirmationDialogFunc"
            >
              <i class="fas fa-save"></i> Update
            </button>
          </div>

          <!--delete -->
          <div class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <button
              type="button"
              class="bg-red-500 text-white px-4 py-2 rounded font-medium w-full"
              @click="this.showDeleteConfirmationDialogFunc"
            >
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </div>

          <router-link
            to="/admin-student-profiles"
            class="flex flex-col w-full md:w-1/2 px-3 mb-6 md:mb-0"
          >
            <button
              type="button"
              class="bg-orange-500 text-white px-4 py-2 rounded font-medium w-full my-2"
            >
              <i class="fas fa-times"></i> Cancel
            </button>
          </router-link>
        </div>
      </form>
      <transition name="scale-up">
        <div
          v-if="showConfirmationDialog"
          class="fixed inset-0 flex items-center justify-center z-50"
        >
          <div class="confirmation-popup bg-white w-1/3 p-4 rounded shadow">
            <h2 class="text-lg font-medium mb-4">Confirmation</h2>
            <p class="mb-4">Are you sure you want to proceed?</p>
            <div class="flex justify-end">
              <button
                class="bg-red-500 text-white px-4 py-2 rounded font-medium mr-2"
                @click="showConfirmationDialog = false"
              >
                Cancel
              </button>
              <button
                class="bg-primary text-white px-4 py-2 rounded font-medium"
                @click="submitProfileData"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- success dialog -->
      <transition name="scale-up">
        <div
          v-if="showSuccessDialog"
          class="success-popup fixed inset-0 flex items-center text-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div class="bg-white w-1/3 p-4 rounded shadow">
            <div>
              <i class="fas fa-check text-green-500 text-6xl fa-bounce rounded-full border-2 border-green-500"></i>
            </div>

            <h2 class="text-lg font-medium mb-4">Success</h2>
            <p class="mb-4">Profile updated successfully</p>

            <div class="flex justify-end">
              <button
                class="bg-primary text-white px-4 py-2 rounded font-medium"
                @click="showSuccessDialog = false"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- delete confirmation dialog -->
      <transition name="scale-up">
        <div
          v-if="showDeleteConfirmationDialog"
          class="fixed inset-0 flex items-center justify-center z-50"
        >
          <div class="confirmation-popup bg-white w-1/3 p-4 rounded shadow">
            <h2 class="text-lg font-medium mb-4">Confirmation</h2>
            <p class="mb-4">Are you sure you want to delete this profile?</p>
            <div class="flex justify-end">
              <button
                class="bg-red-500 text-white px-4 py-2 rounded font-medium mr-2"
                @click="showDeleteConfirmationDialog = false"
              >
                Cancel
              </button>
              <button
                class="bg-primary text-white px-4 py-2 rounded font-medium"
                @click="deleteProfile"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>

    <script>
    //import router
import router from "@/router/index.js";
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
      showDeleteConfirmationDialog: false,
      showConfirmationDialog: false,
      showSuccessDialog: false,
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
          // password: "",
          tel_etudiant: "",
          num_carte: "",
          // diplome: "",
          specialite: "",
          // photo_etudiant: "",
          nom_departement: "",
          // id_departement: "",
        },
      ],


      passwordVisible: false,
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
          diplome: { required },
          specialite: { required },
              tel_etudiant: { required, numeric },
              num_carte:{required, numeric}


        },
      ],
    };
  },

  methods: {
    showDeleteConfirmationDialogFunc() {
      this.showDeleteConfirmationDialog = true;
    },
    showConfirmationDialogFunc() {

    if (!this.v$.$error ) {
    this.showConfirmationDialog = true;

    }
    },

    submitProfileData() {

      this.v$.$validate();
      console.log(this.v$.$errors);
      if (!this.v$.$error) {
        console.log("form is valid");
        console.log(this.profileData);
        console.log(this.newPassword);
        console.log(Array.isArray(this.profileData));
        this.submitForm();
      }
    },
    submitForm() {

      axios
        .post(
          "http://localhost:8000/api/changeStudentInfo",

          {
            id: this.profileData[0].id_etudiant,
            newName: this.profileData[0].prenom_etudiant,
            newLastName: this.profileData[0].nom_etudiant,
            newEmail: this.profileData[0].email,
            newDate: this.profileData[0].date_naissance,
            newLieu: this.profileData[0].lieu_naissance,
            newSpecialite: this.profileData[0].specialite,
            newTel: this.profileData[0].tel_etudiant,
            newCartNum: this.profileData[0].num_carte
          }
        )
        .then((response) => {

            console.log("success");
            this.showPasswordDialog = false;
            this.showSuccessDialog = true;
            setTimeout(() => {
                this.showSuccessDialog = true;
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
    deleteProfile() {
      axios
        .delete("http://localhost:8000/api/deleteStudent",
          { params: { id: this.$route.params.id } }
        )
        .then((response) => {
          console.log("success");
          this.showDeleteConfirmationDialog = false;
          this.showSuccessDialog = true;
                setTimeout(() => {
                    this.showSuccessDialog = true;
            router.push('/admin-student-profiles');
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

  onFileChange(e) {
    const file = e.target.files[0];
    this.$emit("file-changed", file);
  },

  created() {
    //send data to the server using axios
    console.log(this.$route.params.id);
    axios
      .post("http://localhost:8000/api/getStudentInfo", {
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
      //delete
        axios
              .post("http://localhost:8000/api/deleteStudent", {

                id: this.$route.params.id,
              })
              .then((response) => {
                this.profileData = response.data;
                    setTimeout(() => {
                          window.location.reload();
                        }, 1000);
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


