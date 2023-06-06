<template>
  <div
    class="box-border bg-white rounded-lg p-2 hover:bg-gray-300 cursor-pointer mb-2"
  >
    <div class="flex items-start max-md:flex-col max-md:gap-8">


      <div class="flex justify-between items-center text-left max-md:text-center w-full max-md:flex-col max-md:gap-8">
        <img
        class=" w-24 object-cover self-center rounded-lg mr-4 "
        :src="image"
        alt="Company Logo"
      />
        <span class="flex justify-between items-center  w-1/2 max-md:flex-col max-md:gap-8">
          <h2 class="text-xl font-bold underline text-primary pb-2">
            {{ title }}
          </h2>
          <!--application status icon -->
          <span class="flex gap-1 mr-28">
            <i
              v-if="status == 'accepted'"
              class="fa-solid fa-circle-check text-green-500 text-3xl "
            ></i>
            <i
              v-if="status == 'pending'"
              class="fa-solid fa-clock text-orange-500 text-3xl mr-12"
            ></i>
            <i
              v-if="status == 'refused'"
              class="fa-solid fa-circle-xmark text-red-500 text-3xl ml-56"
            ></i>
          </span>
        </span>

        <div class="flex gap-3">



            <!-- <i v-if="status == 'accepted'" class="fa fa-thumb-tack text-xl p-3 my-2 mx-4 bg-white  rounded-full text-primary border-primary hover:bg-primary hover:text-white transition-all"></i> -->



          <router-link :to="`/applications/${id}`">
        <i v-if="status == 'refused' || status == 'pending'" class="fa-solid fa-pen-to-square p-3 my-2 mx-4 bg-white border-2 rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-all "></i>




        </router-link>

            <i @click="deleteApplication" v-if="status == 'refused'  || status == 'pending'" class="fa-solid fa-trash p-3 my-2 mx-4 bg-white border-2 rounded-full text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition-all"></i>

            <!-- show a clerefication icon if refused-->



            <i @click="showclearfi = true" v-if="status == 'refused'" class="fa-solid fa-triangle-exclamation p-3 my-2 mx-4 bg-white border-2 rounded-full text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all"></i>


        </div>
      </div>
    </div>
    <transition class="scale-up">
  <div v-if="showclearfi" class="success-popup fixed inset-0 flex items-center text-center justify-center z-50 bg-black bg-opacity-50">
        <div class="bg-white w-1/3 p-4 rounded shadow">

          <h2 class="text-lg font-medium mb-4">Clearification</h2>
          <p class="mb-4">{{motif}}</p>

          <div class="flex justify-end">
            <button class="bg-primary text-white px-4 py-2 rounded font-medium" @click="showclearfi = false">OK</button>
          </div>
        </div>
      </div>
</transition>
  </div>
</template>

      <script>
import axios from "axios";
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    address: String,
    deadline: String,
    duration: String,
    specialty: String,

    startDate: String,
    endDate: String,
    chefStatus: String,
    supervisorStatus: String,
              status: String,
              motif: String,
  },
  data() {
    return {
      //temp data
      showclearfi: false
    };
  },
  methods: {


     deleteApplication() {
      console.log(this.id);
      axios
        .post("http://localhost:8000/api/deleteDemande", {
          id:this.id,
        })
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        }).catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    return {
      //temp data

    // deleteApplication() {
    //   axios
    //     .delete("http://localhost:8000/api/deleteDemande", {
    //       id: this.id,
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //       window.location.reload();
    //     });
    //         },
    };
  },
};
</script>


<style scoped>

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
