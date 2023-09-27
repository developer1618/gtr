<template>
  <div class="flex gap-2.5 items-center my-6">
    <NuxtLink to="/" class="text-base-1">
      {{ title }}
    </NuxtLink>
    <p class="text-base-1">></p>
    <NuxtLink class="text-base-1" to="/IndoorTours">
      {{ tours }}
    </NuxtLink>
    <p class="text-base-1">></p>
    <p class="text-base-1">
      {{ country }}
    </p>
  </div>
</template>
<script>
export default {
  name: "navbarTours",
  data() {
    return {
      title: "Главная",
      tours: "Выездные туры",
      country: "Турция",
    };
  },
};
</script>
<style scoped></style>
