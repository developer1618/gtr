<template>
  <div class="wl">
    <div>
      <svg class="hidden">
        <symbol id="right" viewBox="0 0 20 10">
          <path
            d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
          />
        </symbol>
      </svg>
    </div>
    <div
      class="card inline-block cursor-pointer rounded h-full shadow-5xl"
      :class="type === 'news' ? 'card-two' : ''"
    >
      <!-- Card for Stocks -->
      <div class="card-stocks" v-if="type === 'stocks'">
        <NuxtLink :to="`/promotion/?type=${getPromo(promotion_type)}&id=${id}`">
          <div class="relative overflow-hidden">
            <img :src="src" alt="Image" class="img w-full" />
          </div>
          <div class="pt-3 px-4 pb-13 relative">
            <div class="text-secondary-1 mb-2 text-base-1 font-medium">
              <span class="mr-2">{{ list }}</span>
              <span>{{ promo }}</span>
            </div>
            <div>
              <div v-if="title" class="title mb-1 font-semibold">
                {{ title }}
              </div>
              <div class="text text-secondary-1 limit">
                {{ description }}
              </div>
            </div>
            <div
              v-if="src"
              class="arrow__right absolute bottom-6 right-6 hidden"
            >
              <img src="/images/icons/arrowRight.svg" alt="Arrow Right" />
            </div>
          </div>
        </NuxtLink>
      </div>
      <!-- Card for Recomendcardations -->
      <div v-if="type === 'recomendations'" class="self-stretch">
        <NuxtLink :to="`/searchHotels/hotels/?id=${id}/`">
          <div class="relative overflow-hidden">
            <img :src="src" class="img w-full" />
            <div class="absolute bottom-0 right-0 flex">
              <div
                v-if="!text"
                class="p-2 bg-dark-black text-center text-white text-base-1 font-normal"
              >
                {{ parseInt(estimate) }}
              </div>
              <div class="reviews bg-white px-3 text-base-0.5">
                <p class="font-medium">
                  {{
                  `${
            estimate  === 1
            ? "Очень плохо"
            : estimate  === 2
            ? "Плохо"
            : estimate  === 3
            ? "Нормально"
            : estimate  === 4
            ? "Хорошо"
            : estimate  === 5
            ? "Отлично"
            : ''
        }`,
                  }}
                </p>
                <p>712 отзывов</p>
              </div>
            </div>
          </div>
          <div class="pt-3 px-6 pb-13 relative">
            <div class="text-secondary-1 mb-2 text-base-1 font-medium">
              <span class="mr-2">{{ list }}</span>
              <span class="mr-2">{{ promo }}</span>
            </div>
            <div>
              <div class="flex justify-between items-start gap-4 mb-6">
                <div>
                  <span class="text-base-2 font-medium">
                    {{ title }}
                  </span>
                </div>
                <div class="flex items-center gap-1" v-show="star">
                  <span>{{ parseInt(star) }}</span>
                  <img src="/images/icons/star.svg" alt="Star" />
                </div>
              </div>
              <div class="price">
                <span class="text-base-3 font-bold" v-show="price"
                  >от {{ price }} {{ cur }}
                </span>
                <p v-show="text">{{ text }}</p>
              </div>
            </div>
            <div class="arrow__right absolute bottom-6 right-6 hidden">
              <img src="/images/icons/arrowRight.svg" alt="Arrow Right" />
            </div>
          </div>
        </NuxtLink>
      </div>
      <!-- Card for News -->
      <div v-if="type === 'news'" class="news w-full">
        <div>
          <NuxtLink :to="isVacancy ? '/vacancies/' + myId : '/news/' + myId">
            <div
              class="shadow-5xl w-full bg-white card-news p-6 relative h-40 h-mob"
            >
              <div class="text-secondary-1 mb-2 text-base-1 font-medium">
                <span>{{ listFormat }} </span>
              </div>
              <div>
                <div class="card-news-text text text-secondary-1">
                  {{ description }}
                </div>
              </div>
              <div class="arrow__right absolute bottom-6 right-6 hidden">
                <NuxtLink :to="isVacancy ? '/vacancy' : '/news/' + myId">
                  <img src="/images/icons/arrowRight.svg" alt="Arrow Right" />
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
export default {
  props: [
    "type",
    "src",
    "list",
    "promo",
    "title",
    "description",
    "estimate",
    "price",
    "star",
    "reviews",
    "text",
    "myId",
    "isVacancy",
    "id",
    "promotion_type",
  ],
  data() {
    return {
      rout: [],
    };
  },

  computed: {
    listFormat() {
      return moment(this.list).locale("ru").format("DD MMMM YYYY");
    },
    getPromo() {
      return (type) => {
        switch (type) {
          case 1:
            return "PromotionHotels";
          case 2:
            return "PromotionAirTickets";
          case 3:
            return "PromotionOutdoorTours";
          case 4:
            return "PromotionIndoorTours";
          default:
        }
      };
    },
    ...mapState({
      data: (state) => state.api.data.results,
      cur: (state) => state.page.currency.activeCurrency,
    }),
  },
  methods: {
    ...mapActions({
      get_news: "api/get_page",
    }),

    async getNews() {
      let payload = {
        request: `/News`,
        key: "data",
        body: [],
      };
      await this.get_news(payload);
    },
  },
};
</script>
<style scoped>
.card {
  width: 300px;
}
@media screen and (max-width: 1100px) {
  .wl {
    width: 100%;
  }
}
.card-news-text {
  overflow: hidden;
  width: 100%;
  height: 80px;
  text-overflow: ellipsis;
}
.limit {
  max-width: 100%;
  overflow: hidden;
  width: 300px;
  height: 50px;
  text-overflow: ellipsis;
}
.img {
  height: 200px;
}
.card-two {
  max-height: 160px !important;
  width: 302px;
  margin-left: auto;
}
.card:hover .img {
  transform: scale(1.1);
  transition: all 0.3s ease;
}
.card-stocks {
  height: 100%;
}
.card:hover .arrow__right {
  display: block;
}
.card-news:hover .card-news-text {
  color: #333;
}
.reviews {
  opacity: 0;
  margin-left: -96px;
}
.card:hover .reviews {
  margin-left: 0;
  opacity: 1;
  transition: all 0.5s ease;
}
.icon {
  fill: #4c95ff;
}
.price {
  margin-top: -20px;
}
.price p {
  margin-bottom: -1px;
  max-width: 300px;
  font-size: 14px;
  color: #666666;
}

@media screen and (max-width: 1100px) {
  .card {
    width: 100%;
  }
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .card-two {
    width: 100%;
  }

  .card-news {
    padding: 15px 10px;
  }
}
</style>
