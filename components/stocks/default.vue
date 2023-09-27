<template>
  <div class="stocks relative mt-25 mob-cont">
    <svg style="display: none">
      <symbol id="right" viewBox="0 0 20 10">
        <path
          d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
        />
      </symbol>
      <symbol id="left" viewBox="0 0 20 10">
        <path d="M3.83 4L6.41 1.41L5 0L0 5L5 10L6.41 8.59L3.83 6H20V4H3.83Z" />
      </symbol>
    </svg>
    <div class="flex justify-between">
      <div class="title font-black text-base-4">{{ stocks.title }}</div>
      <NuxtLink to="allStocks" class="font-normal text-secondary-2 text-base-2"
        >Все акции</NuxtLink
      >
    </div>
    <ListTour :lists="stocks.list" :toggle="list" @changename="list = $event" />
    <div class="flex justify-between gap-5 mb-5 loader-stock" v-if="loaded">
      <LoaderApi
        type="promotion"
        secondClass="w-72	pb-4"
        v-for="(_, id) in 4"
        :key="id"
      />
    </div>
    <div v-if="promotion.length > 0 && !loaded">
      <VueSlickCarousel v-bind="settings" ref="carousel" class="wr">
        <Card
          v-for="(num, ind) in promotion"
          :key="ind"
          type="stocks"
          class="zer-5"
          :src="num.image"
          :id="num.id"
          :promotion_type="num.promotion_type"
          :list="stocks.card.list"
          :promo="stocks.card.promo"
          :title="stocks.card.title"
          :description="num.promo_description"
        >
        </Card>
      </VueSlickCarousel>
    </div>
    <svg
      width="24"
      @click="showPrev"
      height="24"
      class="left-l icon absolute sv-s left-0 cursor-pointer"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z"
        fill="#333"
      />
    </svg>

    <svg
      @click="showNext"
      width="24"
      height="24"
      class="right-r icon absolute sv-s right-0 cursor-pointer"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1718 12.0002L8.2218 7.05017L9.6358 5.63617L15.9998 12.0002L9.6358 18.3642L8.2218 16.9502L13.1718 12.0002Z"
        fill="#333333"
      />
    </svg>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapState, mapActions } from "vuex";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import LoaderApi from "../skeleteon/LoaderApi.vue";
export default {
  props: ["stocks"],
  computed: {
    ...mapState({
      loaded: (state) => state.api.loading.promotion,
      promotion: (state) => state.api.promotion,
    }),
  },
  data() {
    return {
      list: "Все",
      settings: {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              autoplaySpeed: 5000,
              infinite: true,
              dots: true,
              autoplay: true,
              speed: 1000,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              autoplaySpeed: 5000,
              slidesToScroll: 3,
              dots: true,
              infinite: true,
              initialSlide: 2,
              autoplay: true,
              speed: 1000,
            },
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions({
      get_news: "api/get_page",
    }),
    async getPromotions() {
      let payload = {
        request: `/Promotions/`,
        key: "promotion",
        body: [],
      };
      await this.get_news(payload);
    },
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
  components: {
    VueSlickCarousel,
    LoaderApi,
  },
  mounted() {
    this.getPromotions();
  },
  watch: {
    async list(val) {
      let payload = {
        request: ``,
        key: "promotion",
        body: [],
      };
      switch (val) {
        case "Все":
          payload.request = "/Promotions/";
          await this.get_news(payload);
          break;
        case "Отели":
          payload.request = "/PromotionHotels/";
          await this.get_news(payload);
          break;
        case "Авиабилеты":
          payload.request = "/PromotionAirTickets/";
          await this.get_news(payload);
          break;
        case "Выездной туризм":
          payload.request = "/PromotionOutdoorTours/";
          await this.get_news(payload);
          break;
        case "Внутренний туризм":
          payload.request = "/PromotionIndoorTours/";
          await this.get_news(payload);
        default:
      }
    },
  },
};
</script>
<style scoped>
::v-deep .slick-track {
  margin-bottom: 20px !important;
}
::v-deep .slick-dots li button {
  background-color: #f0f0f0;
  height: 10px;
  width: 20px;
}
::v-deep .card-stocks {
  height: 350px;
}
::v-deep .slick-dots li.slick-active {
  width: 60px;
}
::v-deep .slick-dots li.slick-active button {
  background-color: #666;
  width: 60px;
  border-radius: 15px;
}
::v-deep .slick-dots li button {
  border-radius: 50px;
}
::v-deep .slick-dots li button:before {
  content: "";
}
::v-deep .slick-track {
  box-sizing: border-box;
  display: flex;
}

@media screen and (min-width: 250px) and (max-width: 680px) {
  .loader-stock > div:not(:first-child) {
    display: none;
  }
  .left-l {
    transform: translateY(5px);
    left: 18px;
  }
  .right-r {
    transform: translateY(5px);
    right: 16px;
  }
  .title {
    padding-left: 12px;
  }
}
</style>
