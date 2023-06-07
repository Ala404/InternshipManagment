<template>
  <div class="px-32 max-sm:p-0">
    <router-link to="/admin-applications"><span class="absolute top-4 left-4 text-orange-600 text-lg font-semibold ">Applications</span></router-link>

    <!--filering applications by state-->

    <div class="flex justify-between mb-12 w-3/4 mx-auto">

      <span
        @click="getAllApplications"
        :class="{ 'bg-white text-primary': all, 'bg-primary text-white': !all }"
        class="font-bold px-3 py-2 rounded cursor-pointer hover:bg-white hover:text-primary transition-all shadow-md"
      >
        All
      </span>

      <span
        @click="getAcceptedApplications"
        :class="{ 'bg-white text-primary': accepted, 'bg-primary text-white': !accepted }"
        class="font-bold px-3 py-2 rounded cursor-pointer hover:bg-white hover:text-primary transition-all shadow-md"
      >
        Accepted
      </span>
      <span
        @click="getRejectedApplications"
        :class="{ 'bg-white text-primary': rejected, 'bg-primary text-white': !rejected }"
        class="font-bold px-3 py-2 rounded cursor-pointer hover:bg-white hover:text-primary transition-all shadow-md"
      >
        Rejected
      </span>
      <span
        @click="getPendingApplications"
        :class="{ 'bg-white text-primary': pending, 'bg-primary text-white': !pending }"
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

      <!--display empty message if no applications-->
        <div v-if="applications.length === 0" class="text-center text-gray-500 py-32">
            <i class="fas fa-folder-open fa-3x text-secondary"></i>
            <h1 class="text-2xl font-bold">No applications</h1>
        </div>


    <AdminApplicationCard
      v-for="application in applications"
      :key="application.id_stage"
      :application="application"
      :id="application.id_stage"
      :title="application.theme"
      :image="companiesImages[Math.floor(Math.random() * companiesImages.length)]"
      :status="application.etat_chef"
      :studentFName="application.prenom_etudiant"
      :studentLName="application.nom_etudiant"
      :email="application.email"
    />
  </div>
  </div>
</template>

<script>
import AdminApplicationCard from "../../components/admin-components/applications/AdminApplicationCard.vue";
import axios from "axios";

export default {
  name: "ApplicationView",
  components: {
    AdminApplicationCard,
  },
  data() {
    return {
      applications: [

      ],
      companiesImages: [
        'http://www.ooredoo.dz/Ooredoo/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobnocache=false&blobtable=MungoBlobs&blobwhere=1464606283207&ssbinary=true',

    ],
      accepted: false,
      rejected: false,
      pending: false,
      all: true,
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
        .get("http://localhost:8000/api/acceptedRequestList")
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        }).catch((error) => {
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
        .get("http://localhost:8000/api/refusedRequestList")
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        }).catch((error) => {
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
        .get("http://localhost:8000/api/pendingRequestList")
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        }).catch((error) => {
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
        .get("http://localhost:8000/api/requestsList")
        .then((response) => {
          this.applications = response.data;
          console.log(response.data);
        }).catch((error) => {
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
        .get("http://localhost:8000/api/requestsList")
        .then((response) => {
          this.applications = response.data;
        });
    }


  },
};
</script>

