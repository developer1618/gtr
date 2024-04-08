<template>
  <header class="header sm:px-0 flex justify-center w-full shadow-3xl relative">
    <modalAdaptive
      :isMenu="isMenu"
      @changeMenu="isMenu = false"
      @toShowEnter="isShowFormEnter = true"
      @toShowRegistr="isShowRegistration = true"
    />
    <svg style="display: none">
      <symbol id="arrowDown" viewBox="0 0 10 6">
        <path d="M5 5.5L10 0.5L0 0.5L5 5.5Z" />
      </symbol>
    </svg>
    <div
      class="xl:container md:container relative ls sm:container 2xl:container mob-cont px-4 sm:px-0 flex-row-reverse sm:flex-row flex justify-between items-center py-6 lg:relative gap-4 sm:gap-0"
    >
      <svg
        v-if="!isShowSearch"
        class="burger hidden cursor-pointer flex-shrink-0"
        width="28"
        @click="isMenu = true"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 14H24.5"
          stroke="#333333"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.5 7H24.5"
          stroke="#333333"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.5 21H24.5"
          stroke="#333333"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        @click="onClose"
        v-show="isShowSearch"
        style="fill: #666"
        class="w-8 h-8 text-base-4 cursor-pointer can"
      >
        <path
          d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
        ></path>
      </svg>
      <div class="flex w-full gap-0 sm:gap-3 items-center">
        <Logo class="log" />
        <Search @myInput="onSearch($event)" :search="headerInfo.search" />
        <Help :help="headerInfo.help" />
      </div>
      <Logo class="log-2" v-if="!isShowSearch" />
      <div class="justify-between items-center gap-2 sm:mx-0 hidden sm:flex">
        <div class="flex items-center gap-2 xl:gap-5 mob-dis mr-4">
          <!-- <Languages /> -->
          <Currencies :currencies="headerInfo.currencies" />
        </div>
      </div>
      <div class="buttons hidden sm:block" :class="isShowButtons ? 'show' : ''">
        <div
          class="partnerRegistrationButtons flex justify-between items-center gap-3"
        >
          <Button
            class="becomePartnerButton whitespace-nowrap"
            type="primary"
            url="/become-partner"
            secondClass="header px-2 md:px-6"
          >
            {{ headerInfo.becomePartnerButton }}
          </Button>
          <Button
            v-if="!user"
            @click="isShowFormEnter = true"
            type="secondary"
            :comp="true"
            secondClass="header px-2 md:px-6"
          >
            {{ headerInfo.registrationButton }}
          </Button>
          <div class="w-12 rounded-stand cursor-pointer" v-if="user">
            <NuxtLink to="/profile">
              <img
                class="w-full h-full rounded-full"
                :src="user?.photo !== null ? user.photo : `https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg`"
                alt="User photo"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <RegistrationDefault
        :registrationFormInfo="headerInfo.registrationFormInfo"
        v-if="isShowRegistration"
        @showFormEnter="showFormEnter"
        @click="closeForms"
      ></RegistrationDefault>
      <EnterDefault
        @openRegistationForm="openRegistationForm"
        @click="closeForms"
        ref="markdown"
        :isValidate="isValidate"
        v-if="isShowFormEnter"
      ></EnterDefault>
    </transition>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: null,
      isMenu: false,
      isShowRegistration: false,
      isValidate: null,
      isShowFormEnter: false,
      isShowButtons: false,
      isShowSearch: false,
      headerInfo: {
        registrationFormInfo: {
          title: "Регистрация",
          address: "Адрес электронной почты",
          password: "Пароль",
          agreement: {
            text: "Соглашаюсь с положениями разделов",
            firstLink: "  Условия пользования",
            secondLink: "Политика конфиденциальности",
          },
          firstButton: "Продолжить",
          name: "Имя",
          phone: "Телефон",
          country_id: "Страна",
          secondButton: "Зарегистрироваться",
          account: {
            text: "У меня есть аккаунт.",
            button: "Войти",
          },
        },
        search: {
          title: "Страны, города, отели",
          list: [
            {
              text: "Вакансии",
              link: "/vacancy",
            },
            {
              text: "О нас",
              link: "/aboutUs",
            },
            {
              text: "Новости",
              link: "/news",
            },
          ],
        },
        help: "Помощь",
        languages: {
          activeLang: "/images/icons/languages/en.svg",
        },
        currencies: {
          activeCurrencies: "USD",
          variants: [
            {
              id: 1,
              value: "USD",
            },
            {
              id: 2,
              value: "TJS",
            },
          ],
        },
        becomePartnerButton: "Стать партнером",
        registrationButton: "Войти",
        helpButton: "Помощь",
      },
    };
  },
  computed: {},
  methods: {
    onSearch() {
      this.isShowSearch = true;
      if (this.isShowSearch) {
        return;
      }
    },
    ...mapMutations({
      get_user: "api/SET_USER",
    }),
    showRegistrationForm() {
      this.isShowRegistration = !this.isShowRegistration;
      this.isShowFormEnter = false;
    },
    showFormEnter() {
      this.isShowRegistration = false;
      this.isShowFormEnter = !this.isShowFormEnter;
    },
    closeForms() {
      if (this.isShowFormEnter === false) {
        this.isShowRegistration = !this.isShowRegistration;
      }
      if (this.isShowFormEnter === true) {
        this.isShowRegistration = false;
        this.isShowFormEnter = false;
      } else {
        this.isShowRegistration = false;
        this.isShowFormEnter = false;
      }
    },
    hide() {
      this.isShowSearch = false;
    },
    openRegistationForm() {
      this.isShowRegistration = true;
      this.isShowFormEnter = false;
    },
    onClose() {
      this.isShowSearch = false;
    },
  },

  created() {
    setTimeout(() => {
      this.user = JSON.parse(localStorage.getItem("user"));
    }, 1000);
  },
};
</script>
<style scoped>
.header {
  height: 96px;
}

/* Burger Menu */

.search-form {
  box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
}

.log-2,
.can {
  display: none;
}
@media screen and (max-width: 1200px) {
  .search {
    left: 10%;
  }
  .h-wr {
    flex-wrap: wrap;
    gap: 15px;
  }
}
@media screen and (max-width: 790px) {
  .partnerRegistrationButtons > button,
  .partnerRegistrationButtons > a {
    padding: 0;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .search > div {
    max-width: 100%;
  }
  .search {
    left: 0;
    height: 900px;
    width: 100%;
  }
  .partnerRegistrationButtons,
  .log {
    display: none;
  }
  .log-2,
  .can {
    display: block;
  }
  .burger,
  .burger-cont {
    display: block;
  }
  .mob-dis {
    margin-right: 15px;
  }
}
</style>
