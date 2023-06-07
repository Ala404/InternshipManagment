<template>
  <div class="mx-auto py-4 font-sans text-center">
    <h1 class="text-5xl font-bold mb-16 text-primary">
      New Internship
    </h1>

    <form class=" w-full px-40 max-sm:p-0 " @submit.prevent="validateForm">
      <!--      -->

      <!--       -->
      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
          <label
            class="block uppercase text-gray-700 text-xs font-bold mb-2"
            for="intern-title"
          >
            <i class="fas fa-book-open"></i> Internship Title
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
        </div>
        <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mx-auto">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="duration"
          >
            <i class="fas fa-clock"></i> Duration
          </label>
          <input
            v-model="this.duration"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="duration"
            type="text"
            placeholder="Enter internship duration (in weeks)"
          />
          <span class="text-red-500 text-xs italic" v-if="v$.duration.$error"
            >{{ v$.duration.$errors[0].$message }}
          </span>
        </div>
      </div>


      <!--       -->




        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
          <label
            class="block uppercase text-gray-700 text-xs font-bold mb-2"
            for="deadline"
          >
            <i class="fas fa-calendar-alt"></i> Deadline
          </label>
          <input
            v-model="this.deadline"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="deadline"
            type="date"
            placeholder="Enter deadline"
          />
          <span class="text-red-500 text-xs italic" v-if="v$.deadline.$error"
            >{{ v$.deadline.$errors[0].$message }}
          </span>
        </div>

      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
          <label
            class="block uppercase text-gray-700 text-xs font-bold mb-2"
            for="Description"
          >
             <i class="fas fa-align-left"></i> Description
          </label>
          <textarea
            v-model="this.description"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="Description"
            type="textarea"
            placeholder="Enter description"
          />
          <span class="text-red-500 text-xs italic" v-if="v$.description.$error"
            >{{ v$.description.$errors[0].$message }}
          </span>
        </div>

      </div>

      <!-- offer image -->
      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
          <label
            class="block uppercase text-gray-700 text-xs font-bold mb-2"
            for="offer-image"
          >
            <i class="fas fa-image"></i> Offer Image
          </label>
          <input

            class="appearance-none block  w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="offer-image"
            type="file"
            placeholder="Enter offer image"
          />

        </div>
      </div>









      <!--submit button and cancel button-->

      <div class="flex flex-wrap w-1/2 justify-evenly px-3 max-md:w-full mx-auto">
        <button
          class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-md"
          type="submit"
        >
           <i class="fas fa-paper-plane"></i> Submit
        </button>

        <router-link to="/supervisor-internships">
          <button
            class="bg-white border-2 hover:border-primary text-black font-bold py-2 px-4 focus:outline-none focus:shadow-slate-500 rounded-md"
            type="button"
          >
           <i class="fas fa-times"></i> Cancel
          </button>
        </router-link>
      </div>
    </form>
    <!--confirmation modal-->
    <transition class="scale-up">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Confirmation</h3>
            <span class="close" @click="showModal = false">&times;</span>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to submit this offer?</p>
          </div>
          <div class="modal-footer">
            <button
              class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-md"
              @click="validateForm"
            >
              Yes
            </button>
            <button
              class="bg-white border-2 hover:border-primary text-black font-bold py-2 px-4 focus:outline-none focus:shadow-slate-500 rounded-md"
              @click="showModal = false"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//using PrimwVue
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

import router from "@/router";

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
      showModal: false,

      v$: useVuelidate(),
      internshipTitle: "",
      duration: "",
      description: "",
      deadline: "",
      photo: "",


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
        minValue: minValue(1),
        maxValue: maxValue(12)
      },
      description: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
        // alphaWithSpace
      },
      deadline: {
        required,
      },
    };
  },
  methods: {

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
      if (!this.v$.$error) {
        console.log("form is valid");
        this.submitForm();
      } else {
        console.log("form is not valid");
      }
    },

    submitForm() {
      axios
        .post("http://localhost:8000/api/creerOffreRes", {
          id: localStorage.getItem("id"),
          theme: this.internshipTitle,
          duree: this.duration,
          description: this.description,
          deadline: this.deadline,
          photo: this.photo,
        })
        .then(function (response) {
          console.log(response);
          router.push("/supervisor-internships");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {},
  created() {},
};
</script>

