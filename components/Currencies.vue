<template>
  <div v-click-outside="hide" class="relative hidden sm:block">
    <div
      class="currencies flex items-center gap-1.5 cursor-pointer text-base-2 font-medium"
      @click="openCurrencies"
    >
      <svg style="display: none">
        <symbol id="arrowDown" viewBox="0 0 10 6">
          <path d="M5 5.5L10 0.5L0 0.5L5 5.5Z" />
        </symbol>
      </svg>
      <p class="text-xs xl:text-base">
        {{ currency.activeCurrency }}
      </p>
      <svg class="icon w-3 h-3" :class="isActive ? 'active' : ''">
        <use xlink:href="#arrowDown"></use>
      </svg>
    </div>
    <div
      v-if="isActive"
      class="absolute top-4 left-0 pt-1 w-full bg-white"
      style="z-index: 1000"
    >
      <div class="border-1 border-solid border-secondary-2">
        <div
          v-for="(currency, index) in currency.variants"
          :key="index"
          class="cursor-pointer hover:bg-secondary p-1 text-center"
        >
          <p
            @click="changeCur(currency.value), (isActive = false)"
            class="text-xs xl:text-base"
          >
            {{ currency.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      currency: (state) => state.page.currency,
    }),
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    ...mapMutations({
      changeCur: "page/SET_CUR",
    }),
    openCurrencies() {
      this.isActive = !this.isActive;
    },
    hide() {
      this.isActive = false;
    },
    changeCurrency(item) {
      this.active = item.value;
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
.icon {
  fill: #333;
}
.icon.active {
  fill: #4c95ff;
}
.currencies:hover p {
  color: #4c95ff;
}
.currencies:hover .icon {
  fill: #4c95ff;
}
</style>
