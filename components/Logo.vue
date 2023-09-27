<template>
  <NuxtLink to="/" class="">
    <img src="/logo.png" alt="Logo" width="48" height="48" />
  </NuxtLink>
</template>

<style scoped>
@media screen and (min-width: 250px) {
  img {
    min-width: 3rem;
    min-height: 3rem;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  a {
    order: 2;
  }
}
</style>
