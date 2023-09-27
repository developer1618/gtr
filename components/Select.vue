<template>
  <div class="relative" :class="secondClass && 'h-13'">
    <div v-if="label" :class="labelStyle">
      <label class="relative">{{ label }}</label>
    </div>
    <div
      v-click-outside="hide"
      @click="toggle"
      class="flex gap-x-4 justify-between h-full items-center rounded cursor-pointer px-3 xl:px-5"
      :class="
        isOpened ? 'bg-yellow-1' : 'hover:bg-yellow-2' + ' ' + secondClass
      "
    >
      <div v-if="src">
        <img :src="src" class="w-3.5 h-3.5" />
      </div>
      <div class="whitespace-nowrap mob-v">{{ active }}{{ value }}</div>
      <img
        v-if="!isOpened"
        src="/images/icons/arrowDown.svg"
        alt="Arrow Down"
      />
      <img v-else src="/images/icons/arrowUp.svg" alt="Arrow Up" />
    </div>
    <div
      v-if="isOpened"
      class="variants min-w-full absolute py-2 w-max bg-white"
    >
      <ul :class="val ? 'h-96 overflow-auto' : ''">
        <li
          class="py-1 cursor-pointer"
          v-for="(item, index) in list"
          :key="index"
          @click="changeIcon(item)"
        >
          <p class="px-2">{{ val ? item[val] : item.value }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpened: false,
      value: "",
    };
  },
  props: ["src", "active", "list", "secondClass", "label", "labelStyle", "val"],
  methods: {
    onChange() {},
    toggle() {
      this.isOpened = !this.isOpened;
    },
    changeIcon(ind) {
      console.log(ind);
      this.$emit("changeicon", this.val ? ind : ind.value);
    },
    hide() {
      this.isOpened = false;
    },
  },
  directives: {
    name: "ClickOutside",
  },
};
</script>
<style scoped>
li:hover {
  color: #417ced;
}
.variants {
  box-shadow: 20px 20px 120px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .mob-v {
    text-overflow: ellipsis;
    width: 180px;
    overflow: hidden;
  }
  .stand {
    width: 100%;
  }
}
</style>
