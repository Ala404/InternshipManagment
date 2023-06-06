<template>
  <div>
   <!-- <PointsRegister /> -->
   <PointsRegister v-for="(point, index) in points" :key="index" :class="index % 2 === 0 ? 'bg-gray-100' : ''"
   :discipline="point.discipline" :attitude="point.attitude" :initiative="point.initiative" :capacite="point.capacite"
    :connaissance="point.connaissance"  :note_totale="point.note_totale" />
   
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
          id: 1,
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

