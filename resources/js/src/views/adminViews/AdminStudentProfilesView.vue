<template>
  <div>
    <router-link to="/admin-student-profiles"><span class="absolute top-4 left-4 text-orange-600 text-lg font-semibold ">Students Profiles</span></router-link>

     <!--display empty message if no students-->

    <div v-if="students.length === 0" class="text-center text-gray-500 py-32">
      <i class="fas fa-user fa-3x text-secondary"></i>
      <h1 class="text-2xl font-bold">No students</h1>
    </div>

    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <StudentProfileCard
        v-for="student in students"
        :key="student.id_etudiant"
        :id="student.id_etudiant"
        :student="student"
        :firstName="student.prenom_etudiant"
        :lastName="student.nom_etudiant"
        :profilePictureUrl="pplImages[Math.floor(Math.random() * pplImages.length)]"
      />
    </div>
  </div>
</template>

  <script>
import axios from "axios";
import StudentProfileCard from "@/components/admin-components/students_profiles/StudentProfileCard.vue";

export default {
  components: {
    StudentProfileCard,
  },
  data() {
    return {
      students: [],
      isLoading: true,
      pplImages: [

        'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg',

      ],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/studentList")
      .then((response) => {
        this.students = response.data;
        console.log(this.students);
        this.isLoading = false;
      })
      .catch((error) => {
        console.error(error);
        this.isLoading = false;
      });

    //getting random profile pictures
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        this.students.forEach((student, index) => {
          student.photo_etudiant = response.data.results[index].picture.large;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

  <style>
/* Add any custom styling for your website here, using Tailwind CSS */
</style>
