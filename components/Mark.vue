<template>
  <div
    @click="toMark"
    class="mark-com flex items-center justify-center cursor-pointer"
    :class="secondClass + ' ' + (!secondClass && 'bg-stand')"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["secondClass"],
  data() {
    return {};
  },
  methods: {
    toMark() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.mark-com {
  max-height: 60px;
  border-radius: 4px;
}
</style>
