<template>
  <div class="bg-white rounded-md shadow p-4">
    <!-- <img :src="internshipData[0].photo_offre" alt="" /> -->
    <label class="text-md font-bold text-primary mb-2">Created By Student:</label>
    <h2 class="text-gray-600">
      {{ applicationInfo[0].prenom_etudiant }}
      {{ applicationInfo[0].nom_etudiant }}
    </h2>
    <label class="text-md font-bold text-primary my-2">Title:</label>
    <p class="text-gray-600">{{ applicationInfo[0].theme }}</p>
    <label class="text-md font-bold text-primary my-2">Duration:</label>
    <p class="text-gray-600">{{ applicationInfo[0].duree }} weeks</p>
    <!--supervisor info-->
    <label class="text-md font-bold text-primary my-2">Supervisor:</label>
    <p class="text-gray-600">
      {{ applicationInfo[0].prenom_responsable }}
      {{ applicationInfo[0].nom_responsable }}
    </p>
    <label class="text-md font-bold text-primary my-2">Email:</label>
    <p class="text-gray-600">{{ applicationInfo[0].email_responsable }}</p>
    <label class="text-md font-bold text-primary my-2">Company Address:</label>
    <p class="text-gray-600">{{ applicationInfo[0].addresse_entreprise }}</p>
    <!-- <label class="text-md font-bold text-primary my-2">Description:</label>
    <p class="text-gray-800 mb-4">{{ applicationInfo[0].description }}</p> -->
    <div class="flex gap-4 my-4">
      <!-- <div class="flex justify-between">
        <button
          class="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
        >
          Delete
        </button>
      </div> -->
      <div class="flex items-center justify-between gap-8 ">
              <button  class="bg-orange-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-orange-600" @click="showDetails = true">
                Manage
              </button>
<router-link to="/supervisor-applications">
  
                <button  class="bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-600" @click="showDetails = true">
                  Back
                </button>
       
</router-link>
            </div>
    </div>
    <div class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-50" v-if="showDetails">
      <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
      <div class="z-10 bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Application Details</h2>
        <p class="text-gray-600 mb-4">Student Name: {{ applicationInfo[0].prenom_etudiant }} {{ applicationInfo[0].nom_etudiant }}</p>
        <p class="text-gray-600 mb-4">Email: {{ applicationInfo[0].email }}</p>
        <div class="flex items-center justify-between mb-4">
          <button class="bg-green-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-green-600" @click="acceptApplication">Accept</button>
          <button class="bg-red-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-red-600" @click="showclearificationInput = true">Refuse</button>
        </div>
        <div class="mb-4">
          <!-- <textarea v-model="motif" class="w-full border-gray-300 rounded-md p-2" placeholder="Add clarification"></textarea> -->
        </div>
        <button class="bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-600" @click="showDetails = false">Close</button>
      </div>
    </div>

  
   <transition class="scale-up">
      <div class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-50" v-if="showclearificationInput">
        <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
        <div class="z-10 bg-white rounded-lg shadow-lg p-8 w-96">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Add a clearification</h2>
          <textarea v-model="motif" class="w-full border-gray-300 rounded-md p-2" placeholder="Add clarification"></textarea>
          <div class="flex items-center justify-between mb-4">
            <button class="bg-green-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-green-600" @click="refuseApplication">Send</button>

          </div>
          <button class="bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-600" @click="showSuccess = true">Close</button>
        </div>
      </div>
   </transition>

       <!-- New pop-up dialog box for success -->

       <transition class="scale-up">
        <div class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-50" v-if="showSuccess">
            <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
            <div class="z-10 bg-white rounded-lg shadow-lg p-8 w-96">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Success</h2>
            <p class="text-gray-600 mb-4">You request has been snt successfully</p>
            <div class="flex items-center justify-between mb-4">
                <button class="bg-green-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-green-600" @click="showSuccess = false">Ok</button>
            </div>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      applicationInfo: [
        {
        
        },
      ],
        showDetails: false,
        showCreateSupervisor: false,
        showSuccess: false,
        showclearificationInput:false,
        motif:"",
    };
  },
  methods: {

    
    toogleDetails() {
      this.showDetails = !this.showDetails;
    },
    acceptApplication() {
      console.log(this.id);
      axios
        .post("http://localhost:8000/api/acceptRequestRes", {
          id:this.$route.params.id,
        })
        .then((response) => {
            console.log(response.data);
                          this.showSuccess = true;

          setTimeout(() => {
                this.showSuccess = false;
                router.push(`/supervisor-applications`);
            }, 1000);
         
        }).catch((error) => {
          console.log(error);
        });
    },
    
          refuseApplication() {
        
        console.log(this.id);
        axios
          .post("http://localhost:8000/api/refuseRequestRes", {
            id:this.$route.params.id
          })
          .then((response) => {
              console.log(response.data);
          
              if (this.motif = "") {
                this.showSuccess = true;

                setTimeout(() => {
                this.showSuccess = false;
                router.push(`/supervisor-applications`);
            }, 1000);
            
            }
          }).catch((error) => {
            console.log(error);
          });
          if (this.motif != "") {
            axios
              .post("http://localhost:8000/api/sendMotifRes", {
                id:this.$route.params.id,
                motif:this.motif,
              })
              .then((response) => {
                  console.log(response.data);
                  this.showSuccess = true;

                  setTimeout(() => {
                this.showSuccess = false;
                router.push(`/supervisor-applications`);
            }, 1000);
              }).catch((error) => {
                console.log(error);
              });
          }
          },
         
  },
  async mounted() {
    await axios
      .post("http://localhost:8000/api/studentApplicationInfo", {
        id: this.$route.params.id,
      })
      .then((response) => {
        this.applicationInfo = response.data;
        console.log("this is profile data");
        console.log('app info',this.applicationInfo);

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


</style>