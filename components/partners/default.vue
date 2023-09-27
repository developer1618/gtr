<template>
  <div class="partners relative my-25 mob-cont">
    <div class="title font-black text-base-4 mb-6">Партнеры</div>
    <div class="loader-partner flex justify-between" v-if="loaded">
      <LoaderApi type="partners" v-for="(_, id) in 6" :key="id" />
    </div>

    <div v-if="partners.length > 1">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <CardsPartners
          :src="num.image"
          :link="num.url"
          v-for="num in partners"
          :key="num.id"
        ></CardsPartners>
      </VueSlickCarousel>
      <svg
        width="24"
        @click="showPrev"
        height="24"
        class="left-l icon sv-s absolute left-0 cursor-pointer"
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
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import { mapActions, mapState } from "vuex";
import LoaderApi from "../skeleteon/LoaderApi.vue";
export default {
  computed: {
    ...mapState({
      partners: (state) => state.api.partners,
      loaded: (state) => state.api.loading.partners,
    }),
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              autoplay: true,
              slidesToShow: 4,
              autoplaySpeed: 5000,
              slidesToScroll: 2,
              infinite: true,
              speed: 1000,

              dots: true,
              initialSlide: 0,
            },
          },
          {
            breakpoint: 680,
            settings: {
              autoplay: true,
              autoplaySpeed: 5000,
              infinite: true,
              slidesToShow: 2,
              speed: 1000,
              slidesToScroll: 3,
              initialSlide: 0,
            },
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions({
      get_partners: "api/get_page",
    }),
    async getPartners() {
      let payload = {
        request: `/Partners/`,
        key: "partners",
        body: [],
      };
      await this.get_partners(payload);
    },
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
  mounted() {
    this.getPartners();
  },
  components: {
    VueSlickCarousel,
    LoaderApi,
  },
};
</script>
<style scoped>
::v-deep .slick-list,
::v-deep .slick-track,
::v-deep .slick-slide {
  background-color: none !important;
}
::v-deep .slick-track {
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
  top: 112px;
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
  gap: 2rem;
}
::v-deep .slick-slide:first-child {
  margin-left: -33px;
}
::v-deep .slick-next {
  right: 0;
  z-index: -1000;
}
::v-deep .slick-prev {
  left: 0;
  z-index: -1000;
}
.sv-s {
  top: 200px;
}
@media screen and (min-width: 250px) and (max-width: 500px) {
  ::v-deep .slick-list {
    width: 100%;
  }
  ::v-deep .slick-dots {
    overflow: hidden;
    width: 181px;
    left: 125px;
  }
  .title {
    padding-left: 12px;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .loader-partner > div:not(:first-child):not(:nth-child(2)) {
    display: none;
  }
  ::v-deep .slick-dots {
    height: 35px;
  }
  .left-l {
    left: 19px;
  }
  .right-r {
    right: 19px;
  }
}
@media screen and (max-width: 400px) {
  ::v-deep .slick-dots {
    left: 88px;
  }
}
@media screen and (max-width: 350px) {
  ::v-deep .slick-dots {
    left: 60px;
  }
}
</style>
