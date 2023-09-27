<template>
  <div>
    <NuxtLink
      v-if="url"
      class="button rounded text-xs xl:text-base-2.5 font-semibold h-12"
      :class="type + ' ' + secondClass"
      :to="url"
      tag="button"
    >
      <slot />
    </NuxtLink>
    <button
      v-else
      :type="action"
      :disabled="disabled"
      @click="$emit('click')"
      class="button rounded text-xs xl:text-base-2.5 font-semibold h-12"
      :class="type + ' ' + secondClass"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  props: ["type", "secondClass", "url", "action", "disabled"],
};
</script>
<style scoped>
.button:hover {
  transition: all 0.3s ease;
}
.button.secondary {
  background-color: #333;
  color: #fff;
}
.button.secondary:hover {
  background-color: #4c95ff;
}
.button.primary {
  border: 1px solid #333;
}
.button.primary:hover {
  color: #4c95ff;
  border: 1px solid #4c95ff;
}
.button.secondary.search {
  background-color: #333;
  color: #fff;
}
.button.secondary.search {
  min-width: 130px;
  height: 52px;
}
.button.secondary.search:hover {
  min-width: 130px;
  border: 1px solid #333;
}
.button.secondary.sign {
  width: 100%;
}
.button.secondary.sign:hover {
  background-color: #333;
  border: none;
}

@media screen and (min-width: 250px) and (max-width: 680px) {
  .zer {
    width: 100%;
  }
}
</style>
