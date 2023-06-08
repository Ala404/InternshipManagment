<template>
  <div >

    <!--display you have been accepted in an internship aleady msg -->

    <div class="mx-auto py-4 font-sans text-center" v-if="accepted">
        <h1 class="text-2xl font-bold mb-16 text-primary my-auto ">
            You are enroled in an internship already !
        </h1>
        <!-- back button -->
        <router-link to="/internships" class="flex justify-center">
            <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
               <i class="fas fa-arrow-left"></i> Back
            </button>
        </router-link>
    </div>


      <div class="mx-auto py-4 font-sans text-center" v-if="!accepted">
        <h1 class="text-5xl font-bold mb-16 text-primary">
          New Internship Application
        </h1>

        <form class="w-full px-40 max-sm:p-0" @submit.prevent="">
          <!--      -->

          <!--       -->
          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="intern-title"
              >
                Internship Title
              </label>
              <!--input field with bg-white and border-gray-200 text-gray-300-->
              <input
                v-model.trim="internshipTitle"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="intern-title"
                type="text"
                placeholder="Enter internship title/subject"
              />
              <!--error message using vuelidate error message-->
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.internshipTitle.$error"
                >{{ v$.internshipTitle.$errors[0].$message }}
              </span>
            </div>

            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="duration"
              >
                Duration
              </label>
              <input
                v-model="duration"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="duration"
                type="text"
                placeholder="Enter internship duration"
              />
              <span class="text-red-500 text-xs italic" v-if="v$.endDate.$error"
                >{{ v$.endDate.$errors[0].$message }}
              </span>
            </div>
          </div>

          <!--       -->
          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="superv-email"
              >
                Supervisor Email
              </label>
              <input
                v-model="supervisorEmail"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="superv-email"
                type="email"
                placeholder="Enter supervisor email"
              />
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.supervisorEmail.$error"
                >{{ v$.supervisorEmail.$errors[0].$message }}
              </span>
            </div>

            <!--supervisor first name -->

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="first-name"
              >
              Supervisor First Name
              </label>
              <input
                v-model="supervisorFName"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="first-name"
                type="text"
                placeholder="Enter Supervisor First Name"
              />
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.supervisorFName.$error"
                >{{ v$.supervisorFName.$errors[0].$message }}
              </span>
            </div>
          </div>
          <!--       -->

          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
              for="last-name"
            >
            Supervisor Last Name
            </label>
            <input
              v-model="supervisorLName"
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
              id="last-name"
              type="text"
              placeholder="Enter Supervisor Last Name"
            />
            <span
              class="text-red-500 text-xs italic mx-auto"
              v-if="v$.supervisorLName.$error"
              >{{ v$.supervisorLName.$errors[0].$message }}
            </span>
          </div>

          <!--company info -->
          <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
                for="company-name"
              >
                Company Name
              </label>
              <input
                v-model="companyName"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="company-name"
                type="text"
                placeholder="Enter Company Name"
              />
              <span class="text-red-500 text-xs italic" v-if="v$.companyName.$error"
                >{{ v$.companyName.$errors[0].$message }}
              </span>
            </div>
            </div>
            <!--       -->

            <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
                for="company-address"
              >
                Company Address
              </label>
              <input
                v-model="companyAddress"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="company-address"
                type="text"
                placeholder="Enter Company Address"
              />
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.companyAddress.$error"
                >{{ v$.companyAddress.$errors[0].$message }}
              </span>
            </div>

          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
              for="company-phone"
            >
              Company Phone
            </label>
            <input
              v-model="companyPhone"
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
              id="company-phone"
              type="text"
              placeholder="Enter Company Phone Number"
            />
            <span class="text-red-500 text-xs italic" v-if="v$.companyPhone.$error"
              >{{ v$.companyPhone.$errors[0].$message }}
            </span>
          </div>
        </div>

          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="start-date"
              >
                Start Date
              </label>
              <input
                v-model="startDate"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="start-date"
                type="date"
                placeholder="Enter internship start date"
              />
              <span class="text-red-500 text-xs italic" v-if="v$.startDate.$error"
                >{{ v$.startDate.$errors[0].$message }}
              </span>
              <span class="text-red-500 text-xs italic" v-if="dateDbFError"
                >{{ dateDbFError }} </span>

            </div>

            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="end-date"
              >
                End Date
              </label>
              <input
                v-model="endDate"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="end-date"
                type="date"
                placeholder="Enter internship end date"
              />
              <span class="text-red-500 text-xs italic" v-if="v$.endDate.$error"
                >{{ v$.endDate.$errors[0].$message }}
              </span>
            </div>
          </div>
          <!--       -->
          <!--submit button and cancel button-->

          <div class="flex flex-wrap mb-6 ">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto ">
            <button
              class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-md mr-32"
              type="submit"
              @click="showConfirmationDialogFunc"
            >
              Submit
            </button>

            <router-link to="/internships">
              <button
                class="bg-white border-2 hover:border-primary text-black font-bold py-2 px-4 focus:outline-none focus:shadow-slate-500 rounded-md"
                type="button"
              >
                Cancel
              </button>
            </router-link>
          </div>
            </div>
        </form>
        <transition name="scale-up">
      <div v-if="showConfirmationDialog" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="confirmation-popup bg-white w-1/3 p-4 rounded shadow">
          <h2 class="text-lg font-medium mb-4">Confirmation</h2>
          <p class="mb-4">Are you sure you want to proceed?</p>
          <div class="flex justify-end">
            <button class="bg-red-500 text-white px-4 py-2 rounded font-medium mr-2" @click="showConfirmationDialog = false">Cancel</button>
            <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="validateForm">Confirm</button>
          </div>
        </div>
      </div>
    </transition>

    <!-- success dialog -->
    <transition name="scale-up">
      <div v-if="showSuccessDialog" class="success-popup fixed inset-0 flex items-center text-center justify-center z-50 bg-black bg-opacity-50">
            <div class="bg-white w-1/3 p-4 rounded shadow">

                <div>
                  <i class="fa-solid fa-check text-green-500 text-6xl fa-bounce rounded-full border-2 border-green-500"></i>
                </div>

              <h2 class="text-lg font-medium mb-4">Success</h2>
              <p class="mb-4">Your request sent successfully</p>

              <div class="flex justify-end">
                <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="showSuccessDialog = false">OK</button>
              </div>
            </div>
          </div>
    </transition>
      </div>
  </div>
</template>

<script>
//using PrimwVue
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
// import router from '../../../router';

//using vuelidate for form validation
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  helpers,
  numeric,
  email,
  minValue,
  maxValue,
} from "@vuelidate/validators";
import axios from "axios";
import router from '../../../router';

//custom validation
const alphaNumWithSpace = helpers.regex("alphaNumWithSpace", /^[a-zA-Z0-9 ]+$/);
const alphaWithSpace = helpers.regex("alphaWithSpace", /^[a-z0-9_ ]*$/i);

export default {
  name: "OfferForm",
  components: {
    Dropdown,
    Button,
  },
  data() {
    return {
      showConfirmationDialog: false,
      showSuccessDialog: false,
        accepted: false,
      v$: useVuelidate(),
      internshipTitle: "",
      duration: "",
      supervisorEmail: "",
      supervisorFName: "",
      supervisorLName: "",
      companyName: "",
      companyAddress: "",
      companyPhone: "",
      startDate: "",
      endDate: "",
      dateDbFError: '',
    };
  },

  validations() {
    return {
      internshipTitle: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
        // alphaNumWithSpace
      },
      duration: {
        required,
        // minValue: minValue(1),
        // maxValue: maxValue(12)
      },
      supervisorEmail: {
        required,
        email,
      },
      supervisorFName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
        // alphaWithSpace
      },
      supervisorLName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
        // alphaWithSpace
      },
      companyName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
        // alphaWithSpace
      },
      companyAddress: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
        // alphaWithSpace
      },
      companyPhone: {
        required,
        // minLength: minLength(9),
        // maxLength: maxLength(9),
        numeric,
      },
      startDate: {
        required,
      },
      endDate: {
        required,
      },
    };
  },
  methods: {
    showConfirmationDialogFunc() {
      this.showConfirmationDialog = true;
    },
    validateForm() {
      let cd = new Date().setHours(0, 0, 0, 0);
      const dateDebut = new Date(this.startDate).setHours(0, 0, 0, 0);
      const dateFin = new Date(this.endDate).setHours(0, 0, 0, 0);
      console.log(dateDebut);
      console.log(dateFin);
      if(dateDebut < cd || dateFin < cd){
        this.dateDbFError = 'date must be current or future date'
        console.log(this.dateDbFError)
      }else if (dateDebut > dateFin || dateDebut == dateFin) {
        this.dateDbFError = 'start date must be before end date'
        console.log(this.dateDbFError)
      }
      else{
        this.dateDbFError = ''
        console.log(this.dateDbFError);

      }
      this.v$.$validate();
      if (!this.v$.$error && this.dateDbFError == '') {
        console.log("form is valid");
        this.submitForm();
      } else {
        console.log("form is not valid");
      }
    },

    submitForm() {
      axios
        .post("http://localhost:8000/api/createApplication", {
          idStudent: localStorage.getItem("id"),
          entrName: this.companyName,
          adrs: this.companyAddress,
          tel: this.companyPhone,
          resFirstName: this.supervisorFName,
          resLastName: this.supervisorLName,
          resEmail: this.supervisorEmail,
          theme: this.internshipTitle,
          duree: this.duration,
          dateD: this.startDate,
          dateF: this.endDate,
        })
        .then((response)=> {
          console.log(response);
          this.showConfirmationDialog = false;
          this.showSuccessDialog = true;
          setTimeout(() => {
            this.showSuccessDialog = false;
            router.push('/internships');
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

    async created() {
        await axios
        .post("http://localhost:8000/api/getAcceptedApplications", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
            console.log(response);
            if(response.data.length > 0){
                this.accepted = true;
            }
        })
        .catch((error) => {
          console.log(error);
        });
 },
};
</script>

