<template>
  <div>
    <Booking-purchaseDefault
      :bookingPurchase="bookingPurchase"
      class="flex flex-col"
    />
    <StocksDefault :stocks="stocks" />
    <RecommendationsDefault />
    <NewsDefault />
    <PartnersDefault :partners="partners" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      info: null,
      name: "",
      password: "",
      bookingPurchase: [
        {
          text: "Авиабилеты",
          icon: "#flights",
        },
        {
          text: "Отели",
          icon: "#hotels",
        },
        {
          text: "Выездные туры",
          icon: "#field-tours",
        },
        {
          text: "Внутренние туры",
          icon: "#domestic-tours",
        },
      ],
      reviews: [
        {
          id: 1,
          title: "Отлично",
          quantity: 712,
        },
        {
          id: 2,
          title: "Отлично",
          quantity: 812,
        },
        {
          id: 3,
          title: "Отлично",
          quantity: 912,
        },
      ],
      stocks: {
        title: "Акции",
        list: [
          "Все",
          "Отели",
          "Авиабилеты",
          "Выездной туризм",
          "Внутренний туризм",
        ],
        card: {
          src: "/images/images1.jpg",
          list: "Туры",
          promo: "Акция",
          title: "Белый песок в море",
          description: "Лучшие курорты для отдыха на море в Греции со скидкой!",
        },
      },
      partners: {
        src: "/partners/cocacola.jpg",
      },
    };
  },

  head: {
    title: "Главная",
  },
  computed: {
    ...mapState({
      currency: (state) => state.api.currency,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
      get_user: "auth/get_user",
    }),
    async getCurrency() {
      let payload = {
        request: "/Currencies/",
        key: "currency",
        body: [],
      };
      await this.get_page(payload);
    },
  },
  mounted() {
    this.getCurrency();
    this.get_user();
  },
};
</script>
