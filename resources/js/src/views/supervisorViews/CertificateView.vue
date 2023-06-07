<template>
  <div>

    <!-- empty message if no certificated students -->

    <div v-if="interns.length === 0" class="text-center mt-32">
      <i class="fas fa-certificate fa-4x text-secondary"></i>
      <h1 class="text-2xl font-bold text-primary">No certificated students</h1>
      <p class="text-gray-500">You have no certificated students yet</p>
    </div>

   <div v-if="this.certificated">
      <CertificatedStudentsCard
      
        v-for="intern in interns"
        :key="intern.id_etudiant"
        :id="intern.id_etudiant"
        :firstName="intern.prenom_etudiant"
        :lastName="intern.nom_etudiant"
        :profilePictureUrl="pplImages[Math.floor(Math.random() * pplImages.length)]"
       
      />
   </div>
  </div>
</template>

    <script>
import axios from "axios";
import CertificatedStudentsCard from "@/components/supervisor_components/Interns/CertificatedStudentsCard.vue";

export default {
  components: {
    CertificatedStudentsCard,
  },
  data() {
    return {
            interns: [],
            pplImages: [

'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg',

          ],
          currentDate: new Date(),
          certificated: true,
    };
  },
  mounted() {
    axios
            .post("http://localhost:8000/api/successfulInternsList", {
                id: localStorage.getItem("id"),
      })
      .then((response) => {
        this.interns = response.data;
        console.log(this.interns);
        if (this.interns.date_fin > this.currentDate) {
          this.certificated = false;
        }
      })
      .catch((error) => {
        console.log(error);
      });

           //getting random profile pictures
     axios.get('https://randomuser.me/api/?results=100')
       .then(response => {
          console.log(response.data)
          this.interns.forEach((intern, index) => {
            intern.photo_etudiant = response.data.results[index].picture.large
          })

        })
        .catch(error => {
          console.error(error)
        });

        //get only student that has points





  },

};
</script>
