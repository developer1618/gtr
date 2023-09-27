<template>
  <div>
    <label class="font-medium"><slot /></label>
    <div class="relative mt-2">
      <div
        v-click-outside="hide"
        @click="toggle"
        :class="isOpened ? 'bg-yellow-1' : 'hover:bg-yellow-2'"
        class="select flex justify-between items-center gap-3 px-4 h-13 rounded cursor-pointer bg-secondary"
      >
        <div>
          {{ active }}
        </div>
        <img
          v-if="!isOpened"
          src="/images/icons/arrowDown.svg"
          alt="Arrow Down"
        />
        <img v-else src="/images/icons/arrowUp.svg" alt="Arrow Up" />
      </div>
      <div
        v-if="isOpened"
        class="variants absolute py-2 pl-4 w-full bg-white z-10"
      >
        <ul>
          <li
            class="py-1 cursor-poеinter hover:text-blue-1 cursor-pointer"
            v-for="(item, index) in variants"
            :key="index"
            @click="changeIcon(item)"
          >
            {{ item.value || item.country }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["active", "variants", "change"],
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    hide() {
      this.isOpened = false;
    },
    changeIcon(ind) {
      this.$emit("changeicon", ind.value || ind.country);
    },
    toggle() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>
