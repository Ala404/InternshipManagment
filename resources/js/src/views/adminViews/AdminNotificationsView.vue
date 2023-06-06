<template>
  <div>
     <!--display empty message if no notifications-->

    <div v-if="notifications.length === 0" class="text-center text-gray-500 py-32">
        <i class="fas fa-bell fa-3x text-secondary"></i>
        <h1 class="text-2xl font-bold">No notifications</h1>
    </div>

    <router-link to="/admin-notifications"><span class="absolute top-4 left-4 text-orange-600 text-lg font-semibold ">Notifications</span></router-link>
    <AdminNotificationCard
      v-for="notification in notifications"
      :key="notification.id_notification "
      :id_notif="notification.id_notification"
      :message="notification.message"
      :timeStamp="notification.timeStamp"
      :is_seen="notification.is_seen"
    />
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import AdminNotificationCard from '@/components/admin-components/AdminNotificationCard.vue';
import axios from 'axios';
// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    AdminNotificationCard,
  },
  data() {
    return {
      notifications:[],
    }
  },
  async created() {
    //getting data from the backend
   await axios
     .post("http://localhost:8000/api/getChefNotif", {
          id: localStorage.getItem("id")
      }
       ).then((response) => {
        this.notifications = response.data;
        console.log('chef notif:',this.notifications);
        console.log(typeof this.notifications);
      })
      .catch((error) => {
        console.log(error);
      });

      await axios
     .post("http://localhost:8000/api/seeChefNotif", {
          id: localStorage.getItem("id")
      }
       ).then((response) => {
        console.log(response);
   
      })
      .catch((error) => {
        console.log(error);
      });
    
      

  },
  
});
</script>
