<template>
  <div class="bg-white shadow rounded-full px-1 mb-2">
    <div class="flex items-center p-2 justify-between w-full">
      <img
        :src="profilePic"
        alt="Pic"
        class=" h-12 object-cover rounded-full"
      />

        <span>
          <h2 class="text-md font-bold"> <i class="fas fa-user mr-2"></i> {{ firstName }} {{ lastName }}</h2>
        </span>
        <span
          ><p class="text-white bg-orange-500 rounded-full text-center pt-1 h-8 w-8">{{ finalPoints }}</p>
          </span>

    </div>
  </div>
</template>

  <script>
export default {
  props: {
    profilePic: String,
    firstName: String,
    lastName: String,
    finalPoints: Number,
  },
};
</script>


