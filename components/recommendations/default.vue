<template>
  <div class="recommendations my-25 mob-cont">
    <div class="flex justify-between flex-wrap">
      <div class="title font-black text-base-4 mb-6">Рекомендации</div>
      <NuxtLink
        to="recommendations"
        class="font-normal text-secondary-2 text-base-2"
      >
        Все Рекомендации
      </NuxtLink>
    </div>

    <div class="grid grid-cols-3 xl:grid-cols-4 gap-8" v-if="loaded">
      <LoaderApi v-for="(_, id) in 8" type="promotion" :key="id" />
    </div>
    <div v-if="recomend.length > 1">
      <VueSlickCarousel
        v-bind="settings"
        ref="carousel"
        class="h-full flex w-full"
      >
        <Card
          v-for="recomend in recomend"
          type="recomendations"
          :key="recomend.id"
          :src="recomend.image"
          :id="recomend.id"
          list="Отель"
          :title="recomend.hotel_name"
          :estimate="recomend.mark"
          :price="recomend.price"
          :star="recomend.mark"
          class="w-full h-full"
        >
        </Card>
      </VueSlickCarousel>
      <div class="flex justify-between">
        <svg
          width="24"
          @click="showPrev"
          height="24"
          class="left-l icon sv-s left-0 cursor-pointer"
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
          class="right-r icon sv-s right-0 cursor-pointer"
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
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import { mapState, mapActions } from "vuex";
import LoaderApi from "../skeleteon/LoaderApi.vue";
export default {
  props: ["reviews"],
  computed: {
    ...mapState({
      recomend: (state) => state.api.recomend,
      loaded: (state) => state.api.loading.recomend,
    }),
  },
  data() {
    return {
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
      get_recomend: "api/get_page",
    }),
    async getRecommendations() {
      let payload = {
        request: `/Hotels/`,
        key: "recomend",
        body: [],
      };
      await this.get_recomend(payload);
    },
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
  mounted() {
    this.getRecommendations();
  },
  components: { LoaderApi, VueSlickCarousel },
};
</script>
<style scoped>
.left-l {
  transform: translateY(5px);
  left: 18px;
}
.right-r {
  transform: translateY(5px);
  right: 16px;
}

::v-deep .slick-list,
::v-deep .slick-track,
::v-deep .slick-slide {
  display: flex !important;
  background-color: none !important;
}
::v-deep .slick-track {
  display: flex !important;
  margin-bottom: 20px !important;
}
::v-deep .slick-dots li button {
  margin-top: 20px;
  background-color: #f0f0f0;
  height: 10px;
  width: 20px;
  border-radius: 15px;
}
::v-deep .slick-dots {
  margin-top: 20px;
}
::v-deep .slick-dots li.slick-active {
  width: 60px;
}
::v-deep .slick-dots li.slick-active button {
  background-color: #666;
  width: 60px;
}
::v-deep .slick-dots li button:before {
  content: "";
}
::v-deep .slick-track {
  display: flex;
}

::v-deep .slick-next {
  right: 0;
  z-index: -1000;
}
::v-deep .slick-prev {
  left: 0;
  z-index: -1000;
}
.cart {
  display: none;
}

@media screen and (min-width: 800px) and (max-width: 1100px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
  .cards div:last-child,
  .cards div:nth-child(6) {
    display: none;
  }
}
@media screen and (min-width: 500px) and (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .cards div:last-child,
  .cards div:nth-child(6),
  .cards div:nth-child(5),
  .cards div:nth-child(4) {
    display: none;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .cart {
    background-color: red;
    display: block;
  }
  .cards {
    grid-template-columns: 1fr;
  }

  .title {
    padding-left: 12px;
  }
}
</style>
