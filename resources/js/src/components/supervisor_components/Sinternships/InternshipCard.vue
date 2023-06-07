<template>
<router-link :to="`/internships/${defaultID}`">
      <div class="box-border bg-white rounded-lg p-2 hover:bg-gray-300 cursor-pointer mb-2">
        <div class="flex items-center max-md:flex-col">
          <img class="w-40 object-cover rounded-lg mr-4" :src="image" alt="Logo" />

          <div class="flex-col text-left max-md:text-center">
            <h2 class="text-xl font-bold underline text-primary pb-2">
               {{ title }}
            </h2>
            <div class="flex gap-1">
              <p class="text-gray-700"><i class="fas fa-map-marker-alt"></i> {{ address }}</p>
              <p class="text-gray-700"><i class="far fa-clock"></i> {{ duration }}</p>
              <p class="text-gray-700"><i class="far fa-calendar-alt"></i> {{ deadline }}</p>
            </div>
            <p class="text-gray-500 mt-1">{{ description }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </template>

  <script>
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    address: String,
    deadline: String,
    duration: String,
    specialty: String,
    description: String,
  },
  data() {
    return {
      defaultID: 99,
    };
  },
  methods: {},
};
</script>

