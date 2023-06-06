<template>

  <div>
    <!-- empty notification  icon if there is no notification -->
    <div v-if="notifications.length === 0">
      <div class="flex justify-center items-center h-64">
        <div class="flex flex-col items-center">
          <i class="fas fa-bell text-3xl text-primary"></i>
          <span class="text-gray-500 text-lg">No notifications yet</span>
        </div>
      </div>
    </div>


    <NotificationCard
      v-for="notification in notifications"
      :key="notification.id"
        :id_notif="notification.id_notification"
      :message="notification.message"
      :timeStamp="notification.timeStamp"
      :is_seen="notification.is_seen"
    />
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import NotificationCard from "@/components/student_components/StudentNotificationCard.vue"
import axios from 'axios';
// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    NotificationCard,
    
  },
  data() {
    return {
      notifications:[],
    }
  },
  async created() {
    //getting data from the backend
   await axios
     .post("http://localhost:8000/api/getStudentNotif", {
          id: localStorage.getItem("id"),
      }
       ).then((response) => {
        this.notifications = response.data;
        console.log(this.notifications);
        console.log(typeof this.notifications);
      })
      .catch((error) => {
        console.log(error);
      });
    
      axios
      .post("http://localhost:8000/api/seeStudentNotif", { id: localStorage.getItem("id") })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  },
  
});
</script>
