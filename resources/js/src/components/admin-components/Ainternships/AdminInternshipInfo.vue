<template>
  <div class="bg-white rounded-md shadow p-4">
    <!-- <img :src="internshipData[0].photo_offre" alt="" /> -->
    <label class="text-md font-bold text-primary mb-2">Responsable:</label>
    <h2 class="text-gray-600">
      {{ internshipData[0].prenom_responsable }}
      {{ internshipData[0].nom_responsable }}
    </h2>
    <label class="text-md font-bold text-primary my-2">Title:</label>
    <p class="text-gray-600">{{ internshipData[0].theme }}</p>
    <label class="text-md font-bold text-primary my-2">Duration:</label>
    <p class="text-gray-600">{{ internshipData[0].duree }} weeks</p>
    <label class="text-md font-bold text-primary my-2">Address:</label>
    <p class="text-gray-600">{{ internshipData[0].addresse_entreprise }}</p>
    <label class="text-md font-bold text-primary my-2">Description:</label>
    <p class="text-gray-800 mb-4">{{ internshipData[0].description }}</p>
    <div class="flex gap-8">
      <button
        class="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
        @click="this.showDeleteConfirmationDialogFunc"
      >
        Delete
      </button>

      <!--back-->
      <router-link
        class="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600"
        to="/admin-internships"
      >

        Back
      </router-link>
    </div>
    <!-- delete confirmation dialog -->
<transition name="scale-up">
  <div v-if="showDeleteConfirmationDialog" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="confirmation-popup bg-white w-1/3 p-4 rounded shadow">
      <h2 class="text-lg font-medium mb-4">Confirmation</h2>
      <p class="mb-4">Are you sure you want to delete this profile?</p>
      <div class="flex justify-end">
        <button class="bg-red-500 text-white px-4 py-2 rounded font-medium mr-2" @click="showDeleteConfirmationDialog = false">Cancel</button>
        <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="deleteInternship">Confirm</button>
      </div>
    </div>
  </div>
</transition>
  </div>
</template>

<script>
import router from "../../../router/index";
import axios from "axios";
export default {
  data() {
    return {
      showDeleteConfirmationDialog: false,
      internshipData: [
        {
          photo_offre: "",
          nom_responsable: "",
          prenom_responsable: "",
          theme: "",
          duration: "",
          addresse_entreprise: "",
          description: "",
        },
      ],
    };
  },
  methods: {
    showDeleteConfirmationDialogFunc() {
      this.showDeleteConfirmationDialog = true;
    },
    deleteInternship() {
      axios
        .post("http://localhost:8000/api/deleteOffer", {
          id: this.$route.params.id,
        })
        .then((response) => {
          console.log(response);
          router.push("/admin-internships");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .post("http://localhost:8000/api/offerInfo", {
        id: this.$route.params.id,
      })
      .then((response) => {
        this.internshipData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
