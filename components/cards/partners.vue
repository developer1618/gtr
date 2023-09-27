<template>
  <div class="card shadow-5xl py-3.5 px-7">
    <a :href="link">
      <img :src="src" class="mx-auto" />
    </a>
  </div>
</template>
<script>
export default {
  props: ["src", "link"],
};
</script>
<style scoped>
img {
  width: 193px;
  height: 104px;
}

@media screen and (min-width: 250px) and (max-width: 680px) {
  img {
    width: auto;
  }
}
</style>
