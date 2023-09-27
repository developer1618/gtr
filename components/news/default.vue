<template>
  <div class="news mob-cont">
    <div class="title flex justify-between mb-6">
      <span class="font-black text-base-4">Новости</span>
      <NuxtLink to="allNews" class="font-normal text-secondary-2 text-base-2">
        Все новости
      </NuxtLink>
    </div>
    <div class="hidden sm:flex flex-wrap gap-3 justify-between news-cont">
      <Card
        v-for="(to, ind) in news"
        type="news"
        :key="ind"
        :list="to.updated_at"
        :description="to.description"
        :myId="to.id"
        :class="ind > 3 ? 'hidden' : ''"
      >
      </Card>
    </div>
    <div class="flex news-loader justify-between" v-if="loaded">
      <LoaderApi type="news" v-for="(_, id) in 4" :key="id" />
    </div>
    <div v-if="news.length > 1" class="block sm:hidden">
      <VueSlickCarousel v-bind="settings">
        <Card
          v-for="(to, ind) in news"
          type="news"
          :list="to.updated_at"
          :description="to.description"
          :myId="to.id"
        >
        </Card>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapState, mapActions, mapGetters } from "vuex";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import LoaderApi from "../skeleteon/LoaderApi.vue";
export default {
  components: {
    VueSlickCarousel,
    LoaderApi,
  },
  data() {
    return {
      filtNews: [],
      body: null,
      settings: {
        infinite: false,
        slidesToShow: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 2500,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 0,
              infinite: true,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      news: (state) => state.api.news,
      loaded: (state) => state.api.loading.news,
    }),
  },
  methods: {
    ...mapActions({
      get_news: "api/get_page",
    }),
    async getAllNews() {
      let payload = {
        request: `/NewsLast/`,
        key: "news",
        body: [],
      };
      await this.get_news(payload);
    },
  },
  mounted() {
    this.getAllNews();
  },
};
</script>
<style scoped>
::deep(.slick-next) {
  right: 0;
  z-index: -1000;
}
@media screen and (max-width: 1200px) {
  .news {
    width: 100%;
  }
}
@media screen and (min-width: 680px) and (max-width: 1290px) {
  .news-cont .news {
    display: none !important  ;
  }
}
@media screen and (min-width: 300px) and (max-width: 680px) {
  .news-loader > div:not(:first-child) {
    display: none;
  }
  .news {
    padding: 0px 1rem;
  }
}
</style>
//
