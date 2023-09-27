<template>
  <div :type="type" class="zer zer-inp">
    <div v-if="type === 'arrows'" class="w-11 flex justify-center">
      <button
        type="button"
        @click="$emit('arrow')"
        class="bg-secondary w-full rounded h-13 zer mx-auto"
      >
        <img
          src="/images/icons/arrows.svg"
          alt="Arrows"
          class="zer m-auto arr"
        />
      </button>
    </div>
    <div v-if="type === 'text'" class="bg-secondary px-3 rounded h-13 w-max">
      <p class="font-semibold text-base-1 pt-1/4">
        {{ arrows }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type"],

  computed: {
    arrows() {
      return this.$store.state.arrows.arrows;
    },
  },
};
</script>
<style>
@media screen and (max-width: 1280px) {
  .arr {
    max-width: 50px;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .arr {
    width: 30px;
  }
  .zer-inp {
    width: auto;
  }
}
@media screen and (max-width: 380px) {
  .zer-inp img {
    width: 50px;
  }
}
</style>
