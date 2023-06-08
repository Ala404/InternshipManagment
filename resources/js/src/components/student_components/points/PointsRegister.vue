<template>


<section class="flex justify-between items-center w-full flex-wrap bg-transparent">
          <div class="bg-white py-8 rounded-lg shadow-lg hover:text-white hover:bg-primary cursor-pointer">
            <!-- point as big number -->
            <i class="fas fa-user-graduate mx-auto w-full text-center text-5xl "></i>
            <h2 class="text-center text-4xl font-bold text-secondary mt-4">{{discipline}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">General discipline and human relations</p>
          </div>
          <div class="bg-white py-8 rounded-lg shadow-lg hover:text-white hover:bg-primary cursor-pointer">
            <!-- point as big number -->
            <i class="fas fa-briefcase mx-auto w-full text-center text-5xl"></i>
            <h2 class="text-center text-4xl font-bold text-secondary mt-4">{{attitude}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">Work skills and handling</p>
          </div>
          <div class="bg-white py-8 rounded-lg hover:text-white hover:bg-primary cursor-pointer">

            <!-- point as big number -->
            <i class="fas fa-lightbulb mx-auto w-full text-center text-5xl"></i>
            <h2 class="text-center text-4xl font-bold text-secondary mt-4">{{initiative}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">Initiative/Leadership</p>
          </div>
          <div class="bg-white py-8 rounded-lg  hover:text-white hover:bg-primary cursor-pointer">

            <!-- point as big number -->
            <i class="fas fa-brain mx-auto w-full text-center text-5xl"></i>
            <h2 class="text-center text-4xl font-bold text-secondary mt-4">{{capacite}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">Imagination skills and innovation</p>



          </div>
         <div class="mt-8 flex justify-between w-full">
            <div class="bg-white py-8 rounded-lg shadow-lg hover:text-white hover:bg-primary cursor-pointer">
              <!-- point as big number -->
              <i class="fas fa-book mx-auto w-full text-center text-5xl"></i>
              <h2 class="text-center text-4xl font-bold text-4xl text-secondary mt-4">{{connaissance}}</h2>
              <p class="text-center px-4 py-2 text-xl font-semibold">Knowledge acquired in the internship field</p>


            </div>
            <div class="bg-secondary rounded-lg py-8 shadow-lg cursor-pointer  px-4">
              <i class="fas fa-check-square mx-auto w-full text-center text-5xl"></i>
              <h2 class="text-center text-4xl font-bold  text-white ">{{ note_totale }}</h2>
              <p class="text-center px-4 py-2 text-lg font-medium text-white ">Total Point</p>

            </div>
         </div>
        </section>



</template>

<script>
export default {
  name: "PointsRegister",
  props: {

      discipline: Number,
      attitude: Number,
      initiative: Number,
      capacite: Number,
      connaissance: Number,
      note_totale: Number,

  },
    data() {
        return {
            notes: [4, 3, 2,1 , 0],


        };
  },
  computed: {
    //calculate the value of each property from  notes

  }

}
</script>

<style lang="scss" scoped>





</style>
