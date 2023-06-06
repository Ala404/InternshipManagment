<template>
    <div>
        <SupervisorProfileForm />
    </div>
</template>

<script>

import SupervisorProfileForm from "@/components/supervisor_components/profile/SupervisorProfileForm.vue";

import axios from "axios";

export default {
    name: "ProfileView",
    components: {
        SupervisorProfileForm,
    },
    data() {
        return {
            profileData: []
        };
    },
    methods: {
  
    },

}
</script>

