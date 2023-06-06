

<template >
  <nav
    class="flex items-center justify-between bg-gray-200 p-6 font-sans font-medium text-center"
  >
    <!--creating a new navbar with search bar, notifications icon with dropdown menu and user info also with dropdown menu-->
    <div
      class="flex items-center justify-center flex-shrink-0 text-black mr-6 w-7/12"
    >
      <input
        type="text"
        class="outline-none bg-gray-300 w-full ml-20 rounded-md p-2"
        placeholder="search"
      />
    </div>

    <!-- Notifications -->
    <div class="">
      <i
        @click="toggle"
        class="fas fa-bell relative text-xl text-primary hover:text-gray-700 cursor-pointer"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      ></i>
      <span
        class="bg-red-500 text-white rounded-full text-xs px-1 -m-2 mt-1 absolute"
        v-if="notificationsCount > 0"
        >{{ notificationsCount }}</span
      >
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="menu-width min-w-96 h-56 overflow-y-scroll"/>
    </div>
    <!--dropDown Menu for notifications-->
    <!-- User Info and Avatar -->
    <div>
      <div class="flex items-center">
        <div class="text-sm mr-4 max-md:hidden">
          <div class="text-gray-500">{{ user.name }}</div>
          <div class="text-gray-400">{{ user.email }}</div>
        </div>
        <!--Avatar dropDown Menu for user info-->
        <div
          @click="toggleProfileMenu"
          aria-haspopup="true"
          aria-controls="overlay_profile_menu"
        >
          <span
            class="inline-flex items-center justify-center h-10 w-10 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <img
              class="h-8 w-8 rounded-full"
              src="../../../public/img/profilePic.jpg"
              :alt="user.name"
            />
          </span>
          <Menu
            class=""
            ref="profileMenu"
            id="overlay_profile_menu"
            :model="profilItems"
            :popup="true"
          />
        </div>
      </div>
      <!--dropDown Menu for user info -->
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavBar",

  data() {
    return {
      user: {
        name:localStorage.getItem('firstName') + " " + localStorage.getItem('lastName'),
        email: localStorage.getItem("email"),
        avatarUrl: "../../../public/img/profilePic.jpg",
      },
      showDropdown: false,
      notifications: [],
      notificationsCount: 0,

      items: [
        {
          label: "Notifications",
          items: [],
          styleClass: "notification-label",

        },
      ],
      profilItems: [
        {
          label: "Profile",
          icon: "pi pi-fw pi-user",
          to: "/student-profile",
        },
        {
          label: "Logout",
          icon: "pi pi-fw pi-power-off",
          command: () => {
            localStorage.clear();
            this.$router.push("/");
          },
        },
      ],
    };
  },
  methods: {
   async toggle(event) {
          this.$refs.menu.toggle(event);
        await  axios
      .post("http://localhost:8000/api/seeStudentNotif", { id: localStorage.getItem("id") })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    toggleProfileMenu(event) {
      this.$refs.profileMenu.toggle(event);
    },
  },
  mounted() {
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("user_data"));

    axios
      .post("http://localhost:8000/api/getStudentNotif", {
        id: localStorage.getItem("id"),
      })
      .then((response) => {
        // Assign the notifications to the component's data property
        this.notifications = response.data;
        console.log(this.notifications);
        // Map the notifications to menu items
        const menuItems = this.notifications.map((notification) => ({
          label: notification.message,
          icon: "fas fa-exclamation-circle",
          command: () => {
            // Handle notification click event
          },
        }));

        // Add the menu items to the notifications menu
        this.items[0].items = menuItems;
      })
      .catch((error) => {
        console.error(error);
      });

      //getting unseen notifications count
    axios
      .post("http://localhost:8000/api/unseenStudentNotifNbr", {
        id: localStorage.getItem("id"),
      })
      .then((response) => {
        // Assign the notifications to the component's data property
        this.notificationsCount = response.data;
        console.log(this.notificationsCount);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>

.menu-width {
  width: 500px; /* Adjust the width as per your requirement */
}

.notification-label {
  font-weight: bold;
  color: #ff0000; /* example label style */
}

.notification-item {
  color: #333333; /* example item style */
}


</style>
