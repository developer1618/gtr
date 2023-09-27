<template>
  <div class="pagination" :class="secondClass" v-if="totalPages > 1">
    <ul class="flex items-center gap-5">
      <svg
        @click="curPage !== 1 && $emit('onPrev')"
        :class="curPage === 1 ? 'cursor-auto' : 'cursor-pointer'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z"
          :fill="curPage <= 1 ? '#f0f0f0' : '#999999'"
        />
      </svg>

      <li
        @click="onPage(page)"
        v-for="(page, id) in totalPages"
        :key="id"
        class="cursor-pointer shadow-2xl text-center font-medium py-1.5 px-3 rounded"
        :class="
          curPage === page
            ? 'bg-yellow text-white active'
            : 'bg-white text-secondary-2'
        "
      >
        {{ page }}
      </li>
      <svg
        @click="curPage !== totalPages && $emit('onNext')"
        :class="curPage !== totalPages ? 'cursor-pointer' : 'cursor-auto'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.172 12L8.222 7.04999L9.636 5.63599L16 12L9.636 18.364L8.222 16.95L13.172 12Z"
          :fill="curPage >= totalPages ? '#f0f0f0' : '#999999'"
        />
      </svg>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["totalPages", "secondClass", "curPage"],
  data() {
    return {};
  },
  methods: {
    onPage(page) {
      this.$emit("onPage", page);
    },
  },
};
</script>
<style scoped>
.active {
  transform: scale(1.2);
  border-radius: 6px;
}
</style>
