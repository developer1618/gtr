<template>
  <div
    class="relative hidden sm:block"
    v-click-outside="hide"
    style="width: 50px"
  >
    <svg style="display: none">
      <symbol id="arrowDown" viewBox="0 0 10 6">
        <path d="M5 5.5L10 0.5L0 0.5L5 5.5Z" />
      </symbol>
    </svg>
    <div
      class="languages flex shrink-0 items-center gap-2 cursor-pointer"
      @click="openLanguages"
    >
      <img
        :src="'/images/icons/languages/' + language.activeLanguage + '.svg'"
        alt="Language Icon"
        class="w-6 h-4"
      />
      <svg class="icon w-3 h-3" :class="isActive ? 'active' : ''">
        <use xlink:href="#arrowDown"></use>
      </svg>
    </div>
    <div
      v-if="isActive"
      style="z-index: 1000"
      class="absolute top-4 left-0 pt-1 w-full bg-white"
    >
      <div class="border-1 border-solid border-secondary-2">
        <ul v-for="(language, index) in language.variants" :key="index">
          <li
            class="cursor-pointer py-2 hover:bg-secondary"
            @click="changeLang(language.lang), (isActive = false)"
          >
            <img :src="language.img" class="w-6 h-4 mx-auto" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      language: (state) => state.page.language,
    }),
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    ...mapMutations({
      changeLang: "page/SET_LANG",
    }),
    openLanguages() {
      this.isActive = !this.isActive;
    },
    hide() {
      this.isActive = false;
    },
    change(language) {
      this.languages.activeLang = language.img;
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
.languages:hover .icon {
  fill: #4c95ff;
}
</style>
