<template>
  <div class="main">
    <Cost />

    <HeaderDefault />
    <div
      class="xl:container ls md:container sm:container 2xl:container mx-auto"
    >
      <Nuxt />
    </div>
    <FooterDefault />
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style scoped>
body {
  font-family: "Lato", sans-serif;
}

.title {
  color: red;
}
</style>
