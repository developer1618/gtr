<template>
  <div
    class="w-full h-full fixed cost left-0 top-0 z-20 flex justify-center items-center"
    v-if="isSuccess"
  >
    <div
      class="shadow-3xl bg-white p-5 rounded text-lg flex justify-between items-center gap-3"
    >
      <span> Ваша заявка принято</span>
      <span>
        <svg
          width="40"
          height="40"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 50 50"
          xml:space="preserve"
        >
          <circle style="fill: #25ae88" cx="25" cy="25" r="25" />
          <polyline
            style="
              fill: none;
              stroke: #ffffff;
              stroke-width: 2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            points="
	38,15 22,33 12,25 "
          />
        </svg>
      </span>
      <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    </div>

    <!-- <div class="shadow-3xl bg-white p-5 rounded">
      <div
        class="flex justify-between items-center pb-3 border-b-1 gap-3"
        style="border-color: #dedede"
      >
        <h1 class="font-bold text-base-3">{{ title }}</h1>
        <svg
          width="28"
          height="28"
          class="cursor-pointer shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          @click="onCost"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29183 9.29183C9.38473 9.19871 9.49508 9.12482 9.61657 9.07441C9.73806 9.024 9.8683 8.99805 9.99983 8.99805C10.1314 8.99805 10.2616 9.024 10.3831 9.07441C10.5046 9.12482 10.6149 9.19871 10.7078 9.29183L15.9998 14.5858L21.2918 9.29183C21.3848 9.19886 21.4952 9.12511 21.6167 9.07479C21.7381 9.02447 21.8683 8.99857 21.9998 8.99857C22.1313 8.99857 22.2615 9.02447 22.383 9.07479C22.5045 9.12511 22.6149 9.19886 22.7078 9.29183C22.8008 9.38481 22.8746 9.49519 22.9249 9.61667C22.9752 9.73815 23.0011 9.86835 23.0011 9.99983C23.0011 10.1313 22.9752 10.2615 22.9249 10.383C22.8746 10.5045 22.8008 10.6149 22.7078 10.7078L17.4138 15.9998L22.7078 21.2918C22.8008 21.3848 22.8746 21.4952 22.9249 21.6167C22.9752 21.7381 23.0011 21.8683 23.0011 21.9998C23.0011 22.1313 22.9752 22.2615 22.9249 22.383C22.8746 22.5045 22.8008 22.6149 22.7078 22.7078C22.6149 22.8008 22.5045 22.8746 22.383 22.9249C22.2615 22.9752 22.1313 23.0011 21.9998 23.0011C21.8683 23.0011 21.7381 22.9752 21.6167 22.9249C21.4952 22.8746 21.3848 22.8008 21.2918 22.7078L15.9998 17.4138L10.7078 22.7078C10.6149 22.8008 10.5045 22.8746 10.383 22.9249C10.2615 22.9752 10.1313 23.0011 9.99983 23.0011C9.86835 23.0011 9.73815 22.9752 9.61667 22.9249C9.49519 22.8746 9.38481 22.8008 9.29183 22.7078C9.19886 22.6149 9.12511 22.5045 9.07479 22.383C9.02447 22.2615 8.99857 22.1313 8.99857 21.9998C8.99857 21.8683 9.02447 21.7381 9.07479 21.6167C9.12511 21.4952 9.19886 21.3848 9.29183 21.2918L14.5858 15.9998L9.29183 10.7078C9.19871 10.6149 9.12482 10.5046 9.07441 10.3831C9.024 10.2616 8.99805 10.1314 8.99805 9.99983C8.99805 9.8683 9.024 9.73806 9.07441 9.61657C9.12482 9.49508 9.19871 9.38473 9.29183 9.29183Z"
            fill="#999999"
          />
        </svg>
      </div>
      <div class="mt-3 flex flex-col gap-4">
        <div
          v-for="(card, id) in cards"
          :key="id"
          @click="onBuy()"
          class="flex cursor-pointer justify-between items-center"
        >
          <div class="font-semibold">{{ card.text }}</div>
          <img :src="card.url" :alt="card.title" />
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "Выберите способ оплаты",
      cards: [
        {
          text: "Корти Милли",
          url: "/images/logo 1.png",
        },
        {
          text: "Master Card",
          url: "/images/mastercard.png",
        },
        {
          text: "Visa",
          url: "/images/visa.png",
        },
        {
          text: "С баланса аккаунта",
          url: "/images/coin.png",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      isSuccess: (state) => state.api.isSuccess,
    }),
  },
};
</script>
<style scoped>
.cost {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
