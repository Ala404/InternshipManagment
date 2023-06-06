<template>
  <div>
    <!--filter label-->
    <span class="text-white text-base text-gray-600">Filter by:</span>
    <!--create a select element with a v-model of selectedFilter-->
    <select
      v-model="selectedFilter"
      class="px-3 py-2 rounded-md outline-none bg-primary text-white"
      ref=""
    >
      <!--loop through the filters array and create an option element for each filter-->
      <option
        v-for="filter in filters"
        :key="filter.value"
        :value="filter.value"
        class="bg-white text-gray-500 outline-none"
        selected="All internships"
      >
        {{ filter.label }}
      </option>
    </select>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isOpen: false,
      filters: [
        { label: "All Internships", value: "all" },
        { label: "Marketing", value: "marketing" },
        { label: "Engineering", value: "engineering" },
        { label: "Design", value: "design" },
        { label: "Finance", value: "finance" },
      ],
      selectedFilter: { label: "All Internships", value: "all" },
    };
  },

  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
      this.isOpen = false;

      // Emit an event with the selected filter value, so it can be used to filter the internships.
      this.$emit("filter-selected", filter.value);
    },
    // Close the dropdown when clicking outside of it.
    closeDropdown() {
      if (this.isOpen) {
        this.isOpen = false;
      }
    },
  },
};
</script>
  