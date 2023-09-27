<template>
  <NuxtLink :to="link"
    ><div class="btn flex justify-center items-center" :class="secondClass">
      <slot /></div
  ></NuxtLink>
</template>
<script>
export default {
  props: ["link", "secondClass"],
};
</script>
<style scoped>
.btn {
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  margin: auto;
  background: #333333;
  width: 163px;
  height: 52px;
}
.btn:hover {
  transition: 0.5s;
  background-color: #0384c6;
}
@media screen and (max-width: 800px) {
  .btn {
    width: 70px;
    font-size: 12px;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .btn {
    width: 100px;
    font-size: 14px;
  }
}
</style>
