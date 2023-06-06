<template>
  <div >
    <router-link to="/admin-internships"><span class="absolute top-4 left-4 text-orange-600 text-lg font-semibold ">Internships</span></router-link>

    <div class="absolute right-32 -top-10">
      <Filter></Filter>
    </div>

    <!--Cards-->

    <div class="px-32 max-sm:p-0">
      <!--default card-->
      <div v-if="internships.length == 0" class="flex justify-center items-center h-64">
            <div class="flex flex-col items-center">
                <i class="fas fa-folder-open text-6xl text-secondary"></i>
                <span class="text-gray-500 text-2xl">No internships yet</span>
            </div>
        </div>
     
      <InternshipCard
        @click="getIntership"
        :to="`/admin-internships/${internship.id_offre}`"
        v-for="internship in internships"
        :key="internship.id_offre"
        :image="companiesImages[Math.floor(Math.random() * companiesImages.length)]"
        :title="internship.theme"
        :deadline="internship.deadline"
        :duration="internship.duree"
        :description="internship.description"
      />
    </div>

   
  </div>
</template>

<script>
import axios from "axios";
import InternshipCard from "../../components/student_components/internship/InternshipCard.vue";
import Filter from "../../components/student_components/internship/Filter.vue";

export default {
  name: "InternshipsView",
  components: {
    InternshipCard,
    Filter,
  },
  data() {
    return {
      internships: [],
      showOfferForm: false,
      companiesImages: [
       
        'http://www.ooredoo.dz/Ooredoo/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobnocache=false&blobtable=MungoBlobs&blobwhere=1464606283207&ssbinary=true',
        
    ],
    };
  },
  components: {
    InternshipCard,
  },
  methods: {
    getIntership() {
      console.log(this.internship);
    },
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/consultOffersList")
      .then((response) => {
        this.internships = response.data;
        console.log(this.internships);
      })
      .catch((error) => {
        console.log(error);
      });

    //   //getting random profile pictures 
    // axios
    //   .get("xsgames.co/randomusers/avatar.php?g=male")
    //   .then((response) => {
    //     this.internships.forEach((internship, index) => {
    //       internship.photo_offre = response.data.results[index].picture.large;
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

