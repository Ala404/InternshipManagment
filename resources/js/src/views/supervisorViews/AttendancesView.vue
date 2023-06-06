<template>
  <div>
   <!-- <AttendanceTable/>  -->
   <table class="w-full table-auto border-gray-300 text-primary">
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
     </table>

  </div>
</template>

<script>

import AttendanceTable from '../../components/student_components/attendance/AttendanceTable.vue'
import axios from 'axios'

export default {
    name: "AttendanceView",
    components: {
        AttendanceTable
  },
  data() {
    return {
      attendances: [],
      attendanceCount: 0,

      
    }
  },created() {
 
   
      axios
        .post("http://localhost:8000/api/consultAttendance", {
          id: localStorage.getItem("id")
        })
        .then((response) => {
          this.attendances = response.data;
          console.log(this.attendances)
        })
        .catch((error) => {
          console.log(error);
        });
  },
  computed() {
   
    console.log(this.attendanceCount)
  },
  }

</script>

