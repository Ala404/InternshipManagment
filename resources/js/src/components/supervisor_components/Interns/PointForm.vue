<template>
  <div class="max-w-lg mx-auto" :class="{'': isMarked}">

    <div v-if="isMarked" class="text-primary text-2xl font-bold my-32 w-full text-center m-0">
            you have already marked this student
        </div>

        <router-link v-if="isMarked" to="/interns" class="mx-auto" >
                <button
                  class="bg-gray-500 hover:bg-gray-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                >
                  Back
                </button>
           </router-link>
    <section v-if="!isMarked">

        <!--display msg that you have already marked this student-->





        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          @submit.prevent="submitForm"
        >
          <h2 class="text-2xl font-bold mb-4">Student Points</h2>
          <div class="mb-4" v-for="(label, index) in labels" :key="index">
            <label class="block text-gray-700 text-sm font-bold mb-2" :for="index">
              <i class="fa-solid fa-circle text-primary mr-2"></i>
              {{ label }}:
            </label>
            <select
              v-model="skills[label]"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :id="index"
            >
              <option v-for="point in skillPoints" :key="point" :value="point">
                {{ point }}
              </option>
            </select>
          </div>
          <div class="flex items-center justify-center gap-4">
            <button
              class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <i class="fa-solid fa-check text-white mr-2"></i> Submit
            </button>

            <!--back-->
           <router-link to="/interns" >
                <button
                  class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                >
                  <i class="fa-solid fa-arrow-left text-white mr-2"></i> Back
                </button>
           </router-link>
          </div>
        </form>
        <!-- success dialog -->
<transition class="scale-up">
  <div v-if="showSuccessDialog" class="success-popup fixed inset-0 flex items-center text-center justify-center z-50 bg-black bg-opacity-50">
        <div class="bg-white w-1/3 p-4 rounded shadow">

            <div>
              <i class="fa-solid fa-check text-green-500 text-6xl fa-bounce rounded-full border-2 border-green-500"></i>
            </div>

          <h2 class="text-lg font-medium mb-4">Success</h2>
          <p class="mb-4">Your request sent successfully</p>

          <div class="flex justify-end">
            <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="showSuccessDialog = false">OK</button>
          </div>
        </div>
      </div>
</transition>
    </section>
  </div>
</template>

  <script>
import axios from "axios";

export default {
  data() {
    return {
      skills: {
        // discipline: "",
        // attitude: "",
        // initiative: "",
        // capacite: "",
        // connaissance: "",
      },
      labels: [
        "General discipline and human relations",
        "Work skills and handling",
        "Initiative/Leadership",
        "Imagination skills and innovation",
        "Knowledge acquired in the internship field",
      ],
      skillPoints: [4, 3, 2, 1, 0],
          isMarked: false,
            showSuccessDialog: false,
    };
  },
  methods: {
    submitForm() {
      // You can add your logic here to handle the form submission
      console.log("Form submitted!");
      console.log("Skills:", this.skills);
      axios
        .post("http://localhost:8000/api/marquerNotes", {
              id: this.$route.params.id,

          discipline: parseInt(this.skills[this.labels[0]]),
          attitude:  parseInt(this.skills[this.labels[1]]),
          initiative:  parseInt(this.skills[this.labels[2]]),
          capacite:  parseInt(this.skills[this.labels[3]]),
          connaissance: parseInt(this.skills[this.labels[4]]),
        })
        .then((response) => {
              console.log(response);
              this.showSuccessDialog = true;
              setTimeout(() => {
                    this.showSuccessDialog = false;
                  this.$router.push("/interns");
                }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
      },
 async  created() {
    // check if a student has already pointed
   await axios
        .post("http://localhost:8000/api/checkMarks", {
          id: this.$route.params.id,

        })
        .then((response) => {
              console.log(response.data);
               if(response.data.length > 0){
                   this.isMarked = true;
               }


        })
        .catch((error) => {
          console.log(error);

        })




  },
};
</script>

  <style>
/* Add any custom styling for your form component here, using Tailwind CSS */
.scale-up-enter-active {
  animation: scale-up-enter 0.3s ease-out;
}

.scale-up-leave-active {
  animation: scale-up-leave 0.3s ease-out;
}

@keyframes scale-up-enter {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scale-up-leave {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
