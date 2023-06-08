<template>
<div>
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
      Internship Application
    </h1>

    <form class="w-full px-40 max-sm:p-0" @submit.prevent="">
      <!--      -->
      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase text-gray-700 text-xs font-bold mb-2"
            for="first_name"
          >
            First Name
          </label>
          <!--input field with bg-white and border-gray-200 text-gray-300-->
          <input
            v-model="profileData[0].prenom_etudiant"
            disabled
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="first_name"
            type="text"
            placeholder="enter first name"
          />
          <!--error message using vuelidate error message-->
          <!-- <span class="text-red-500 text-xs italic" v-if="v$.prenom_etudiant.$error">{{ v$.prenom_etudiant.$errors[0].$message }} </span> -->
        </div>
        <!--error message-->

        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="last_name"
          >
            Last Name
          </label>
          <input
            v-model="profileData[0].nom_etudiant"
            disabled
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="last_name"
            type="text"
            placeholder="enter last name"
          />
          <!-- <span class="text-red-500 text-xs italic" v-if="v$.nom_etudiant.$error">{{ v$.nom_etudiant.$errors[0].$message }} </span> -->
        </div>
      </div>
      <!--      -->
      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            v-model="profileData[0].email"
            disabled
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="email"
            type="email"
            placeholder="enter ID Numbr"
          />
          <!-- <span class="text-red-500 text-xs italic" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }} </span> -->
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="phone-number"
          >
            Phone Number
          </label>
          <input
            v-model="profileData[0].tel_etudiant"
            disabled
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="phone-number"
            type="text"
            placeholder="enter phone number"
          />
          <!-- <span class="text-red-500 text-xs italic" v-if="v$.tel_etudiant.$error">{{ v$.tel_etudiant.$errors[0].$message }} </span> -->
        </div>
      </div>
      <!--       -->
      <div class="flex flex-wrap mb-6">
        <!-- <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="faculty">
              Faculty
            </label>
            <select v-model="profileData[0].faculty" class="block appearance-none w-full bg-white border border-gray-200 text-gray-700
             py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
              id="faculty" aria-selected="Faculty of New Technologys of Communication and Information">
              <option class="text-gray-700 " value="Faculty of New Technologys of Communication and Information"  >
                Faculty of New Technologys of Communication and Information

              </option>
            </select>
            <span class="text-red-500 text-xs italic" v-if="v$.faculty.$error">{{ v$.faculty.$errors[0].$message }} </span>

          </div> -->
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" aria-disabled="true">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="department"
          >
            Department
          </label>
          <select
            v-model="profileData[0].nom_departement"
            disabled
            class="block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
            id="department"
            aria-selected="IFA"
          >
            >
            <option
              v-for="department in departments"
              :key="department.name"
              :value="department.name"
            >
              {{ department.name.toLocaleUpperCase() }}
            </option>
          </select>
          <!-- <span class="text-red-500 text-xs italic" v-if="v$.nom_departement.$error">{{ v$.nom_departement.$errors[0].$message }} </span> -->
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="student-reg"
          >
            Student Registration Number
          </label>
          <input
            v-model="profileData[0].num_carte"
            disabled
            class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="student-reg"
            type="text"
            placeholder="Enter your ID"
          />
          <!-- <span class="text-red-500 text-xs italic" v-if="v$.num_carte.$error">{{ v$.num_carte.$errors[0].$message }} </span> -->
        </div>
      </div>
      <!--       -->

      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="deplome"
          >
            Deploma
          </label>
          <input
            v-model="profileData[0].diplome"
            disabled
            class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="deplome"
            type="text"
            placeholder="Enter your deploma"
          />
          <!-- <span class="text-red-500 text-xs italic" v-if="v$.diplome.$error">{{ v$.diplome.$errors[0].$message }} </span> -->
        </div>
        <!--edit profile info btn-->

        <router-link to="/student-profile">
          <button

            class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-7"
          >
            Edit
          </button>
        </router-link>
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
            v-model="date_debut"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="start-date"
            type="date"
            placeholder="Enter internship start date"
          />
          <span class="text-red-500 text-xs italic" v-if="v$.date_debut.$error"
            >{{ v$.date_debut.$errors[0].$message }}
          </span>
          <span class="text-red-500 text-xs italic mx-auto" v-if="dateDbFError"
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
            v-model="date_fin"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="end-date"
            type="date"
            placeholder="Enter internship end date"
          />
          <span class="text-red-500 text-xs italic" v-if="v$.date_fin.$error"
            >{{ v$.date_fin.$errors[0].$message }}
          </span>
        </div>
      </div>
      <!--       -->
      <!--submit button and cancel button-->

      <div class="flex flex-wrap w-1/2 justify-evenly px-3 max-md:w-full">
        <button
          type="submit"
          class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-md"
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
  </div>

  </div>
</template>

<script>
//using PrimwVue
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

//using vuelidate for form validation
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

import axios from "axios";
import router from '../../../router';

//custom validation
const alphaNumWithSpace = helpers.regex("alphaNumWithSpace", /^[a-zA-Z0-9 ]+$/);
const alphaWithSpace = helpers.regex("alphaWithSpace", /^[a-zA-Z ]+$/);


export default {
  name: "OfferForm",
  components: {
    Dropdown,
    Button,
  },
  data() {
    return {
      showConfirmationDialog: false,
        accepted: false,
      departments: [{ name: "ifa" }, { name: "tlsi" }],
      v$: useVuelidate(),
      profileData: [
        {
          id_etudiant: "",
          nom_etudiant: "",
          prenom_etudiant: "",
          email: "",
          tel_etudiant: "",
          num_carte: "",
          diplome: "",
          nom_departement: [],
        },
      ],
      // faculty: '',
      // department: '',
      // studentRegN: '',
      // deploma: '',

      date_debut: "",
      date_fin: "",

      dateDbFError: '',

      idOffre: parseInt(this.$route.params.id),

      internship: {},
    };
  },

  validations: {

    date_debut: {
      required,
    },
    date_fin: {
      required,
    },
  },
  computed: {


  },

  methods: {
    showConfirmationDialogFunc() {
      this.showConfirmationDialog = true;
    },


    validateForm() {
      let cd = new Date().setHours(0, 0, 0, 0);
      const dateDebut = new Date(this.date_debut).setHours(0, 0, 0, 0);
      const dateFin = new Date(this.date_fin).setHours(0, 0, 0, 0);
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
        console.log(this.profileData[0].id_etudiant);
        this.submitForm();
      }

    },

    submitForm() {
      axios
        .post("http://localhost:8000/api/applyForInternship", {
          idStudent: this.profileData[0].id_etudiant,
          dateD: this.date_debut,
          dateF: this.date_fin,
          idOffre: this.idOffre,
        })
        .then(function (response) {
          console.log("before");
          console.log(response);
          router.push("/Internships" );
          console.log("after");
        })
        .catch(function (error) {
          console.log(error);

        });
    },
  },
 async mounted() {
    let id = this.$route.params.id;
    axios
      .post("http://localhost:8000/api/consultStudentAccount", {
        id: localStorage.getItem("id"),
      })
      .then((response) => {
        this.profileData = response.data;
        console.log("this is profile data");
        console.log(this.profileData);
        console.log(this.profileData[0].id_etudiant);
        // console.log(typeof this.profileData);
      })
      .catch((error) => {
        console.log(error);
      });


      await axios
        .post("http://localhost:8000/api/getAcceptedApplications", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
          if (response.data.length > 0) {
            this.accepted = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });

  },
};
</script>

<style scoped>
:disabled {
  background-color: rgb(208, 208, 208);
  color: gray;
}
</style>
