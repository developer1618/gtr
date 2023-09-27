<template>
  <div class="pt-14 pb-20">
    <div class="flex mb-4 gap-2">
      <NuxtLink to="/"><p>Главная</p></NuxtLink>
      <p>></p>
      <NuxtLink to="/allStocks"><p>Все акции</p></NuxtLink>
    </div>
    <div class="grid grid-cols-4 gap-8" v-if="loaded">
      <LoaderApi
        secondClass="w-58  pb-4"
        type="promotion"
        v-for="(_, id) in 8"
        :key="id"
      />
    </div>

    <div
      class="cards grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8"
      v-if="promotion.length > 1"
    >
      <Card
        v-for="promo in promotion"
        :key="promo.id"
        type="stocks"
        :src="promo.image"
        :id="promo.id"
        list="Отель"
        :title="promo.promo_description"
        class="w-full"
      >
      </Card>
    </div>
    <div class="flex justify-center">
      <Pagination
        secondClass="mt-6"
        :totalPages="countPage"
        :curPage="curPage"
        @onPage="curPage = $event"
        @onNext="curPage++"
        @onPrev="curPage--"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import LoaderApi from "~/components/skeleteon/LoaderApi.vue";
export default {
  data() {
    return {
      curPage: 1,
      countPage: null,
      request: `/Promotions/?page=1`,
      promotion: [],
    };
  },
  computed: {
    ...mapState({
      loaded: (state) => state.api.loaded,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async getStocks() {
      let payload = {
        request: this.request,
        body: [],
      };
      await this.get_page(payload);
      this.promotion = payload.body.results;
      this.countPage = Math.round(payload.body.count / 16);
    },
  },
  mounted() {
    this.getStocks();
  },
  watch: {
    curPage(val) {
      this.request = `/Promotions/?page=${val}`;
      this.getStocks();
    },
  },
  components: { LoaderApi },
};
</script>
<style></style>
