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
      <router-link :to="`/admin-applications/${this.id}`">
          <div class="flex items-center justify-between ">
            <button v-if="this.status =='enAttente'" class="bg-orange-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-orange-600" @click="showDetails = true">
              Manage
            </button>

          </div>
      </router-link>
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
    status: String,
  },
  data() {
    return {
      //temp data
      showDetails: false,
            motive: "",
      supervisorData: [],

    };
  },
  methods: {

    toogleDetails() {
      this.showDetails = !this.showDetails;
    },


  },
  created() {
    ///getting suprvisor data
    axios
      .post("http://localhost:8000/api/InfoResp", {

          id: localStorage.getItem("id"),

      })
      .then((response) => {
        console.log(response.data);

        this.supervisorData = response.data;
      });
  },

};
</script>

