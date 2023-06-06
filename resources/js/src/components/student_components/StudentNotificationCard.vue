<template>
    <div
      class="notification-card mb-2 bg-white flex gap-8"
      :class="{ 'bg-green-200 border border-green-400': !is_seen }"
    >
      <div class="flex items-center justify-between gap-8 ">
        <!--add notification icon-->
        <i class="fa-solid fa-circle-exclamation" :class="{ 'text-green-400 ': !is_seen }"></i>
  
        <span class="text-gray-400 text-sm" >{{ timeStamp }}</span>
      </div>
      <p class="text-sm mt-2">{{ message }}</p>
  
      <i @click="deleteNotif" class="fa-solid fa-trash p-2 ml-auto mx-4 bg-white border-2 cursor-pointer rounded-full text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition-all"></i>
    </div>
  </template>
  
  <script>
import axios from "axios";
export default {
      props: {
    id_notif: Number,
    message: String,
    timeStamp: String,
    is_seen: Number,
      },
      methods: {
        deleteNotif() {
          axios
            .post("http://localhost:8000/api/deleteNotification", {
              id: this.id_notif,
              
            })
            .then((response) => {
              console.log(response);
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
  created() {
 
  },
};
</script>
  
  <style>
.notification-card {
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;
}

.notification-card:hover {
  background-color: #edf2f7;
}
</style>
  