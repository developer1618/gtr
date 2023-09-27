<template>
  <span
    class="skeleton-box inline-block"
    :style="{ width: width, height: height }"
    :class="secondClass"
  ></span>
</template>
<script>
export default {
  props: ["width", "height", "secondClass"],
};
</script>
<style>
.skeleton-box {
  position: relative;
  background-color: #dddbdd;
}
</style>
