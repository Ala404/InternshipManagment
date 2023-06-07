<template>
  <div>
    <div class="flex justify-between mb-12 w-3/4 mx-auto"  >
      <span
        @click="getAllApplications"
        :class="{ 'bg-white text-primary': all, 'bg-primary text-white': !all }"
        class="font-bold px-3 py-2 rounded cursor-pointer hover:bg-white hover:text-primary transition-all shadow-md"
      >
        All
      </span>

      <span
        @click="getAcceptedApplications"
        :class="{
          'bg-white text-primary': accepted,
          'bg-primary text-white': !accepted,
        }"
        class="font-bold px-3 py-2 rounded cursor-pointer hover:bg-white hover:text-primary transition-all shadow-md"
      >
        Accepted
      </span>
      <span
        @click="getRejectedApplications"
        :class="{
          'bg-white text-primary': rejected,
          'bg-primary text-white': !rejected,
        }"
        class="font-bold px-3 py-2 rounded cursor-pointer hover:bg-white hover:text-primary transition-all shadow-md"
      >
        Rejected
      </span>
      <span
        @click="getPendingApplications"
        :class="{
          'bg-white text-primary': pending,
          'bg-primary text-white': !pending,
        }"
        class="font-bold px-3 py-2 rounded cursor-pointer hover:bg-white hover:text-primary transition-all shadow-md"
      >
        Pending
      </span>
    </div>

    <div class="px-auto max-sm:p-0">
      <div
        class="grid grid-cols-3 gap-56 font-bold text-center text-primary mb-2 bg-gray-300 rounded p-2 pl-56"  

      >

        <div>Title</div>
        <div>Status</div>
        <div>Action</div>
      </div>
      <ApplicationCard
        v-for="application in applications"
        :key="application.id_stage"
        :application="application"
        :id="application.id_stage"
        :title="application.theme"
        :image="
          companiesImages[Math.floor(Math.random() * companiesImages.length)]
        "
        :status="application.status"
        :motif="application.motif"
      />

      <!-- add empty icon if no applications -->
      <div v-if="applications.length === 0" class="text-center mt-32">
        <i class="fas fa-folder-open fa-5x text-primary"></i>
        <h1 class="text-2xl font-bold text-secondary">No applications</h1>
        <p class="text-gray-500">You have no applications yet</p>
      </div>


    </div>
  </div>

</template>

  <script>
import ApplicationCard from "../../components/student_components/internship_applications/ApplicationCard.vue";
import axios from "axios";

export default {
  name: "ApplicationView",
  components: {
    ApplicationCard,
  },
  data() {
    return {
      applications: [],
      ///big tech companies images valid
      companiesImages: [

        "http://www.ooredoo.dz/Ooredoo/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobnocache=false&blobtable=MungoBlobs&blobwhere=1464606283207&ssbinary=true",

      ],
      all: true,
      accepted: false,
      rejected: false,
      pending: false,
    };
  },
  methods: {
    //getting accepted applications
    async getAcceptedApplications() {
      this.accepted = true;
      this.rejected = false;
      this.pending = false;
      this.all = false;
      await axios
        .post("http://localhost:8000/api/getAcceptedApplications", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //getting rejected applications
    async getRejectedApplications() {
      this.accepted = false;
      this.rejected = true;
      this.pending = false;
      this.all = false;
      await axios
        .post("http://localhost:8000/api/getRefusedApplications", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //getting pending applications
    async getPendingApplications() {
      this.accepted = false;
      this.rejected = false;
      this.pending = true;
      this.all = false;
      await axios
        .post("http://localhost:8000/api/getPendingApplications", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //getting all applications
    async getAllApplications() {
      this.accepted = false;
      this.rejected = false;
      this.pending = false;
      this.all = true;
      await axios
        .post("http://localhost:8000/api/applicationsList", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async created() {
    //getting data from the backend according to the state of the application

    if (this.accepted) {
      this.getAcceptedApplications();
    } else if (this.rejected) {
      this.getRejectedApplications();
    } else if (this.pending) {
      this.getPendingApplications();
    } else if (this.all) {
      this.getAllApplications();
    } else {
      axios
        .post("http://localhost:8000/api/applicationsList", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
          this.applications = response.data;
        });
    }

    //getting random companies logos online
  },
};
</script>
