<template>
  <SearchBlock
    :head="head"
    :url="url"
    :countity="countity"
    :blockTitle="block_title"
    :blockTitleBottom="block_title_bottom"
    :blockTitleSpan="block_title_span"
    :food="food"
    :foodText="food_text"
    :trans="trans"
    :toShowSlider="toShowSlider"
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
    title: "Выездные туры",
  },
  computed: {
    ...mapState({
      inTours: (state) => state.api.inTours,
    }),
  },
  data() {
    return {
      head: "Выездные туры",
      url: "/images/cart.png",
      countity: 5,
      block_title: "Sultan Cave Suites 3*",
      block_title_span: "(Dubai)",
      block_title_bottom: "Заезд 22.10-27.10 | 5 ночей",
      food: "Питание",
      food_text: "BB",
      trans: "Номер/Размещение",
      trans_text: "Люкс/DBL",
      link: "/OutdoorTours/insideTours",
      toShowSlider: false,
      button: "Подробнее",
      isTours: 3,
    };
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getInTours() {
      let payload = {
        request: `/SearchOutdoorTour/?from_place=${this.$route.query.from}&to_place=${this.$route.query.to}&price=${this.$route.query.price}`,
        key: "inTours",
        body: [],
      };
      await this.get_page(payload);
    },
  },
  mounted() {
    this.getInTours();
  },
  watch: {
    $route() {
      this.getInTours();
    },
  },
};
</script>
