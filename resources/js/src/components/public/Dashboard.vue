

<template>
  <div v-if="applied">
    <h1>You are applied you can view this</h1>
  </div>
</template>


<script>
export default {
  name: "Dashboard",
  props: ["applied"],
  methods: {},
};
</script>



<style scoped>
div {
  color: blue;
  border: 1px solid #eee;
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>