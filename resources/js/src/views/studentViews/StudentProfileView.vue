<template>
    <div>
        <ProfileForm />
    </div>
</template>

<script>

import ProfileForm from "../../components/student_components/profile/ProfileForm.vue";

import axios from "axios";

export default {
    name: "ProfileView",
    components: {
        ProfileForm,
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