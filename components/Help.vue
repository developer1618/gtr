<template>
  <div class="hidden sm:block">
    <NuxtLink
      to="/FAQ"
      class="text-xs xl:text-base-3.5 font-medium md:block mr-3 xl:mr-0"
    >
      {{ help }}
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: ["help"],
};
</script>
<style scoped>
a:hover {
  color: rgba(14, 165, 233, 0.5);
}
</style>
