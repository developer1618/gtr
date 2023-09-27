<template>
  <p :style="{ color: isColor ? 'red' : '' }">{{ text }}</p>
</template>
<script>
export default {
  props: ["text", "isColor"],
};
</script>
