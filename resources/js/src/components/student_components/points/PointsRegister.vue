<template>
    
      <table class="w-full border-gray-300 border-2 table-auto mx-auto ">
        <thead>
        
          <tr class="bg-slate-100">
            <th class="border-gray-300 border-2 px-4 py-2"></th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Excellent</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Good</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Medium</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Insuffisant</th>
            <th class="border-gray-300 border-2 px-4 py-2 text-center bg-gray-300">Very Week</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="border-gray-300 border-2 px-4 py-2">General discipline and human relations</th>

            <td class="border-gray-300 border-2 px-4 py-2 text-center" v-for="note in notes" >{{ discipline === note? discipline:0 }}</td>
          </tr>
          <tr class="bg-slate-100">
            <th class="border-gray-300 border-2 px-4 py-2">Work skills and handling</th>

            <td class="border-gray-300 border-2 px-4 py-2 text-center" v-for="note in notes" >{{ attitude === note ? attitude : 0 }}</td>
          </tr>
          <tr>
            <th class="border-gray-300 border-2 px-4 py-2">Initiative/Leadership</th>

            <td class="border-gray-300 border-2 px-4 py-2 text-center" v-for="note in notes" >{{ initiative ===note? initiative:0 }}</td>
          </tr>
          <tr class="bg-slate-100">
            <th class="border-gray-300 border-2 px-4 py-2">Imagination skills and innovation</th>

            <td class="border-gray-300 border-2 px-4 py-2 text-center" v-for="note in notes" >{{ capacite === note ? capacite:0 }}</td>
            
            
          </tr>
          <tr>
            <th class="border-gray-300 border-2 px-4 py-2">Knowledge acquired in the internship field</th>

            <td class="border-gray-300 border-2 px-4 py-2 text-center" v-for="note in notes" >{{ connaissance === note ? connaissance:0 }}</td>

          </tr>
          <tr class="bg-primary">
            <th class="border-gray-300 border-2 px-4 py-2">Total Point</th>
            <td class="text-center">{{ note_totale }}</td>
          </tr>
        </tbody>
        </table>
    
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

<style>

</style>
