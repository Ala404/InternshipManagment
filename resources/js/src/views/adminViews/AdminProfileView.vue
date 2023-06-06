<template>
    <div>
        <router-link to="/admin-profile"><span class="absolute top-4 left-4 text-orange-600 text-lg font-semibold ">Notifications</span></router-link>

        <AdminProfileForm />
    </div>
</template>

<script>

import AdminProfileForm from "../../components/admin-components/admin_profile/AdminProfileForm.vue";

import axios from "axios";

export default {
    name: "ProfileView",
    components: {
        AdminProfileForm,
    },
    data() {
        return {
            profileData: []
        };
    },
    methods: {
        //getting data from database
        // getProfile() {
        //     axios
        //         .post("http://localhost:8000/api/consultStudentAccount",{
        //             id:2
        //         })
        //         .then((response) => {
        //             this.profileData = response.data;
        //             console.log(this.profileData)
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // },
    },

}
</script>

<style>

</style>