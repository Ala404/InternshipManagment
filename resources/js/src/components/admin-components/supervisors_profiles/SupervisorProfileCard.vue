<template>
  <div
    class="flex justify-between bg-white rounded-full overflow-hidden shadow-md m-2"
  >
    <img
      :src="profilePictureUrl"
      alt="profilePictur"
      class="m-2 h-12 object-cover rounded-full"
    />
    <div class="p-4">
      <h2 class="text-lg font-bold">{{ firstName }} {{ lastName }}</h2>
    </div>
    <router-link :to="`/supervisor-profile-info/${id}`">
      <i
        class="fa-solid fa-pen-to-square p-3 my-2 mx-4 bg-white border-2 rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-all"
      ></i>
    </router-link>
  </div>
</template>
  
  <script>
export default {
  props: {
    id: String,
    firstName: String,
    lastName: String,
    profilePictureUrl: String,
  },
};
</script>
  
  <style>
/* Add any custom styling for your card component here, using Tailwind CSS */
</style>
  