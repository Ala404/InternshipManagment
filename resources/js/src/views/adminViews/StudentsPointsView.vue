<template>
  <div>
   <!-- <AttendanceTable/>  -->
   <!-- <table class="w-full table-auto border-gray-300 text-primary">
        <thead class="bg-gray-300">
          <tr>
            <th class="px-4 py-2 text-left">Date</th>
            <th class="px-4 py-2 text-left">Entry Hour</th>
            <th class="px-4 py-2 text-left">Finishing Hour</th>
            <th class="px-4 py-2 text-left">Observation</th>
          </tr>
        </thead>
        <tbody class="w-full table-auto">
          
    
      <AttendanceTable v-for="attendance in attendances" :key="attendance.id_presence" :class="(this.attendanceCount + 1) % 2 === 0 ? 'bg-gray-300' : ''" 
      class="text-gray-600" :date="attendance.date" :entryHour="attendance.heure_entree" :finishingHour="attendance.heure_sortie"
       :observation="attendance.remarque" />
    
     </tbody>
     </table> -->

     <StudentPointCard v-for="point in points" :points="points" :key="point.id_etudiant" :firstName="point.nom_etudiant"
     :lastName="point.prenom_etudiant" :finalPoints="point.note_totale" :profilePic="pplImages[Math.floor(Math.random() * pplImages.length)]"/>



  </div>
</template>

<script>

// import AttendanceTable from '../../components/student_components/attendance/AttendanceTable.vue'
import StudentPointCard from '@/components/admin-components/students_points/StudentPointCard.vue';

import axios from 'axios'

export default {
    name: "AttendanceView",
    components: {
        StudentPointCard
  },
  data() {
    return {
      // attendances: [],
      // attendanceCount: 0,
        points: [],
        pplImages: [

'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg',

],


      
    }
  },created() {
 
   
      axios
        .get("http://localhost:8000/api/studentsList", {
          
        })
        .then((response) => {
          this.points = response.data;
          console.log(this.points)
        })
        .catch((error) => {
          console.log(error);
        });

             //getting random profile pictures
     axios.get('https://randomuser.me/api/?results=100')
       .then(response => {
          console.log(response.data)
          this.points.forEach((point, index) => {
            point.photo_etudiant = response.data.results[index].picture.large
          })

        })
        .catch(error => {
          console.error(error)
        });

  },

  }

</script>

