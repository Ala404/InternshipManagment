<template>
    <div>
        <router-link to="/admin-supervisor-profiles"><span class="absolute top-4 left-4 text-orange-600 text-lg font-semibold ">Supervisors Points</span></router-link>

    <div v-if="supervisors.length === 0" class="text-center text-gray-500 py-32">
      <i class="fas fa-user fa-3x text-secondary"></i>
      <h1 class="text-2xl font-bold">No supervisors</h1>
    </div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>

          <SupervisorProfileCard v-for="supervisor in supervisors" :key="supervisor.id_responsable" :id="supervisor.id_responsable"
           :supervisor="supervisor" :firstName="supervisor.prenom_responsable" :lastName="supervisor.nom_responsable" :profilePictureUrl="pplImages[Math.floor(Math.random() * pplImages.length)]"  />

      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
  import SupervisorProfileCard from '@/components/admin-components/supervisors_profiles/SupervisorProfileCard.vue'

  export default {
    components: {
      SupervisorProfileCard
    },
    data() {
      return {
        supervisors: [],
            isLoading: true,

            pplImages: [

'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg',

],
      }
    },
    mounted() {
      axios.get('http://localhost:8000/api/resList')
        .then(response => {
          this.supervisors = response.data
          console.log(this.supervisors)
          this.isLoading = false
        })
        .catch(error => {
          console.error(error)
          this.isLoading = false
        })

        //getting random profile pictures
        axios.get('https://randomuser.me/api/?results=100')
        .then(response => {
          this.supervisors.forEach((supervisor, index) => {
            supervisor.photo_responsable = response.data.results[index].picture.large
          })

        })
        .catch(error => {
          console.error(error)
        });
    }
  }
  </script>

  <style>
  /* Add any custom styling for your website here, using Tailwind CSS */
  </style>
