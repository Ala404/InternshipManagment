<template>
  <div class="mx-auto py-4 font-sans text-center">
    <h1 class="text-5xl font-bold mb-16 text-primary">
      Modify Internship Application
    </h1>

    <form class="w-full px-40 max-sm:p-0" @submit.prevent="">
      <!--      -->

      <!-- if the createur was supervisor, then diable all fields except start and end date-->

    <section >

          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="intern-title"

              >
             
                Internship Title
              </label>
              <!--input field with bg-white and border-gray-200 text-gray-300-->
              <input
              :readonly="applicationData[0].createur=='etudiant' ? null:  'readonly' "
                v-model="this.applicationData[0].theme"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="intern-title"
                type="text"
                placeholder="Enter internship title/subject"
              />
              <!--error message using vuelidate error message-->
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.applicationData[0].theme.$error"
                >{{ v$.applicationData[0].theme.$errors[0].$message }}
              </span>
         

            </div>
            </div>

            <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mx-auto">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="duration"
              >
                Duration
              </label>
              <input
              :readonly="applicationData[0].createur=='etudiant' ? null:  'readonly' "
                v-model="applicationData[0].duree"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="duration"
                type="text"
                placeholder="Enter internship duration"
              />
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.applicationData[0].duree.$error"
                >{{ v$.applicationData[0].duree.$errors[0].$message }}
              </span>
            </div>
          </div>

          <!--       -->
      <section v-if="applicationData[0].createur==='etudiant'">
              <div class="flex flex-wrap mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="superv-email"
                  >
                    Supervisor Email
                  </label>
                  <input
                    v-model="applicationData[0].email"
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                    id="superv-email"
                    type="email"
                    placeholder="Enter supervisor email"
                  />
                  <span
                    class="text-red-500 text-xs italic"
                    v-if="v$.applicationData[0].email.$error"
                    >{{ v$.applicationData[0].email.$errors[0].$message }}
                  </span>
                </div>
              </div>

                <!--supervisor first name -->
                <div class="flex flex-wrap mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="first-name"
                  >
                    First Name
                  </label>
                  <input
                    v-model="applicationData[0].prenom_responsable"
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                    id="first-name"
                    type="text"
                    placeholder="Enter Supervisor First Name"
                  />
                  <span
                    class="text-red-500 text-xs italic"
                    v-if="v$.applicationData[0].prenom_responsable.$error"
                    >{{ v$.applicationData[0].prenom_responsable.$errors[0].$message }}
                  </span>
                </div>
              </div>
              <!--       -->
              <div class="flex flex-wrap mb-6">
              <div class="flex flex-wrap w-full md:w-1/2 px-3 mb-8 md:mb-0 mx-auto">
                <label
                  class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
                  for="last-name"
                >
                  Last Name
                </label>
                <input
                  v-model="applicationData[0].nom_responsable"
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                  id="last-name"
                  type="text"
                  placeholder="Enter Supervisor Last Name"
                />
                <span
                  class="text-red-500 text-xs italic mx-auto"
                  v-if="v$.applicationData[0].nom_responsable.$error"
                  >{{ v$.applicationData[0].nom_responsable.$errors[0].$message }}
                </span>
              </div>
            </div>
      </section>

          <!--company info -->
          <div class="flex flex-wrap w-full my-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
              <label
                class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
                for="company-name"
              >
                Company Name
              </label>
              <input
              :readonly="applicationData[0].createur=='etudiant' ? null:  'readonly' "
                v-model="applicationData[0].nom_entreprise"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="company-name"
                type="text"
                placeholder="Enter Company Name"
              />
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.applicationData[0].nom_entreprise.$error"
                >{{ v$.applicationData[0].nom_entreprise.$errors[0].$message }}
              </span>
            </div>
            </div>

            <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
              <label
                class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
                for="company-address"
              >
                Company Address
              </label>
              <input
              :readonly="applicationData[0].createur=='etudiant' ? null:  'readonly' "
                v-model="applicationData[0].addresse_entreprise"
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
                id="company-address"
                type="text"
                placeholder="Enter Company Address"
              />
              <span
                class="text-red-500 text-xs italic"
                v-if="v$.applicationData[0].addresse_entreprise.$error"
                >{{ v$.applicationData[0].addresse_entreprise.$errors[0].$message }}
              </span>
            </div>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 mx-auto">
            <label
              class="block uppercase mx-auto text-gray-700 text-xs font-bold mb-2"
              for="company-phone"
            >
              Company Phone
            </label>
            <input
            :readonly="applicationData[0].createur=='etudiant' ? null:  'readonly' "
              v-model="applicationData[0].tel_entreprise"
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
              id="company-phone"
              type="text"
              placeholder="Enter Company Phone Number"
            />
            <span
              class="text-red-500 text-xs italic"
              v-if="v$.applicationData[0].tel_entreprise.$error"
              >{{ v$.applicationData[0].tel_entreprise.$errors[0].$message }}
            </span>
          </div>
    </section>

      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
          <label
            class="block uppercase text-gray-700 text-xs font-bold mb-2"
            for="start-date"
          >
            Start Date
          </label>
          <input
            v-model="applicationData[0].date_debut"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="start-date"
            type="date"
            placeholder="Enter internship start date"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.applicationData[0].date_debut.$error"
            >{{ v$.applicationData[0].date_debut.$errors[0].$message }}
          </span>
          <span class="text-red-500 text-xs italic" v-if="dateDbFError"
            >{{ dateDbFError }}
          </span>
        </div>
        </div>

        <div class="flex flex-wrap mb-6 ">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="end-date"
          >
            End Date
          </label>
          <input
            v-model="applicationData[0].date_fin"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-200"
            id="end-date"
            type="date"
            placeholder="Enter internship end date"
          />
          <span
            class="text-red-500 text-xs italic"
            v-if="v$.applicationData[0].date_fin.$error"
            >{{ v$.applicationData[0].date_fin.$errors[0].$message }}
          </span>
        </div>
        </div>


      <!--       -->
      <!--submit button and cancel button-->

      <div class="flex flex-wrap w-1/2 justify-evenly px-3 max-md:w-full mx-auto">
        <button
          class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-md"
          @click="showConfirmationDialogFunc"
          type="submit"
        >
          Submit
        </button>

        <router-link to="/applications">
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


<!-- success dialog -->
<transition class="scale-up">
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
</template>

  <script>
//using PrimwVue
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

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
      v$: useVuelidate(),
      applicationData: [
        {
          id_stage: "",
          theme: "",
          duree: "",
          date_debut: "",
          date_fin: "",
          prenom_responsable: "",
          nom_responsable: "",
          email: "",
          nom_entreprise: "",
          addresse_entreprise: "",
                tel_entreprise: "",
                createur: "",
        },
      ],
    };
  },

  validations() {
    return {
      applicationData: [
        {
          theme: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(50),
            // alphaNumWithSpace
          },
          duree: {
            required,
            // minValue: minValue(1),
            // maxValue: maxValue(12)
          },
          email: {
            required,
            email,
          },
          prenom_responsable: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(50),
            // alphaWithSpace
          },
          nom_responsable: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(50),
            // alphaWithSpace
          },
          nom_entreprise: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(50),
            // alphaWithSpace
          },
          addresse_entreprise: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(50),
            // alphaWithSpace
          },
          tel_entreprise: {
            required,
            // minLength: minLength(10),
            // maxLength: maxLength(10),

          },
          date_debut: {
            required,
          },
          date_fin: {
            required,
          },
        },
      ],
    };
  },
  methods: {
    showConfirmationDialogFunc() {
            this.showConfirmationDialog = true;
            console.log(this.createur);
    },

    validateForm() {
      let cd = new Date().setHours(0, 0, 0, 0);
      const dateDebut = new Date(this.startDate).setHours(0, 0, 0, 0);
      const dateFin = new Date(this.endDate).setHours(0, 0, 0, 0);
      console.log(dateDebut);
      console.log(dateFin);
      //   if (dateDebut < cd || dateFin < cd) {
      //     this.dateDbFError = "date must be current or future date";
      //     console.log(this.dateDbFError);
      //   }
      if (dateDebut > dateFin || dateDebut == dateFin) {
        this.dateDbFError = "start date must be before end date";
        console.log(this.dateDbFError);
      } else {
        this.dateDbFError = "";
        console.log(this.dateDbFError);
      }
      this.v$.$validate();
      if (!this.v$.$error && this.dateDbFError == "") {
        console.log("form is valid");
        console.log(this.applicationData[0].id_stage);
        console.log(this.$route.params.id);
        this.submitForm();
      } else {
        console.log("form is not valid");
      }
    },

    submitForm() {
      axios
        .post("http://localhost:8000/api/modifyDemande", {
          id: this.$route.params.id,
          entrName: this.applicationData[0].nom_entreprise,
          adrs: this.applicationData[0].addresse_entreprise,
          tel: this.applicationData[0].tel_entreprise,
          resFirstName: this.applicationData[0].prenom_responsable,
          resLastName: this.applicationData[0].nom_responsable,
          resEmail: this.applicationData[0].email,
          theme: this.applicationData[0].theme,
          duree: this.applicationData[0].duree,
          dateD: this.applicationData[0].date_debut,
          dateF: this.applicationData[0].date_fin,

        })
        .then( (response)=> {
          //print data
          console.log(response);
          this.showConfirmationDialog = false;
          this.showSuccessDialog = true;
        setTimeout(() => {
          this.showSuccessDialog = false;
          router.push('/applications');
        }, 2000);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    axios
      .post("http://localhost:8000/api/applicationInfo", {
        id: this.$route.params.id,
      })
      .then((response) => {
        this.applicationData = response.data;
        console.log("this is profile data");
        console.log('app info',this.applicationData);

        // console.log(typeof this.applicationData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


<style scoped>






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

/*if the createur was supervisor, then diable all fields except start and end date*/





</style>

