<template>
  <SearchBlock
    :head="head"
    :url="url"
    :blockTitle="block_title"
    :blockTitleBottom="block_title_bottom"
    :food="food"
    :foodText="food_text"
    :trans="trans"
    :transText="trans_text"
    :link="link"
    :inTours="inTours"
    :button="button"
    :isTours="isTours"
  />
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  head: {
    title: "Внутреные туры",
  },
  computed: {
    ...mapState({
      inTours: (state) => state.api.inTours,
      domestic: (state) => state.flights.domesticTours,
    }),
  },
  data() {
    return {
      head: "Внутреные туры",
      url: "/images/exit.png",
      block_title: "Тур в Искандаркуль",
      block_title_bottom: "22.10-27.10 | 5 ночей",
      food: "Место сбора",
      food_text: "ТЦ “Садбарг”",
      trans: "Транспорт",
      trans_text: "Mercedes Sprinter",
      link: "/IndoorTours/tours",
      button: "Подробнее",
      isTours: 4,
    };
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getTours() {
      let payload = {
        // request: "/IndoorTours/",
        request: `/SearchIndoorTour/?town=${this.$route.query.city}&price=${this.$route.query.price}`,
        body: [],
        key: "inTours",
      };
      await this.get_page(payload);
    },
  },
  mounted() {
    this.getTours();
  },
  watch: {
    $route() {
      this.getTours();
    },
  },
};
</script>
