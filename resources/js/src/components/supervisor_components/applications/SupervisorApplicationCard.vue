<template>
  <div class="bg-white rounded-lg p-2 hover:bg-gray-300 cursor-pointer m-2">
    <div class="flex items-center max-md:flex-col">
      <img class="w-24 object-cover rounded-lg mr-4" :src="image" alt="Company Logo">
      <div class="flex gap-10 justify-between items-start  max-md:items-center w-full">
        <h4 class="text-xl font-bold  text-primary my-auto">{{ title }}</h4>
        <h4 class="text-md font-bold  text-gray-500 my-auto"> <i class="fas fa-user mr-2"></i> {{ studentFName }} {{ studentLName }}</h4>
        <p class="text-gray-600 text-sm my-auto max-md:text-center">
          <i class="fas fa-envelope mr-2"></i>
          <span>{{ email }}</span>
        </p>
        <router-link :to="`/supervisor-applications/${this.id}`">
          <div class="flex items-center justify-between ">
            <button v-if="this.resStatus =='enAttente'" class="bg-orange-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-orange-600" @click="showDetails = true">
              Manage
            </button>

          </div>
      </router-link>
      </div>
    </div>
    <div class="fixed top-0 left-0 flex items-center justify-center w-full h-full" v-if="showDetails">
      <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
      <div class="z-10 bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Application Details</h2>
        <p class="text-gray-600 mb-4">Student Name: {{ studentFName }} {{ studentLName }}</p>
        <p class="text-gray-600 mb-4">Email: {{ email }}</p>
        <div class="flex items-center justify-between mb-4">
          <button class="bg-green-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-green-600" @click="acceptApplication">Accept</button>
          <button class="bg-red-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-red-600" @click="refuseApplication">Refuse</button>
        </div>
        <div class="mb-4">
          <textarea v-model="motive" class="w-full border-gray-300 rounded-md p-2" placeholder="Add clarification"></textarea>
        </div>
        <button class="bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-600" @click="showDetails = false">Close</button>
      </div>
    </div>
  </div>
</template>


      <script>
import axios from "axios";
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    studentFName: String,
    studentLName: String,
    email: String,
    chefStatus: String,
    resStatus: String,
  },
  data() {
    return {
      //temp data
      showDetails: false,
      motive : "",

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
          id:this.id,
        })
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        }).catch((error) => {
          console.log(error);
        });tss
    },

          refuseApplication() {

        console.log(this.id);
        axios
          .post("http://localhost:8000/api/refuseRequestRes", {
            id:this.id,
          })
          .then((response) => {
            console.log(response.data);
            if (this.motive = "") {
                    window.location.reload();
            }
          }).catch((error) => {
            console.log(error);
          });
          if (this.motive != "") {
            axios
              .post("http://localhost:8000/api/sendMotifRes", {
                id:this.id,
                motive:this.motive,
              })
              .then((response) => {
                console.log(response.data);
                window.location.reload();
              }).catch((error) => {
                console.log(error);
              });
          }
      },
  },
  created() {
    return {

    };
  },

};
</script>

