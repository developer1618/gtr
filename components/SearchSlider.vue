<template>
  <div
    class="mb-6 relative res"
    v-if="
      this.$route.name === 'searchFlights' ||
      this.$route.name === 'searchHotels'
    "
  >
    <svg
      width="24"
      @click="showPrev"
      height="24"
      style="left: -10px"
      class="absolute top-10 cursor-pointer"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z"
        fill="#333"
      />
    </svg>
    <VueSlickCarousel v-bind="settings" ref="carousel" class="px-5">
      <div
        class="item px-0 py-4 shadow-2xl rounded text-base-1 text-center cursor-pointer"
        :class="toggle === card.format ? 'bg-black text-white' : 'bg-white'"
        v-for="(card, index) in cards"
        @click="onToggle(card)"
        :key="index"
      >
        <div class="mb-1">
          <p class="font-normal">
            {{ card.data }}
          </p>
        </div>
        <div class="item-text">
          <p class="font-light">
            {{ card.text }}
          </p>
        </div>

        <!-- <div class="item-price hidden">
          <p class="font-normal">
            {{ card.price }}
          </p>
        </div> -->
      </div>
    </VueSlickCarousel>
    <svg
      @click="showNext"
      width="24"
      height="24"
      style="right: -10px"
      class="absolute top-10 cursor-pointer"
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
import moment from "moment";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: ["toShowSlider"],
  data() {
    return {
      date: "PT1H30M",
      toggle: this.$route.query.when,
      settings: {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              initialSlide: 0,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              initialSlide: 0,
              infinite: true,
            },
          },
        ],
      },
      cards: [
        {
          format: moment().format("YYYY-MM-DD"),
          formatBack: moment().add(10, "days").format("YYYY-MM-DD"),
          data: `${moment().format("DD MMM dd")} - ${moment()
            .add(10, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(1, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(11, "days").format("YYYY-MM-DD"),
          data: `${moment().add(1, "days").format("DD MMM dd")} - ${moment()
            .add(11, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(2, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(12, "days").format("YYYY-MM-DD"),
          data: `${moment().add(2, "days").format("DD MMM dd")} - ${moment()
            .add(12, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(3, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(13, "days").format("YYYY-MM-DD"),
          data: `${moment().add(3, "days").format("DD MMM dd")} - ${moment()
            .add(13, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(4, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(14, "days").format("YYYY-MM-DD"),
          data: `${moment().add(4, "days").format("DD MMM dd")} - ${moment()
            .add(14, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(5, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(15, "days").format("YYYY-MM-DD"),
          data: `${moment().add(5, "days").format("DD MMM dd")} - ${moment()
            .add(15, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(6, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(16, "days").format("YYYY-MM-DD"),
          data: `${moment().add(6, "days").format("DD MMM dd")} - ${moment()
            .add(16, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(7, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(17, "days").format("YYYY-MM-DD"),
          data: `${moment().add(7, "days").format("DD MMM dd")} - ${moment()
            .add(17, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(8, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(18, "days").format("YYYY-MM-DD"),
          data: `${moment().add(8, "days").format("DD MMM dd")} - ${moment()
            .add(18, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(9, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(10, "days").format("YYYY-MM-DD"),
          data: `${moment().add(9, "days").format("DD MMM dd")} - ${moment()
            .add(19, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(10, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(10, "days").format("YYYY-MM-DD"),
          data: `${moment().add(10, "days").format("DD MMM dd")} - ${moment()
            .add(20, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(11, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(21, "days").format("YYYY-MM-DD"),
          data: `${moment()
            .add(11, "days")
            .format("DD MMM dd")} - ${moment().format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
        {
          format: moment().add(12, "days").format("YYYY-MM-DD"),
          formatBack: moment().add(12, "days").format("YYYY-MM-DD"),
          data: `${moment().add(12, "days").format("DD MMM dd")} - ${moment()
            .add(22, "days")
            .format("DD MMM dd")}`,
          text: "смотреть",
          price: "от 455 USD",
        },
      ],
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
    onToggle(val) {
      this.toggle = val.format;
      if (this.$route.name === "searchFlights") {
        this.$router.push(
          `?from=${this.$route.query.from}&to=${this.$route.query.to}&direction=${this.$route.query.direction}&passenger=${this.$route.query.passenger}&class=${this.$route.query.class}&when=${val.format}&vain=${val.formatBack}`
        );
      }
    },
  },

  components: {
    VueSlickCarousel,
  },
};
</script>
<style scoped>
.item:hover {
  background-color: #333;
  transition: all 0.3s ease;
  color: #fff;
}
/* .item:hover .item-text {
  display: none;
} */
/* .item:hover .item-price {
  display: block;
} */
::v-deep .slick-track {
  display: flex;
  margin-top: 20px !important;
}
::v-deep .slick-track > div:not(:last-child) {
  margin-right: 20px;
}
::v-deep .slick-dots li button {
  border-radius: 12px;
  background-color: #f0f0f0;
  height: 10px;
  width: 20px;
}
::v-deep .slick-arrow .slick-prev::before {
  left: 0 !important;
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
.slick-track {
  display: flex;
  gap: 2rem;
}
::v-deep .slick-dots {
  top: -25px;
  height: fit-content;
}
::v-deep .slick-next {
  right: 0;
  z-index: -100;
}
</style>
