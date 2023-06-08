<template>

        <!-- <thead>

          <tr class="bg-slate-100">
            <th class="border-gray-300 border-2 px-4 py-2"></th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Excellent</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Good</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Medium</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Insuffisant</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Very Week</th>
          </tr>
        </thead> -->
        <section class="flex justify-between items-center w-full flex-wrap bg-transparent">
          <div class="bg-white py-8 rounded-lg shadow-lg hover:text-white hover:bg-primary cursor-pointer">
            <!-- point as big number -->
            <h2 class=" text-center text-4xl font-bold text-secondary ">{{discipline}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">General discipline and human relations</p>

          </div>
          <div class="bg-white py-8 rounded-lg shadow-lg hover:text-white hover:bg-primary cursor-pointer">
            <!-- point as big number -->
            <h2 class="text-4xl text-center font-bold text-secondary">{{attitude}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">Work skills and handling</p>

          </div>
          <div class="bg-white py-8 rounded-lg shadow-lg hover:text-white hover:bg-primary cursor-pointer">

            <!-- point as big number -->
            <h2 class="text-4xl text-center font-bold text-secondary">{{initiative}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">Initiative/Leadership</p>

          </div>
          <div class="bg-white py-8 rounded-lg shadow-lg  hover:text-white hover:bg-primary cursor-pointer">

            <!-- point as big number -->
            <h2 class="text-4xl text-center font-bold text-secondary">{{capacite}}</h2>
            <p class="text-center px-4 py-2 text-xl font-semibold">Imagination skills and innovation</p>



          </div>
         <div class="mt-8 flex justify-between w-full">
            <div class="bg-white py-8 rounded-lg shadow-lg hover:text-white hover:bg-primary cursor-pointer">
              <!-- point as big number -->
              <h2 class="text-4xl text-center font-bold text-secondary">{{connaissance}}</h2>
              <div class="text-center px-4 py-2 text-xl font-semibold">Knowledge acquired in the internship field</div>


            </div>
            <div class="bg-secondary rounded-lg py-8 shadow-lg cursor-pointer hover:text-secondary">
              <h2 class="text-center font-bold text-3xl text-white ">{{ note_totale }}</h2>
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
