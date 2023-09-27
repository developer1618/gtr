<template>
  <SearchBlock
    :head="head"
    :url="url"
    :countity="countity"
    :blockTitle="block_title"
    :blockTitleBottom="block_title_bottom"
    :blockStar="block_star"
    :food="food"
    :foodText="food_text"
    :trans="trans"
    :transText="trans_text"
    :link="link"
    :hotel="hotel"
    :button="button"
    :buttonTop="buttonTop"
    :isTours="isTours"
  />
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  head: {
    title: "Отели",
  },
  data() {
    return {
      head: "Отели",
      url: "/images/hotel.png",
      countity: 4,
      block_title: "Porto Fira Suites",
      block_star: true,
      block_title_bottom: "Caldera Cliffs, Fira, 84 700, Santorini",
      food: "Питание",
      food_text: "З вида на выбор",
      trans: "Транспорт",
      trans_text: "2 вида на выбор",
      link: "/searchHotels/hotels",
      buttonTop: "доступно 17 номеров",
      button: "Подробнее",
      isTours: 2,
    };
  },
  computed: {
    ...mapState({
      hotel: (state) => state.api.hotels,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getHotels() {
      let payload = {
        request: `/SearchHotel/?city=${this.$route.query.from}&price=${this.$route.query.price}`,
        body: [],
        key: "hotels",
      };
      await this.get_page(payload);
    },
  },
  mounted() {
    this.getHotels();
  },
  watch: {
    $route() {
      this.getHotels();
    },
  },
};
</script>
