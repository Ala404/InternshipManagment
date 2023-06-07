<template>
  <div class="max-w-lg mx-auto">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="submitForm"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
          <i class="fas fa-calendar-alt"></i> Date
        </label>
        <input
          v-model="date"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          placeholder="Enter date"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="startHour"
        >
          <i class="fas fa-clock"></i> Start Hour
        </label>
        <input
          v-model="startHour"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="startHour"
          type="time"
          placeholder="Enter start hour"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="finishingHour"
        >
          <i class="fas fa-clock"></i> Finishing Hour
        </label>
        <input
          v-model="finishingHour"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="finishingHour"
          type="time"
          placeholder="Enter finishing hour"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="notes">
            <i class="fas fa-sticky-note"></i> Notes
        </label>
        <textarea
          v-model="notes"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="notes"
          placeholder="Enter notes"
        ></textarea>
      </div>
      <div class="flex items-center justify-center gap-4">
        <button
          class="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          <i class="fas fa-paper-plane"></i> Send
        </button>

          <!--back-->
       <router-link to="/interns" >
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

            >
                <i class="fas fa-arrow-left"></i> Back
            </button>
       </router-link>
      </div>
    </form>
    <!-- success dialog -->
<transition name="scale-up">
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
  </div>
</template>

  <script>
import axios from "axios";
export default {
  data() {
    return {
      date: "",
      startHour: "",
      finishingHour: "",
          notes: "",
        showSuccessDialog: false,
    };
  },
  methods: {
    submitForm() {
      // You can add your logic here to handle the form submission
      console.log("Form submitted!");
      console.log("Date:", this.date);
      console.log("Start Hour:", this.startHour);
      console.log("Finishing Hour:", this.finishingHour);
      console.log("Notes:", this.notes);
            axios
          .post("http://localhost:8000/api/marquerPresence", {
        id: this.$route.params.id,
        date: this.date,
        heureE: this.startHour,
        heureS: this.finishingHour,
        remarque: this.notes,
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
      mounted() {
    // console.log(this.$route.params.id);

  },
};
</script>

  <style>
/* Add any custom styling for your form component here, using Tailwind CSS */
</style>
