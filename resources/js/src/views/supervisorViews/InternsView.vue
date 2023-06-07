<template>
  <div>

   <!-- empty icon if no applications -->
    <div v-if="interns.length === 0" class="text-center mt-32">
      <i class="fas fa-user fa-5x text-secondary"></i>
      <h1 class="text-2xl font-bold text-primary">No interns</h1>
      <p class="text-gray-500">You have no interns yet</p>
    </div>

    <InternCard
      v-for="intern in interns"
      :key="intern.id_etudiant"
      :id="intern.id_etudiant"
      :idStage="intern.id_stage"
      :firstName="intern.prenom_etudiant"
      :lastName="intern.nom_etudiant"
      :profilePictureUrl="pplImages[Math.floor(Math.random() * pplImages.length)]"
    />
  </div>
</template>
  
  <script>
import axios from "axios";
import InternCard from "../../components/supervisor_components/Interns/InternCard.vue";

export default {
  components: {
    InternCard,
  },
  data() {
    return {
      interns: [
          ],
          pplImages: [

'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg',

],
    };
      },
  mounted() {
    axios
      .post("http://localhost:8000/api/listeStagiairs", {
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

  },
};
</script>
  