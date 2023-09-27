<template>
  <transition name="slide">
    <div
      :class="isMenu ? 'act' : ''"
      class="burger-cont w-full block sm:hidden fixed top-0"
      v-if="isMenu"
    >
      <div class="burger-menu h-full pt-2 px-5 bg-white">
        <div>
          <div class="float-right mb-5">
            <svg
              width="32"
              height="32"
              class="cursor-pointer shrink-0"
              viewBox="0 0 32 32"
              fill="none"
              @click="changeMenu"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.29183 9.29183C9.38473 9.19871 9.49508 9.12482 9.61657 9.07441C9.73806 9.024 9.8683 8.99805 9.99983 8.99805C10.1314 8.99805 10.2616 9.024 10.3831 9.07441C10.5046 9.12482 10.6149 9.19871 10.7078 9.29183L15.9998 14.5858L21.2918 9.29183C21.3848 9.19886 21.4952 9.12511 21.6167 9.07479C21.7381 9.02447 21.8683 8.99857 21.9998 8.99857C22.1313 8.99857 22.2615 9.02447 22.383 9.07479C22.5045 9.12511 22.6149 9.19886 22.7078 9.29183C22.8008 9.38481 22.8746 9.49519 22.9249 9.61667C22.9752 9.73815 23.0011 9.86835 23.0011 9.99983C23.0011 10.1313 22.9752 10.2615 22.9249 10.383C22.8746 10.5045 22.8008 10.6149 22.7078 10.7078L17.4138 15.9998L22.7078 21.2918C22.8008 21.3848 22.8746 21.4952 22.9249 21.6167C22.9752 21.7381 23.0011 21.8683 23.0011 21.9998C23.0011 22.1313 22.9752 22.2615 22.9249 22.383C22.8746 22.5045 22.8008 22.6149 22.7078 22.7078C22.6149 22.8008 22.5045 22.8746 22.383 22.9249C22.2615 22.9752 22.1313 23.0011 21.9998 23.0011C21.8683 23.0011 21.7381 22.9752 21.6167 22.9249C21.4952 22.8746 21.3848 22.8008 21.2918 22.7078L15.9998 17.4138L10.7078 22.7078C10.6149 22.8008 10.5045 22.8746 10.383 22.9249C10.2615 22.9752 10.1313 23.0011 9.99983 23.0011C9.86835 23.0011 9.73815 22.9752 9.61667 22.9249C9.49519 22.8746 9.38481 22.8008 9.29183 22.7078C9.19886 22.6149 9.12511 22.5045 9.07479 22.383C9.02447 22.2615 8.99857 22.1313 8.99857 21.9998C8.99857 21.8683 9.02447 21.7381 9.07479 21.6167C9.12511 21.4952 9.19886 21.3848 9.29183 21.2918L14.5858 15.9998L9.29183 10.7078C9.19871 10.6149 9.12482 10.5046 9.07441 10.3831C9.024 10.2616 8.99805 10.1314 8.99805 9.99983C8.99805 9.8683 9.024 9.73806 9.07441 9.61657C9.12482 9.49508 9.19871 9.38473 9.29183 9.29183Z"
                fill="#999999"
              />
            </svg>
          </div>
          <div class="mb-4">
            <Button
              @click="toShowEnter"
              type="secondary"
              secondClass="w-full"
              class="mb-3"
            >
              Войти
            </Button>
            <Button @click="toShowRegistr" type="primary" secondClass="w-full">
              Регистрация
            </Button>
          </div>
          <ul class="list-mob">
            <li class="mob-lang font-medium text-base">
              <div
                class="flex justify-between select-none"
                @click="isLang = !isLang"
              >
                <div>Язык</div>
                <div class="flex items-center gap-x-3">
                  <div style="color: #417ced">{{ getActive[0].text }}</div>
                  <img :src="getActive[0].img" alt="Language" />
                </div>
              </div>
              <div
                v-for="(lang, i) in language.variants"
                :key="i"
                class="mt-5 select-none"
                v-if="isLang"
                @click="changeLang(lang.lang)"
              >
                <div class="flex items-center gap-x-3">
                  <img :src="lang.img" :alt="lang.text" />
                  <p
                    :style="{
                      color:
                        getActive[0].text === lang.text ? '#417CED' : '#666',
                    }"
                    class="text-sm"
                  >
                    {{ lang.text }}
                  </p>
                </div>
              </div>
            </li>
            <li class="font-medium text-base">
              <div
                class="flex justify-between select-none"
                @click="isCur = !isCur"
              >
                <div>Валюта</div>
                <div>
                  <div style="color: #417ced">
                    {{ currency.activeCurrency }}
                  </div>
                </div>
              </div>
              <div v-if="isCur">
                <div
                  v-for="(cur, i) in currency.variants"
                  :key="i"
                  class="mt-3 select-none"
                  @click="changeCur(cur.value)"
                  :style="{
                    color:
                      currency.activeCurrency === cur.value
                        ? '#417CED'
                        : '#666',
                  }"
                >
                  {{ cur.value }}
                </div>
              </div>
            </li>
            <li class="font-medium text-base" v-for="link in links">
              <NuxtLink :to="link.url" @click="isMenu = false">
                <div>{{ link.text }}</div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["isMenu"],
  computed: {
    ...mapState({
      language: (state) => state.page.language,
      currency: (state) => state.page.currency,
    }),
    getActive() {
      return this.language.variants.filter(
        (lang) => lang.lang === this.language.activeLanguage
      );
    },
  },
  data() {
    return {
      mobId: 1,
      curId: 0,
      isCur: false,
      isLang: false,
      links: [
        {
          text: "Стать партнером",
          url: "/become-partner",
        },
        {
          text: "Помощь",
          url: "/FAQ",
        },
      ],
    };
  },
  methods: {
    ...mapMutations({
      changeLang: "page/SET_LANG",
      changeCur: "page/SET_CUR",
    }),
    changeMenu() {
      this.$emit("changeMenu", false);
    },
    toShowEnter() {
      this.$emit("toShowEnter", true);
    },
    toShowRegistr() {
      this.$emit("toShowRegistr", true);
    },
  },
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}
.burger-cont {
  opacity: 0;
  transition: 0.4s ease-in-out;
  height: 100vh;
  z-index: 1000000;
  background: #0000006e;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 0.5s ease-in 0s;
}
.act {
  animation: zer 0.7s alternate forwards linear;
}
.burger-menu {
  width: 260px;
}
.list-mob > li {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
  margin-bottom: 12px;
}
.list-mob > li:last-child {
  border: none;
}
@keyframes zer {
  to {
    opacity: 1;
  }
}
</style>
