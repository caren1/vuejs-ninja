<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ active: currentFilter === 'all' }"
    >
      View all
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: currentFilter === 'completed' }"
    >
      Show completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: currentFilter === 'ongoing' }"
    >
      Show ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["currentFilter"],
  methods: {
    updateFilter(filter) {
      this.$emit("filterChange", filter);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  outline: none;
  color: #bbb;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button:hover {
  color: green;
  transition: all 0.1s ease-in;
}

.filter-nav button.active {
  color: green;
}
</style>
