<template>
  <div>
    <CertificatedStudentsCard
      v-for="intern in interns"
      :key="intern.id_etudiant"
      :id="intern.id_etudiant"
      :firstName="intern.prenom_etudiant"
      :lastName="intern.nom_etudiant"
      :profilePictureUrl="pplImages[Math.floor(Math.random() * pplImages.length)]"
    />
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
