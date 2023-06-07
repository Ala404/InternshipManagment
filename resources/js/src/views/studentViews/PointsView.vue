<template>
  <div>
   <!-- <PointsRegister /> -->
   <PointsRegister v-for="(point, index) in points" :key="index" :class="index % 2 === 0 ? 'bg-gray-100' : ''"
   :discipline="point.discipline" :attitude="point.attitude" :initiative="point.initiative" :capacite="point.capacite"
    :connaissance="point.connaissance"  :note_totale="point.note_totale" />


    <!-- display empty icon if no points -->
    <div v-if="points.length === 0" class="flex justify-center items-center h-64">
      <div class="flex flex-col items-center">
        <i class="fas fa-3x fa-star text-secondary"></i>
        <p class="text-gray-500">No points yet</p>
      </div>
    </div>
  </div>
</template>

<script>

import PointsRegister from '../../components/student_components/points/PointsRegister.vue'
import axios from 'axios'

export default {
  name: "PointsView",
  components: {
    PointsRegister
  },
  data() {
    return {
      points: [
        {
          discipline: Number,
          attitude: Number,
          initiative: Number,
          capacite: Number,
          connaissance: Number,
          note_totale: Number,
        },

      ],
    }
  }, created() {
    this.getPoints();
  },
  methods: {
    getPoints() {
      axios
        .post("http://127.0.0.1:8000/api/checkMarks", {
          id: localStorage.getItem("id"),
        }).then((response) => {
          this.points = response.data;
          console.log("working");
          console.log(this.points);
        }).catch((error) => {
          console.log(error);
        });


    }
  }
}
</script>

