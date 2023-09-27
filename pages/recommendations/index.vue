<template>
  <div class="pt-14 pb-20">
    <div class="flex mb-4 gap-2">
      <NuxtLink to="/"><p>Главная</p></NuxtLink>
      <p>></p>
      <NuxtLink to="/recommendations"><p>Рекомендации</p></NuxtLink>
    </div>
    <div class="cards grid grid-cols-4 gap-8" v-if="loaded">
      <LoaderApi type="promotion" v-for="(_, id) in 8" :key="id" />
    </div>
    <div class="cards grid grid-cols-4 gap-8" v-if="recomend.length > 1">
      <Card
        v-for="recomend in recomend"
        :key="recomend.id"
        type="recomendations"
        :src="recomend.image"
        :id="recomend.id"
        list="Отель"
        :title="recomend.hotel_name"
        :estimate="recomend.mark"
        :price="recomend.price"
        :star="recomend.mark"
        class="w-full"
      >
      </Card>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import LoaderApi from "~/components/skeleteon/LoaderApi.vue";
export default {
  computed: {
    ...mapState({
      recomend: (state) => state.api.recomend,
      loaded: (state) => state.api.loaded,
    }),
  },
  methods: {
    ...mapActions({
      get_recom: "api/get_page",
    }),
    async getRecommendations() {
      let payload = {
        request: `/Hotels/?limit=50`,
        key: "recomend",
        body: [],
      };
      await this.get_recom(payload);
    },
  },
  mounted() {
    this.getRecommendations();
  },
  components: { LoaderApi },
};
</script>
<style></style>
