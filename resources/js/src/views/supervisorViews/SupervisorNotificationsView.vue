<template>

  <div>

    <SupervisorNotificationCard
      v-for="notification in notifications"
      :key="notification.id_notification "
      :message="notification.message"
      :id_notif="notification.id_notification"
      :timeStamp="notification.timeStamp"
      :is_seen="notification.is_seen"
    />
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import SupervisorNotificationCard from '@/components/supervisor_components/SupervisorNotificationCard.vue';
import axios from 'axios';
// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    SupervisorNotificationCard,
  },
  data() {
    return {
      notifications:[],
    }
  },
  async created() {
    //getting data from the backend
   await axios
     .post("http://localhost:8000/api/getResNotif", {
          id: localStorage.getItem("id")
      }
       ).then((response) => {
        this.notifications = response.data;
        console.log('supervisor notif:',this.notifications);
        console.log(typeof this.notifications);
      })
      .catch((error) => {
        console.log(error);
      });
    
      axios
      .post("http://localhost:8000/api/seeResNotif", { id: localStorage.getItem("id") })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  },
  
});
</script>
