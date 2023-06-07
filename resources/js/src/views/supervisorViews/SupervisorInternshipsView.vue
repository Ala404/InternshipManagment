<template>
<div class=" relative ">
    <div class=" absolute right-32 -top-10 ">
        <Filter></Filter>
    </div>
  
  <!--Cards-->
  
     <div class="px-32 max-sm:p-0">
        <!--default card-->
     
                <InternshipCard @click="getIntership"  :to="`/internship-modif/${internship.id_offre}`" v-for="internship in internships" :key="internship.id_offre"
                :id="internship.id_offre"
                :image="companiesImages[Math.floor(Math.random() * companiesImages.length)]"
                :title="internship.theme"
                :deadline="internship.deadline" 
                :duration="internship.duree" 
                :description="internship.description"
                :address="internship.addresse_entreprise"
                />
        
            
            

     </div>  

 
  <!--add floating rounded button usnig before pseudo element-->

    <router-link to="/new-internship">
        <div class="fixed bottom-0 right-0 mb-4 mr-4" @click="showNewInternshipForm">
            <button
            class="bg-primary hover:bg-cyan-700 text-white font-bold  rounded-full w-16 h-16 flex items-center justify-center"
            >
            <svg
                class="w-14 h-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
            </svg>
            </button>
        </div>
    </router-link >

</div>

</template>

<script>
import axios from "axios";
import InternshipCard from "../../components/supervisor_components/Sinternships/InternshipCard.vue";
import Filter from "../../components/student_components/internship/Filter.vue";




export default {
    name: "InternshipsView",
    components: {
        InternshipCard,
        Filter,

    },
    data() {
        return {
            
            internships: [],
            showOfferForm: false,
            internship: {},
            companiesImages: [
        'http://www.ooredoo.dz/Ooredoo/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobnocache=false&blobtable=MungoBlobs&blobwhere=1464606283207&ssbinary=true',

    ],
            
        }

    },
    components: {
        InternshipCard,
    },
    methods: {
        getIntership(){
                   console.log(this.internship);

    }

    },
    mounted() {
        axios
            .get("http://localhost:8000/api/consultOffersList")
            .then((response) => {
                this.internships = response.data;
                console.log(this.internships);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    
    
    
}
</script>

