<template>
    <div class="flex justify-between items-center bg-white rounded-lg overflow-hidden shadow-md m-2 p-2">
    
        <img
          :src="profilePictureUrl"
          alt="pic"
          class="ml-2 h-12 object-cover rounded-full"
        />
        
          <h2 class="text-lg font-bold">{{ firstName }} {{ lastName }}</h2>
         

    <div class="flex justify-between items-center">
            <router-link :to="`/interns-attendace/${this.id}`">
                    <button
                      class="mr-2 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full"
                      @click="manageAttendance"
                    >
                      <i class="fas fa-calendar-check"></i>
                    </button>
            </router-link>
    
              <router-link :to="`/interns-points/${this.id}`">
                    <button
                      class="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full"
                      @click="manageMarks"
                    >
                      <i class="fas fa-chart-bar"></i>
                    </button>
              </router-link>

           
            
           
        
    </div>
      </div>
  
  </template>
  <script>
  export default {
    props: {
      id: Number,
      firstName: String,
      lastName: String,
            profilePictureUrl: String,
            idStage: Number,
    },
    methods: {
      manageAttendance() {
        // Add your logic for managing attendance here
        console.log("Managing Attendance");
      },
      manageMarks() {
        // Add your logic for managing marks here
        console.log("Managing Marks");
      },
    },
  };
  </script>
